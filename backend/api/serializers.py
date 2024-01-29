from rest_framework import serializers
from .models import Product, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['category_id', 'category_name']

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer()  # İlişkili Category nesnesinin serializer'ını kullanıyoruz

    class Meta:
        model = Product
        fields = ['id', 'category', 'name', 'content', 'price']
