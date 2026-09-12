from django.db import models


class ContactMessage(models.Model):
    name = models.CharField(max_length=100)

    email = models.EmailField()

    message = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)

    is_read = models.BooleanField(default=False)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.name} - {self.email}"


class Project(models.Model):
    title = models.CharField(max_length=200)

    description = models.TextField()

    technologies = models.JSONField(default=list)

    image = models.CharField(
        max_length=300,
        blank=True
    )

    github_url = models.URLField(
        blank=True
    )

    live_url = models.URLField(
        blank=True
    )

    featured = models.BooleanField(
        default=False
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    class Meta:
        ordering = ["-featured", "-created_at"]

    def __str__(self):
        return self.title


class Skill(models.Model):
    CATEGORY_CHOICES = [
        ("programming", "Programming"),
        ("ai", "AI & Machine Learning"),
        ("web", "Web Development"),
        ("database", "Database"),
        ("mobile", "Mobile Development"),
        ("security", "Cyber Security"),
    ]

    name = models.CharField(max_length=100)

    category = models.CharField(
        max_length=30,
        choices=CATEGORY_CHOICES
    )

    description = models.TextField(
        blank=True
    )

    level = models.PositiveIntegerField(
        default=75
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    class Meta:
        ordering = ["category", "name"]

    def __str__(self):
        return f"{self.name} - {self.category}"