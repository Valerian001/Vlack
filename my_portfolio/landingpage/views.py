from django.core.mail import send_mail
from django.shortcuts import render
from landingpage.forms import ContactForm

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