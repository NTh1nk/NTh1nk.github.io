from concurrent.futures import thread
from wsgiref import headers
import requests
import threading

url = 'https://stats.popcat.click/pop?pop_count=800'

data =   { 

    ':path': '/pop?pop_count=800p'
    '"Location":{"Code":"KP"}'
    
}


5

def do_request(): 
    number = 0
    for i in range(1):
        response = requests.post(url, data=data).text
        number = number + 1
        print(number)
        print(response)
threads = []

for i in range(50):
    t = threading.Thread(target=do_request)
    t.daemon = True
    threads.append(t)

for i in range(50):
    threads[i].start()

for i in range(50):
    threads[i].join()
