"""Keep "last updated" dates accurate, from git history, on every deploy.

- sitemap.xml: each <lastmod> becomes the date its page file last changed.
- Each page's JSON-LD: "dateModified" becomes the full ISO 8601 timestamp of that change
  (Google's Profile page and Article rules want date + time + timezone), and any date-only
  "datePublished" is expanded to a full timestamp.

Runs in the deploy workflow before the site is uploaded. Safe to run locally too.
"""
import re
import subprocess

SITE = "https://robertriopel.ca"


def page_file(url):
    path = url[len(SITE):].lstrip("/")
    if path == "" or path.endswith("/"):
        return path + "index.html"
    return path


def git_last(path, fmt):
    out = subprocess.run(["git", "log", "-1", f"--format={fmt}", "--", path],
                         capture_output=True, text=True).stdout.strip()
    return out or None


def stamp_sitemap():
    with open("sitemap.xml", encoding="utf-8") as f:
        xml = f.read()

    def stamp(block):
        loc = re.search(r"<loc>([^<]+)</loc>", block.group(0)).group(1)
        date = git_last(page_file(loc), "%cs")
        if not date:
            return block.group(0)
        return re.sub(r"<lastmod>[^<]*</lastmod>", f"<lastmod>{date}</lastmod>", block.group(0))

    updated = re.sub(r"<url>.*?</url>", stamp, xml, flags=re.S)
    with open("sitemap.xml", "w", encoding="utf-8") as f:
        f.write(updated)
    return re.findall(r"<loc>([^<]+)</loc>", updated)


def stamp_page(path):
    try:
        with open(path, encoding="utf-8") as f:
            html = f.read()
    except FileNotFoundError:
        return None
    modified = git_last(path, "%cI")  # e.g. 2026-10-06T14:05:12-04:00
    out = html
    if modified:
        out = re.sub(r'("dateModified":\s*")[^"]*(")', lambda m: m.group(1) + modified + m.group(2), out)
    # Expand date-only publish dates (YYYY-MM-DD) to a full timestamp
    out = re.sub(r'("datePublished":\s*")(\d{4}-\d{2}-\d{2})(")',
                 lambda m: f"{m.group(1)}{m.group(2)}T00:00:00+00:00{m.group(3)}", out)
    if out != html:
        with open(path, "w", encoding="utf-8") as f:
            f.write(out)
    return modified


def main():
    for loc in stamp_sitemap():
        path = page_file(loc)
        print(f"{stamp_page(path) or '-':26}  {loc}")


if __name__ == "__main__":
    main()
