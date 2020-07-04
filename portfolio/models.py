from django.db import models
# Create your models here.


class Comment(models.Model):
    sender = models.CharField(max_length=200)
    description = models.TextField()

    def _str_(self):
        return self.title
