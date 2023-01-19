#from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.

class PageView(TemplateView):
    template_name = "landingpage/index.html"