from rest_framework import serializers

class PredictSerializer(serializers.Serializer):
    features = serializers.ListField(
        child=serializers.FloatField(),
        min_length=1
    )
