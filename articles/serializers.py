from rest_framework import serializers

from .models import Article

class ArticleSerializer(serializers.ModelSerializer):
    # author = serializers.StringRelatedField(source='author.username')
    username = serializers.ReadOnlyField(source='author.username')
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Article
        fields = '__all__'
