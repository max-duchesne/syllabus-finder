from rest_framework import viewsets
from .models import Syllabus
from .serializers import SyllabusSerializer

class SyllabusViewSet(viewsets.ModelViewSet):
    queryset = Syllabus.objects.all()
    serializer_class = SyllabusSerializer
