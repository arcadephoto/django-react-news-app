from django.db import models
from django.conf import settings


class Article(models.Model):


    # setoptions

    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=255, null=True)
    body = models.TextField(null=True)
    published = models.BooleanField(default=False)
    # phase = models.CharField(default='draft')

    def __str__(self):
        return self.title
