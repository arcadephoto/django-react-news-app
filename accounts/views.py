from django.shortcuts import render, get_object_or_404


from rest_framework import generics

from .models import Profile
from .serializers import ProfileSerializer


# Create your views here.
class ProfileListView(generics.ListCreateAPIView):
    serializer_class = ProfileSerializer
    def get_queryset(self):
        queryset = Profile.objects.all()
        queryset = queryset.filter(user=self.request.user)
        return queryset
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ProfileDetailView(generics.RetrieveUpdateAPIView):
        serializer_class = ProfileSerializer
        def get_queryset(self):
            queryset = Profile.objects.all()
            queryset = queryset.filter(user=self.request.user)
            return queryset
        def get_object(self):
            return get_object_or_404(Profile, user=self.request.user)

class ProfileDetailIntView(generics.RetrieveAPIView):
        serializer_class = ProfileSerializer
        def get_queryset(self):
            queryset = Profile.objects.all()
            queryset = queryset.filter(user=self.request.user)
            return queryset


class ProfileEditView(generics.UpdateAPIView):
    serializer_class = ProfileSerializer
    def get_queryset(self):
        queryset = Profile.objects.all()
        queryset = queryset.filter(user=self.request.user)
        return queryset
