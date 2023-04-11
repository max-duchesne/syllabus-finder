from rest_framework import routers
from .views import SyllabusViewSet

router = routers.DefaultRouter()
router.register('api/syllabi', SyllabusViewSet)

urlpatterns = router.urls
