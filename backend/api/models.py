from django.db import models

class Category(models.Model):
    class Meta:
        db_table = 'katagoriler'
        verbose_name = 'Kategori'
        verbose_name_plural = 'Kategoriler'

    category_id = models.AutoField(primary_key=True)  # Birincil anahtar (primary key) olarak otomatik artan bir id ekledik
    category_name = models.CharField(
        verbose_name='Kategori Adı', default='', max_length=30, unique=True)

    def __str__(self):
        return self.category_name

class Product(models.Model):
    class Meta:
        db_table = 'urunler'
        verbose_name = 'Ürün'
        verbose_name_plural = 'Ürünler'

    id = models.AutoField(primary_key=True)  # Birincil anahtar (primary key) olarak otomatik artan bir id ekledik
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, verbose_name='Kategorisi', blank=True, null=True)
    name = models.CharField(verbose_name='Ürün Adı', default='', max_length=255)
    content = models.TextField(
        verbose_name='Ürünün İçeriği', blank=True, null=True)
    price = models.IntegerField(verbose_name='Ürünün Fiyatı', default=0)

    def __str__(self):
        return f"{self.category} - {self.name}"
