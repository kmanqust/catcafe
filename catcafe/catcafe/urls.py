from django.contrib import admin
from django.urls import path, include
from main import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", views.index),
    path("catmenu", views.catmenu),
    path("rent", views.rent),
    path("menu", views.menu)
]
