# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render


import json;
import codecs;


@api_view(['POST'])
def login(request):
    print("login");
    

# Create your views here.
