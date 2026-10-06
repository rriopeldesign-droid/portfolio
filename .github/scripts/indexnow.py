"""Tell IndexNow (Bing and other participating engines) which pages changed in this deploy.

Runs after a successful GitHub Pages deploy. On a normal push it submits only the pages
whose files changed; on a manual run (or when the diff can't be computed) it submits
every URL in sitemap.xml. It never fails the workflow.
"""
import json
import os
import re
import subprocess
import sys
import urllib.request

HOST = "robertriopel.ca"
SITE = f"https://{HOST}"
KEY = "aafc234bb917635676eb47fba848d6e6"
ENDPOINT = "https://api.indexnow.org/indexnow"

# Files that are deployed but shouldn't be announced (redirect stubs, noindex pages).
SKIP = {"town-hall/index.html", "fun2.html"}


def sitemap_urls():
    with open("sitemap.xml", encoding="utf-8") as f:
        return re.findall(r"<loc>([^<]+)</loc>", f.read())


def changed_files(before, after):
    out = subprocess.run(["git", "diff", "--name-only", "--diff-filter=AM", before, after],
                         capture_output=True, text=True, check=True).stdout
    return [line for line in out.splitlines() if line]


def to_url(path):
    if path in SKIP or path.startswith((".github/", "src/", "node_modules/")):
        return None
    if path == "llms.txt":
        return f"{SITE}/llms.txt"
    if not path.endswith(".html"):
        return None
    if path == "index.html":
        return f"{SITE}/"
    if path.endswith("/index.html"):
        return f"{SITE}/{path[:-len('index.html')]}"
    return f"{SITE}/{path}"


def main():
    event = os.environ.get("EVENT", "")
    before = os.environ.get("BEFORE", "")
    after = os.environ.get("AFTER", "HEAD")

    urls = None
    if event == "push" and before and set(before) != {"0"}:
        try:
            urls = sorted({u for u in map(to_url, changed_files(before, after)) if u})
        except subprocess.CalledProcessError as err:
            print(f"Could not diff {before}..{after} ({err}); submitting the full sitemap.")
    if urls is None:
        urls = sitemap_urls()

    if not urls:
        print("No page changes in this deploy; nothing to submit.")
        return

    body = json.dumps({
        "host": HOST,
        "key": KEY,
        "keyLocation": f"{SITE}/{KEY}.txt",
        "urlList": urls,
    }).encode()
    req = urllib.request.Request(ENDPOINT, data=body, method="POST",
                                 headers={"Content-Type": "application/json; charset=utf-8"})
    print(f"Submitting {len(urls)} URL(s):\n  " + "\n  ".join(urls))
    try:
        with urllib.request.urlopen(req, timeout=30) as res:
            print(f"IndexNow responded {res.status}")
    except urllib.error.HTTPError as err:
        print(f"IndexNow responded {err.code}: {err.read().decode(errors='replace')[:300]}")
    except Exception as err:  # network hiccups shouldn't matter to the deploy
        print(f"IndexNow request failed: {err}")


if __name__ == "__main__":
    main()
    sys.exit(0)
