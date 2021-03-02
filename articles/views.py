from django.shortcuts import render
from rest_framework import generics, permissions

from .models import Article
from .serializers import ArticleSerializer

# Create your views here.
class ArticlesListView(generics.ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (permissions.AllowAny,)
