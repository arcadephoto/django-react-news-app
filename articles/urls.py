from django.urls import path, include

from .views import ArticlesListView, ArticlesUpdateView

app_name = 'articles'

urlpatterns = [

    path('articles/', ArticlesListView.as_view()),
    path('articles/edit/', ArticlesListView.as_view()),
    path('articles/edit/<int:pk>/', ArticlesUpdateView.as_view()),

]
