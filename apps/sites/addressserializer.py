from rest_framework import serializers
from .models import Address

class AddressSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    site_id=serializers.PrimaryKeyRelatedField(read_only=True, many=True)
    line_1=serializers.CharField(read_only=True)
    line_2=serializers.CharField(read_only=True)
    line_3=serializers.CharField(read_only=True)
    city=serializers.CharField(read_only=True)
    region_state=serializers.CharField(read_only=True)
    country=serializers.CharField(read_only=True)
    other_details=serializers.CharField(read_only=True)
    zipcode=serializers.CharField(read_only=True)
    created_at=serializers.DateTimeField()
    updated_at=serializers.DateTimeField()
    
    
    
   