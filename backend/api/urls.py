from django.urls import path
from . import views

urlpatterns = [
    path('v2/', views.index),
]
