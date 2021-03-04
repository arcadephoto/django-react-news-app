from django.shortcuts import render
from rest_framework import generics, permissions

from .models import Article
from .serializers import ArticleSerializer

from .permissions import IsOwnerOrReadOnly

# Create your views here.
class ArticlesListView(generics.ListAPIView):
    # queryset = Article.objects.all()
    queryset = Article.objects.filter(published=True)
    serializer_class = ArticleSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]




class ArticlesUpdateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                      IsOwnerOrReadOnly]

    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)

class DraftsListView(generics.ListAPIView):
    serializer_class = ArticleSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        queryset = Article.objects.all()
        queryset = queryset.filter(phasechoices='DR')
        queryset = queryset.filter(owner=self.request.user)
        return queryset

class DraftsEditView(generics.RetrieveUpdateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                      IsOwnerOrReadOnly]


class DraftsSubmitView(generics.CreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
