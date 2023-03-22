from django.forms import ModelForm
from .models import FormModel

class ContactForm(ModelForm):
    class Meta:
        model = FormModel
        fields = "__all__"