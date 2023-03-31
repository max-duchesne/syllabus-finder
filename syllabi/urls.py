from rest_framework import routers
from.api import SyllabusViewSet

router = routers.DefaultRouter()
router.register('api/syllabi', SyllabusViewSet, 'syllabi')

urlpatterns = router.urls
