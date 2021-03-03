from django.urls import path

from .views import ProfileListView, ProfileDetailView, ProfileDetailIntView, ProfileEditView

app_name='accounts'


urlpatterns = [
    path('profiles/', ProfileListView.as_view()),
    path('profiles/detail/', ProfileDetailView.as_view()),
    path('profiles/<int:pk>/', ProfileDetailIntView.as_view()),
    path('profiles/images/<int:pk>', ProfileEditView.as_view()),
]
