from rest_framework import serializers
from .models import Site, Address
from .addressserializer import AddressSerializer

class SiteSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    address_id=AddressSerializer(read_only=True)
    site_name=serializers.CharField(read_only=True)
    site_code=serializers.CharField(read_only=True)
    monitored_zone=serializers.BooleanField(read_only=True)
    created_at=serializers.DateTimeField()
    updated_at=serializers.DateTimeField()
    
    
    
   