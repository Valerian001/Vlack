from django.urls import path
from .views import index

app_name = 'landingpage'
urlpatterns =[
    path("", index, name='page')
]