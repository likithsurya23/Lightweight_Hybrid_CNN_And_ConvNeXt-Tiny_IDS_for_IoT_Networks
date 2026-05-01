
import torch
import sys
import os
import django
from django.conf import settings
from sklearn.preprocessing import StandardScaler, LabelEncoder

# Setup Django environment
sys.path.append(os.getcwd())
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ids_backend.settings")
django.setup()

from model.hybrid_model import scaler

try:
    if hasattr(scaler, "feature_names_in_"):
        print("Feature names found:")
        print(scaler.feature_names_in_)
    else:
        print("No feature names found in scaler.")
except Exception as e:
    print(f"Error inspecting scaler: {e}")
