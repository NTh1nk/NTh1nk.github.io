import requests
url = 'https://stats.popcat.click/pop?pop_count=69'

data =   { 

    ':path': '/pop?pop_count=68p'
    '"Location":{"Code":"P"}'
    'data-cf-beacon="{"token": "82302a965a804a968bb9795eed9b330f"}"'
}



response = requests.post(url, data=data).text
print(response)
