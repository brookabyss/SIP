from django.conf.urls import url
from . import views
from django.conf import settings
from django.conf.urls.static import static

app_name="loginReg"
urlpatterns = [
    url(r'^login$', views.login, name='index'),
]
# +static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
