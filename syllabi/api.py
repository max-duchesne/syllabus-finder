from .models import Syllabus
from rest_framework import viewsets, permissions
from .serializers import SyllabusSerializer

class SyllabusViewSet(viewsets.ModelViewSet):
    queryset = Syllabus.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SyllabusSerializer