from django.http import JsonResponse

def api_view(request):
    data = {
        'message': 'Hello from Django!'
    }
    return JsonResponse(data)