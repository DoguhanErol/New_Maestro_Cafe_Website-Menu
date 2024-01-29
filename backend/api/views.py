
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Product, Category
from .serializers import ProductSerializer,CategorySerializer

class ProductListByCategoryView(APIView):
    def get(self, request, category_id):
        try:
            products = Product.objects.filter(category_id = category_id)
            serializer = ProductSerializer(products, many=True)
            return Response(serializer.data)
        except Product.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

class CategoriesView(APIView):
    def get(self, request):
        try:
            categorys = Category.objects.all()
            serializer = CategorySerializer(categorys, many=True)
            return Response(serializer.data)
        except Category.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
