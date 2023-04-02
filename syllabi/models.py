from django.db import models
from django.contrib.auth.models import User


def syllabus_upload_path(instance, filename):
    return f"{instance.semester}{instance.year}/{instance.course}/{instance.instructor}/{filename}"

class Syllabus(models.Model):
    YEAR_CHOICES = [(year,year) for year in range(2020, 2030)]
    SEMESTER_CHOICES = [
        ('fall', 'Fall'),
        ('janplan', 'JanPlan'),
        ('spring', 'Spring'),
    ]
        
    course = models.CharField(max_length=10)
    instructor = models.CharField(max_length=30)
    year = models.PositiveSmallIntegerField(choices=YEAR_CHOICES)
    semester = models.CharField(max_length=10, choices=SEMESTER_CHOICES)
    pdf = models.FileField(upload_to=syllabus_upload_path)
    uploaded_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    
    def __str__(self):
        return f"{self.course}-{self.semester}{self.year}-{self.instructor}"