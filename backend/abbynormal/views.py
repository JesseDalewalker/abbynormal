from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions, filters, generics
from .serializers import *
from .views_auth import *
from .models import *


# ViewSets are DRF magic
# ViewSets will handle incoming requests from the client, process them, and send JSON responses
# handles List, Create, Detail, Update, Partial Update, Delete

class CreateStoryViewSet(ModelViewSet):
    #queryset = TaskList.objects.all() # consider all task lists
    serializer_class = CreateStorySerializer
    
    

    def perform_create(self, serializer): # MUST be named this to override functionality
        serializer.save(creator=self.request.user)
        return super().perform_create(serializer)

    def get_queryset(self): # MUST be named this to override functionality
        if self.request.user.is_superuser:
            return CreateStory.objects.all()
        return CreateStory.objects.filter(creator=self.request.user) 

class StoriesAPIView(generics.ListCreateAPIView):
    search_fields = ['city', 'state']
    filter_backends = (filters.SearchFilter,)
    queryset = CreateStory.objects.all()
    serializer_class = CreateStorySerializer


class ImagesViewSet(ModelViewSet):
    # queryset = Images.objects.all()
    serializer_class = ImagesSerializer

    def perform_create(self, serializer): # MUST be named this to override functionality
        serializer.save(uploader=self.request.user)
        return super().perform_create(serializer)

    def get_queryset(self): # MUST be named this to override functionality
        if self.request.user.is_superuser:
            return Images.objects.all()
        return Images.objects.filter(uploader=self.request.user) 


class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self): # this is a method that exists in ModelViewSet (or below)
        if self.request.method == "POST":
            return (permissions.AllowAny(),)
        elif self.request.method == "PATCH":
            return (permissions.IsAuthenticated(),)
        return (permissions.IsAdminUser(),)


