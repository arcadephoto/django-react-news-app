
from rest_framework import serializers


from rest_auth.models import TokenModel

from .models import Profile

class ProfileSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Profile
        # fields = ('__all__')
        fields = ('id', 'profile_picture', 'username')


class TokenSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = TokenModel
        fields = ('key', 'username')
