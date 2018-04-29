from django.conf.urls import url
from . import views
from django.conf import settings
from django.conf.urls.static import static

app_name="sites"
urlpatterns = [
    url(r'^alarm/dispatch$', views.dispatch, name='dispatch'),
    url(r'^gettoken$', views.gettoken, name='gettoken'),
]
