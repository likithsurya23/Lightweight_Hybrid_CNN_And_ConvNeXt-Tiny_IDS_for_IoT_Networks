from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import torch
import numpy as np
import pandas as pd  
from datetime import datetime
from .serializers import PredictSerializer , BatchPredictSerializer
from model.hybrid_model import model, scaler, label_encoder
from collections import Counter

model.eval()
torch.set_grad_enabled(False)

class PredictAPIView(APIView):
    def post(self, request):
        serializer = PredictSerializer(data=request.data)

        if serializer.is_valid():
            features = np.array(serializer.validated_data["features"]).reshape(1, -1)
            features = scaler.transform(features)

            X = torch.tensor(features, dtype=torch.float32).unsqueeze(1)

            with torch.no_grad():
                outputs = model(X)
                probs = torch.softmax(outputs, dim=1)
                pred_idx = torch.argmax(probs, dim=1).item()
                confidence = probs.max().item()

            label = label_encoder.inverse_transform([pred_idx])[0]

            return Response({
                "prediction": label,
                "confidence": round(confidence, 4)
            })

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BatchPredictAPIView(APIView):
    def post(self, request):
        try:
            # ---- CASE 1: FILE UPLOAD ----
            if "file" in request.FILES:
                csv_file = request.FILES["file"]

                if not csv_file.name.endswith(".csv"):
                    return Response(
                        {"error": "Unsupported file type. Only CSV files are allowed."},
                        status=status.HTTP_400_BAD_REQUEST
                    )

                df = pd.read_csv(csv_file)

                # Drop label column if present
                if df.shape[1] == 47:
                    df = df.iloc[:, :-1]

                if df.shape[1] != 46:
                    return Response(
                        {"error": f"Model expects 46 features per sample. Found {df.shape[1]} columns in CSV."},
                        status=status.HTTP_400_BAD_REQUEST
                    )

                samples = df.values.astype(np.float32)

            # ---- CASE 2: JSON INPUT ----
            else:
                serializer = BatchPredictSerializer(data=request.data)
                if not serializer.is_valid():
                    return Response({
                        "error": "Invalid JSON format",
                        "details": serializer.errors
                    }, status=status.HTTP_400_BAD_REQUEST)

                samples_list = serializer.validated_data["samples"]
                samples = np.array(samples_list, dtype=np.float32)

                # Compatibility: drop 47th column if present in list
                if samples.ndim == 2 and samples.shape[1] == 47:
                    samples = samples[:, :-1]

                if samples.ndim != 2 or samples.shape[1] != 46:
                    return Response(
                        {"error": f"Model expects 46 features per sample. Your input has {samples.shape[1] if samples.ndim==2 else 'invalid dimensions'}."},
                        status=status.HTTP_400_BAD_REQUEST
                    )

        except Exception as e:
            return Response(
                {"error": f"Failed to process input: {str(e)}"},
                status=status.HTTP_400_BAD_REQUEST
            )

        # ================= MODEL PIPELINE (COMMON) =================
        try:
            samples = scaler.transform(samples)

            batch_size = 256
            all_probs = []

            for i in range(0, len(samples), batch_size):
                batch = samples[i:i + batch_size]
                batch_tensor = torch.tensor(batch, dtype=torch.float32).unsqueeze(1)

                with torch.no_grad():
                    outputs = model(batch_tensor)
                    probs = torch.softmax(outputs, dim=1)
                    all_probs.append(probs.cpu())

            probs = torch.cat(all_probs, dim=0)
            pred_idxs = torch.argmax(probs, dim=1).numpy()
            labels = label_encoder.inverse_transform(pred_idxs)

            # ================= TOP ATTACK SUMMARY =================
            counter = Counter(labels)
            total_samples = len(labels)
            normal_count = counter.get("Normal", 0)
            attack_count = total_samples - normal_count

            # Filter and sort attacks
            attack_counter = {k: v for k, v in counter.items() if k != "Normal"}
            sorted_attacks = sorted(
                attack_counter.items(),
                key=lambda x: x[1],
                reverse=True
            )

            TOP_N = 14
            top_attacks = sorted_attacks[:TOP_N]

            attack_stats = []
            for attack, count in top_attacks:
                attack_stats.append({
                    "attack": attack,
                    "count": count,
                    "percentage": round((count / total_samples) * 100, 2)
                })

            return Response({
                "status": "success",
                "total_samples": total_samples,
                "normal_count": normal_count,
                "attack_count": attack_count,
                "top_attacks": attack_stats
            }, status=status.HTTP_200_OK)

        except Exception as e:
            return Response(
                {"error": f"Internal prediction failure: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

