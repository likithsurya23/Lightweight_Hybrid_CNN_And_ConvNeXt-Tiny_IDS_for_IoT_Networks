from django.urls import path
from .views import PredictAPIView, BatchPredictAPIView

urlpatterns = [
    path("predict/", PredictAPIView.as_view(), name="predict"),
    path("batch-predict/", BatchPredictAPIView.as_view(), name="batch-predict"),
]
