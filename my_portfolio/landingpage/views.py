#from django.shortcuts import render

# from django.urls import reverse_lazy
# from django.views.generic import TemplateView
# from django.views.generic.edit import FormView,UpdateView
from django.core.mail import send_mail

from django.shortcuts import render
from landingpage.forms import ContactForm
# from landingpage.models import FormModel

# Create your views here.

# class PageView(FormView):
#     form_class = ContactForm
#     template_name = "landingpage/index.html"
#     success_url = reverse_lazy('landingpage:page')
#     def form_valid(self, form):
#         Name = form.cleaned_data['your_Name']
#         Email = form.cleaned_data['your_Email']
#         Phonenumber = form.cleaned_data['your_Phone']
#         Company_name = form.cleaned_data['your_Company']
#         Message = form.cleaned_data['Message']
#         # send_mail('You got a mail!', form, '', ['valerianvlk@gmail.com'])
#         form.save() 
#         return super(PageView, self).form_valid(form)
        
# class ContactView(FormView):
#     form_class = ContactForm
#     template_name = 'template/landingpage/index.html'
#     success_url = reverse_lazy('contact')

# class PageView(UpdateView):
#     template_name = "landingpage/index.html"
#     form_class = ContactForm
#     model = FormModel

#     # That should be all you need. If you need to do any more custom stuff 
#     # before saving the form, override the `form_valid` method, like this:

#     def form_valid(self, form):
#         self.object = form.save(commit=False)

#         # Do any custom stuff here

#         self.object.save()

#         return super(PageView, self).form_valid(form)

def index(request):
    form = ContactForm()
    
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            name = request.POST.get('your_Name')
            email = request.POST.get('your_Email')
            phone = request.POST.get('your_Phone')
            company = request.POST.get('your_Company')
            message = request.POST.get('Message')
            form_data = {
            'name':name,
            'email':email,
            'phone':phone,
            'company':company,
            'message':message,
            }
            message = '''
            From:\n\t\t{}\n
            Company:\n\t\t{}\n
            Message:\n\t\t{}\n
            Email:\n\t\t{}\n
            Phone:\n\t\t{}\n
            '''.format(form_data['name'],form_data['company'],form_data['message'], form_data['email'],form_data['phone'])
            send_mail('Client Alert!', message, 'noreply@valerian.com', ['valerianvlk.dev@gmail.com'])
    context = {'form':form}
    return render(request,'landingpage/index.html',context)