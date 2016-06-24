import urllib
f = urllib.urlopen("https://in.linkedin.com/pub/dir/roy/anderson")
s = f.read()
f.close()

from bs4 import BeautifulSoup
from BeautifulSoup import BeautifulStoneSoup
soup = BeautifulStoneSoup(s)

inputTag = soup.findAll(attrs={"name" : "stainfo"})

output = inputTag['value']

print str(output)