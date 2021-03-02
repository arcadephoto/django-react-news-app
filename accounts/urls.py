from django.urls import path

from .views import ProfileListView, ProfileDetailView, ProfileDetailIntView

app_name='accounts'


urlpatterns = [
    path('profiles/', ProfileListView.as_view()),
    path('profiles/detail/', ProfileDetailView.as_view()),
    path('profiles/<int:pk>/', ProfileDetailIntView.as_view()),
]
