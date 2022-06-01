from django.db import models
from django.contrib.auth.models import User

class Images(models.Model):
    image = models.TextField(default=None)
    uploader = models.ForeignKey(User, blank=True, null=True, default=None, on_delete=models.CASCADE, related_name="my_images")

    def __str__(self):
        return f'My image: {self.image}'

class CreateStory(models.Model):
    location = models.TextField(blank=True, null=True, default=None)
    state = models.CharField(max_length=50, default=None)
    country = models.CharField(max_length=50)
    city = models.CharField(max_length=100)
    story_title = models.TextField(default=None)
    description = models.TextField()
    my_image = models.TextField(null=True, blank=True, default=None)
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name="my_stories", null=True, default=None, blank=True)

    def __str__(self):
       return f'Location of abormal phenomena: {self.location}, {self.state}'
            
class MyFavorite(models.Model):
    story_id = models.ForeignKey(CreateStory, on_delete=models.CASCADE, related_name="is_favorite")
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name="My_faves")
    my_fave = models.BooleanField(default=False)

    class Meta:
        unique_together = ('story_id', 'user_id')

    


