# from django.shortcuts import render
from django.http import JsonResponse
import json
# Create your views here.


def index(request):
    if(request.method == "GET"):
        print("GET")
    elif(request.method == "POST"):
        print("POST")
    response = {
        "data": None,
        "message": "",
        "error": False
    }
    return JsonResponse(response)


def portfolio(request):
    if(request.method == "GET"):
        with open("static/data.json") as file:
            data = json.load(file)
    response = {
        "data": data,
        "message": "",
        "error": False
    }
    return JsonResponse(response)
