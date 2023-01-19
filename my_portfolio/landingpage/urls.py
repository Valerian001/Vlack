from django.urls import path
from landingpage.views import PageView

app_name = 'landingpage'
urlpatterns =[
    path("", PageView.as_view(), name='page')
]