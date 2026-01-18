from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

import torch
import numpy as np

from .serializers import PredictSerializer
from model.hybrid_model import model, scaler, label_encoder

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
