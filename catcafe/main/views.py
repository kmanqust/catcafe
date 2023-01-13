from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, "index.html")

def catmenu(request):
    return render(request, "catmenu.html")

def rent(request):
    return render(request, "rent.html")

def menu(request):
    return render(request, "menu.html")