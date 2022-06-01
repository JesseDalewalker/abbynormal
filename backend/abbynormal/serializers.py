from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import *


class CreateStorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CreateStory
        fields = ["id", "location", "state", "country", "city", "story_title", "description","my_image", "creator"]
        
# class CreateStoryNestedSerializer(CreateStorySerializer):
#       def to_representation(self, instance):
#           self.fields["my_image"] = ImagesSerializer()
        
#           repr = super().to_representation(instance)
        
#           repr["my_image"] = repr["image"] or "This user did not provide an image."
#           return repr

class ImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = ["id", "image", "uploader"]

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"])
        return super().create(validated_data)


