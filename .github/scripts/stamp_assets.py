"""Version every local stylesheet and script a page loads, on every deploy.

GitHub Pages tells browsers to keep files for 10 minutes. With a bare URL, a browser can pair a
fresh page with an older cached stylesheet or script, and the page breaks until the cache runs
out. This rewrites href="/css/x.css" and src="/js/x.js" in the assembled site to
"/css/x.css?v=<hash of that file>", so a page always loads the files it was published with.
A file that did not change keeps its URL, so its cache still holds.

It runs on the assembled _site folder only. The committed pages stay as they are, so a CSS change
does not mark every page as updated in the sitemap or announce them all to search engines.
URLs that already carry a query (the homepage's forest files, stamped by build-home) are left alone.
"""
import hashlib
import pathlib
import re
import sys

root = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "_site")
ASSET = re.compile(r'((?:href|src)=")(/(?:css|js)/[^"?#]+\.(?:css|js))(")')
versions = {}


def version(url):
    if url not in versions:
        f = root / url.lstrip("/")
        versions[url] = hashlib.sha256(f.read_bytes()).hexdigest()[:10] if f.is_file() else None
    return versions[url]


def stamp(m):
    v = version(m.group(2))
    return f"{m.group(1)}{m.group(2)}?v={v}{m.group(3)}" if v else m.group(0)


pages = changed = 0
for page in sorted(root.rglob("*.html")):
    html = page.read_text(encoding="utf-8")
    out = ASSET.sub(stamp, html)
    pages += 1
    if out != html:
        page.write_text(out, encoding="utf-8")
        changed += 1

missing = sorted(u for u, v in versions.items() if v is None)
print(f"stamp_assets: versioned {sum(1 for v in versions.values() if v)} files across {changed} of {pages} pages")
for u in missing:
    print(f"stamp_assets: left unversioned (no such file): {u}")
