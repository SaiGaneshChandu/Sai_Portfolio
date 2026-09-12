from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import ContactMessage, Project, Skill
from .serializers import (
    ContactMessageSerializer,
    ProjectSerializer,
    SkillSerializer,
)


class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class SkillListView(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class ContactMessageCreateView(APIView):

    def post(self, request):
        serializer = ContactMessageSerializer(
            data=request.data
        )

        if serializer.is_valid():
            serializer.save()

            return Response(
                {
                    "success": True,
                    "message": (
                        "Thank you for contacting Sai Ganesh. "
                        "Your message has been received."
                    ),
                    "data": serializer.data,
                },
                status=status.HTTP_201_CREATED,
            )

        return Response(
            {
                "success": False,
                "message": "Please check the submitted details.",
                "errors": serializer.errors,
            },
            status=status.HTTP_400_BAD_REQUEST,
        )


class PortfolioHealthView(APIView):

    def get(self, request):
        return Response(
            {
                "success": True,
                "status": "online",
                "message": "Sai Ganesh Portfolio API is running.",
            }
        )