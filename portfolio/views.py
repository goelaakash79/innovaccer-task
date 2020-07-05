from django.http import JsonResponse
from django.core.mail import send_mail
import json
import os


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


def sendEmail(request):
    if(request.method == "POST"):
        data = json.loads(request.body)
        name = data["name"]
        email = data["email"]
        message = data["message"]
        print(os.environ.get("EMAIL_HOST_PASSWORD"))
        email_res = send_mail(f'Message from {name}',
                              f'{message}\n\n**Reply to {email} in order to have a conversation.\n\n---\nInnovaccer Hiring Task',
                              "goelaakash79@gmail.com",
                              ["goelaakash79@gmail.com"],
                              fail_silently=False)
        if(email_res == 1):
            response = {
                "data": None,
                "message": "email sent",
                "error": False
            }
        else:
            response = {
                "data": None,
                "message": email_res,
                "error": True
            }
    else:
        response = {
            "data": None,
            "message": "request method not allowed",
            "error": True
        }
    return JsonResponse(response)
