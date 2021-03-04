from django.shortcuts import render
from rest_framework import generics, permissions

# from django.contrib.auth.models import Permission, User
# from django.contrib.admin.views.decorators import staff_member_required
# from django.contrib.auth.decorators import user_passes_test
# from django.http import HttpResponse

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

class DraftsListView(generics.ListAPIView):
    serializer_class = ArticleSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        # import pdbl pdb.set_trace()
        queryset = Article.objects.all()
        if not self.request.user.is_staff:
            queryset = queryset.filter(phasechoices='DR').filter(owner=self.request.user)
        else:
            queryset = queryset.filter(phasechoices='DR')
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

class ArchivesListView(generics.ListAPIView):
    serializer_class = ArticleSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        queryset = Article.objects.all()
        queryset = queryset.filter(phasechoices='AR')
        return queryset
