#!/usr/bin/env python3
"""Usage: python3 set-domain.py https://yourdomain.com  - replaces the placeholder in every file."""
import sys,glob
d=sys.argv[1].rstrip('/')
for f in glob.glob('*.html')+['sitemap.xml','robots.txt']:
    s=open(f).read();open(f,'w').write(s.replace('https://YOUR-DOMAIN',d))
print('Domain set to',d)
