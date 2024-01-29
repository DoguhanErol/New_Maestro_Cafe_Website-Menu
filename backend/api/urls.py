from django.urls import path
from .views import ProductListByCategoryView


urlpatterns = [
    path('v2/kategori/<int:category_id>', ProductListByCategoryView.as_view(), name='product_list_by_category'),
]
