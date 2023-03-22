from django.forms import ModelForm
from .models import FormModel

# class ContactForm(forms.Form):
#     your_Name = forms.CharField(max_length=100)
#     your_Email = forms.EmailField()
#     your_Phone = forms.CharField(max_length=11)
#     your_Company = forms.CharField(max_length=100)
#     Message = forms.CharField(widget=forms.Textarea)

class ContactForm(ModelForm):
    # your_Name = forms.CharField(max_length=100)
    # your_Email = forms.EmailField()
    # your_Phone = forms.CharField(max_length=11)
    # your_Company = forms.CharField(max_length=100)
    # Message = forms.CharField(widget=forms.Textarea)
    # specify the name of model to use
    class Meta:
        model = FormModel
        fields = "__all__"