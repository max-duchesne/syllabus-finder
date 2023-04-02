from django.urls import path
from . import views

urlpatterns = [
    path('api/syllabi/', views.SyllabusListCreate.as_view()),
]

