from django.db import models

# Create your models here.
class FormModel(models.Model):
        # fields of the model

    your_Name = models.CharField(max_length=100)
    your_Email = models.EmailField()
    your_Phone = models.CharField(max_length=11)
    your_Company = models.CharField(max_length=100)
    Message = models.CharField(max_length=300)
   
        # renames the instances of the model
        # with their name
    def __str__(self):
        return self.your_Name