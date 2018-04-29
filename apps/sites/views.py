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


@api_view(['POST'])
def dispatch(request):
    redirect_uri = request.build_absolute_uri(reverse('sites:gettoken'))
    sign_in_url = get_signin_url(redirect_uri)
    print redirect_uri
    return Response(json.dumps({'status':sign_in_url}))
    



def gettoken(request):
  auth_code = request.GET['code']
  redirect_uri = request.build_absolute_uri(reverse('sites:gettoken'))
  token = get_token_from_code(auth_code, redirect_uri)
  access_token = token['access_token']
  user = get_me(access_token)
  refresh_token = token['refresh_token']
  expires_in = token['expires_in']

  # expires_in is in seconds
  # Get current timestamp (seconds since Unix Epoch) and
  # add expires_in to get expiration time
  # Subtract 5 minutes to allow for clock differences
  expiration = int(time.time()) + expires_in - 300

  # Save the token in the session
  request.session['access_token'] = access_token
  request.session['refresh_token'] = refresh_token
  request.session['token_expires'] = expiration
  #return HttpResponse('User: {0}, Access token: {1}'.format(user['displayName'], access_token))
  return HttpResponseRedirect(reverse('sites:sendmail'))

  
  
def events(request):
  access_token = get_access_token(request, request.build_absolute_uri(reverse('sites:gettoken')))
  # If there is no token in the session, redirect to home
  if not access_token:
    return HttpResponseRedirect(reverse('sites:dispatch'))
  else:
    events = get_my_events(access_token)
    context = { 'events': events['value'] }
    return HttpResponseRedirect(reverse('sites:dispatch'))
    

# Create your views here.




def mail(request):
  access_token = get_access_token(request, request.build_absolute_uri(reverse('sites:gettoken')))
  # If there is no token in the session, redirect to home
  if not access_token:
    return HttpResponseRedirect(reverse('sites:dispatch'))
  else:
    messages = get_my_messages(access_token)
    return HttpResponse('Messages: {0}'.format(messages))
    
def sendMail(request):
  access_token = get_access_token(request, request.build_absolute_uri(reverse('sites:gettoken')))
  # If there is no token in the session, redirect to home
  if not access_token:
    return HttpResponseRedirect(reverse('sites:dispatch'))
  else:
    print("send email")
    messages = send_my_email(access_token)
    return HttpResponse('Messages: {0}'.format(messages))
  