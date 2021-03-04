from django.urls import path, include

from .views import ArticlesListView, ArticlesUpdateView, DraftsListView, DraftsEditView, DraftsSubmitView, ArchivesListView

app_name = 'articles'

urlpatterns = [

    path('articles/', ArticlesListView.as_view()),
    path('articles/edit/', ArticlesListView.as_view()),
    path('articles/edit/<int:pk>/', ArticlesUpdateView.as_view()),
    path('articles/edit/drafts/', DraftsListView.as_view()),
    path('articles/edit/drafts/submit/', DraftsSubmitView.as_view()),
    path('articles/edit/drafts/<int:pk>/', DraftsEditView.as_view()),
    path('articles/archives/', ArchivesListView.as_view()),
]
