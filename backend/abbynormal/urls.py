from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views_auth import *
from .views import *

# create router instance
router = DefaultRouter()

# add in the views sets that will manage resource actions
router.register("create-story", CreateStoryViewSet, basename="create-story")
router.register("images", ImagesViewSet, basename="image")
router.register("users", UserViewSet, basename="user")

# generate urls
urlpatterns = [
    path("", include(router.urls)),
    path("login/", handle_login),
    path("logout/", handle_logout),
    path('whoami/', who_am_i),
    path('stories/', StoriesAPIView.as_view())
]