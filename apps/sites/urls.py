from django.conf.urls import url
from . import views
from django.conf import settings
from django.conf.urls.static import static

app_name="sites"
urlpatterns = [
    url(r'^new$', views.newSite, name='newSite'),
    url(r'^alarm/dispatch$', views.dispatch, name='dispatch'),
    url(r'^gettoken$', views.gettoken, name='gettoken'),
    url(r'^events/$', views.events, name='events'),
    url(r'^mail/$', views.mail, name='mail'),
    url(r'^sendmail/$', views.sendMail, name='sendmail'),
]


