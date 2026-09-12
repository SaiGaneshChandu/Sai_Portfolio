from rest_framework import serializers

from .models import ContactMessage, Project, Skill


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage

        fields = [
            "id",
            "name",
            "email",
            "message",
            "created_at",
            "is_read",
        ]

        read_only_fields = [
            "id",
            "created_at",
            "is_read",
        ]


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project

        fields = [
            "id",
            "title",
            "description",
            "technologies",
            "image",
            "github_url",
            "live_url",
            "featured",
            "created_at",
        ]

        read_only_fields = [
            "id",
            "created_at",
        ]


class SkillSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(
        source="get_category_display",
        read_only=True
    )

    class Meta:
        model = Skill

        fields = [
            "id",
            "name",
            "category",
            "category_display",
            "description",
            "level",
            "created_at",
        ]

        read_only_fields = [
            "id",
            "category_display",
            "created_at",
        ]