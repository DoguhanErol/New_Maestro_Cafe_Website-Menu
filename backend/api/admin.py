from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Category, Product


class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'price')
    list_filter = ('category',)
    search_fields = ('name',)
    ordering = ('category', 'price')


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('category_id',)
    search_fields = ('category_id',)
    ordering = ('category_id',)


admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
