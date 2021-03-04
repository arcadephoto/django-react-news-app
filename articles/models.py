from django.db import models
from django.conf import settings


class Article(models.Model):


    DRAFT = 'DR'
    SUBMITTED = 'SU'
    PUBLISHED = 'PU'
    ARCHIVED = 'AR'
    REJECTED = 'RE'
    PHASE_CHOICES = [
        (DRAFT, 'Draft'),
        (SUBMITTED, 'Submitted'),
        (PUBLISHED, 'Published'),
        (ARCHIVED, 'Archived'),
        (REJECTED, 'Rejected'),
    ]


    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=255, null=True)
    body = models.TextField(null=True)
    published = models.BooleanField(default=False)
    phasechoices = models.CharField(
        max_length=2,
        choices=PHASE_CHOICES,
        default=DRAFT, null=True)


    def __str__(self):
        return self.title
