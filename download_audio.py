import urllib.request
import re
import os

urls = [
    "https://ieltstrainingonline.com/practice-cam-21-listening-test-01-with-answer-and-audioscripts/",
    "https://ieltstrainingonline.com/practice-cam-21-listening-test-02-with-answer-and-audioscripts/",
    "https://ieltstrainingonline.com/practice-cam-21-listening-test-03-with-answer-and-audioscripts/",
    "https://ieltstrainingonline.com/practice-cam-21-listening-test-04-with-answer-and-audioscripts/",
    "https://ieltstrainingonline.com/practice-cam-19-listening-test-01-with-answer-and-audioscripts/",
    "https://ieltstrainingonline.com/practice-cam-19-listening-test-02-with-answer-and-audioscripts/",
    "https://ieltstrainingonline.com/practice-cam-19-listening-test-03-with-answer-and-audioscripts/",
    "https://ieltstrainingonline.com/practice-cam-19-listening-test-04-with-answer-and-audioscripts/",
]

output_dir = "/Users/sarvpriyaadarsh/Downloads/daad-api/public/audio"
os.makedirs(output_dir, exist_ok=True)

headers = {'User-Agent': 'Mozilla/5.0'}

for url in urls:
    print(f"Fetching {url}")
    try:
        req = urllib.request.Request(url, headers=headers)
        html = urllib.request.urlopen(req).read().decode('utf-8')
        
        # Extract MP3 and M4A URLs
        mp3s = []
        for match in re.finditer(r'src="(https://[^"]+\.mp3|https://[^"]+\.MP3|https://[^"]+\.m4a|https://[^"]+\.M4A)(?:\?_=\d+)?"', html):
            mp3s.append(match.group(1))
            
        mp3s = list(set(mp3s))
        print(f"Found {len(mp3s)} audios")
        
        for mp3_url in mp3s:
            filename = mp3_url.split('/')[-1]
            filepath = os.path.join(output_dir, filename)
            if not os.path.exists(filepath):
                print(f"Downloading {filename}...")
                req = urllib.request.Request(mp3_url, headers=headers)
                data = urllib.request.urlopen(req).read()
                with open(filepath, 'wb') as f:
                    f.write(data)
            else:
                print(f"{filename} already exists")
    except Exception as e:
        print(f"Failed to process {url}: {e}")
