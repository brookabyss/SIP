# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.urls import reverse
from django.http import HttpResponse
from django.shortcuts import render
from ..authhelper import get_signin_url

import json;
import codecs;


@api_view(['POST'])
def dispatch(request):
    redirect_uri = request.build_absolute_uri(reverse('sites:gettoken'))
    sign_in_url = get_signin_url(redirect_uri)
    print redirect_uri
    return Response(json.dumps({'status':sign_in_url}))
    
def gettoken(request):
  auth_code = request.GET['code']
  return HttpResponse('Authorization code: {0}'.format(auth_code))
    

# Create your views here.
