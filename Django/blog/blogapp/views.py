from django.shortcuts import render
from .models import blogmodel
# Create your views here.

def blogger(request):
    data = blogmodel.objects.all()
    print(data)
    context = {
        'data': data
    }
    if request.method=='POST':
        temp = blogmodel()
        temp.title = request.POST.get('title')
        temp.body = request.POST.get('blogbody')
        temp.save()
    return render(request,'blog.html',context=context)