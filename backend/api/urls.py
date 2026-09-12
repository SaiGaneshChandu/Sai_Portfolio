from django.urls import path

from .views import (
    ContactMessageCreateView,
    PortfolioHealthView,
    ProjectListView,
    SkillListView,
)


urlpatterns = [
    path(
        "projects/",
        ProjectListView.as_view(),
        name="project-list",
    ),

    path(
        "skills/",
        SkillListView.as_view(),
        name="skill-list",
    ),

    path(
        "contact/",
        ContactMessageCreateView.as_view(),
        name="contact-message",
    ),

    path(
        "health/",
        PortfolioHealthView.as_view(),
        name="portfolio-health",
    ),
]