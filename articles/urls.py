from django.urls import path

from .views import ArticlesListView

app_name = 'articles'

urlpatterns = [

    path('articles/', ArticlesListView.as_view()),
]
