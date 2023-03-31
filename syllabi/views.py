from .models import Syllabus
from .serializers import SyllabusSerializer
from rest_framework import generics


class SyllabusListCreate(generics.ListCreateAPIView):
    queryset = Syllabus.objects.all()
    serializer_class = SyllabusSerializer
