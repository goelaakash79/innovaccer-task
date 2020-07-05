from django.urls import path

from .views import portfolio, sendEmail

urlpatterns = [
    path('', portfolio),
    path('email', sendEmail)
]
