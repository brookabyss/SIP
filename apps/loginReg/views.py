# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from ..authhelper import get_signin_url,get_access_token,get_token_from_code
from ..outlookservice import get_my_events,get_me,get_my_messages,send_my_email

import json;
import codecs;
import time;



@api_view(['GET'])
def login(request):
    redirect_uri = request.build_absolute_uri(reverse('sites:gettoken'))
    sign_in_url = get_signin_url(redirect_uri)
    print redirect_uri
    return Response(json.dumps({'status':sign_in_url}))
    

# Create your views here.
