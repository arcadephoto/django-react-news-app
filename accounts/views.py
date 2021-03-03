from django.shortcuts import render, get_object_or_404

from rest_framework import generics

from .models import Profile
from .serializers import ProfileSerializer


# Create your views here.
class ProfileListView(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ProfileDetailView(generics.RetrieveUpdateAPIView):
        serializer_class = ProfileSerializer
        queryset = Profile.objects.all()

        def get_object(self):
            return get_object_or_404(Profile, user=self.request.user)

class ProfileDetailIntView(generics.RetrieveAPIView):
        serializer_class = ProfileSerializer
        queryset = Profile.objects.all()


class ProfileEditView(generics.UpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
