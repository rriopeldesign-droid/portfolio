"""Set each sitemap <lastmod> to the date its page file last changed in git.

Runs in the deploy workflow before the site is uploaded, so search engines always see accurate
"last updated" dates without anyone editing sitemap.xml by hand. Safe to run locally too.
"""
import re
import subprocess

SITE = "https://robertriopel.ca"


def page_file(url):
    path = url[len(SITE):].lstrip("/")
    if path == "" or path.endswith("/"):
        return path + "index.html"
    return path


def last_changed(path):
    out = subprocess.run(["git", "log", "-1", "--format=%cs", "--", path],
                         capture_output=True, text=True).stdout.strip()
    return out or None


def main():
    with open("sitemap.xml", encoding="utf-8") as f:
        xml = f.read()

    def stamp(block):
        loc = re.search(r"<loc>([^<]+)</loc>", block.group(0)).group(1)
        date = last_changed(page_file(loc))
        if not date:
            return block.group(0)
        return re.sub(r"<lastmod>[^<]*</lastmod>", f"<lastmod>{date}</lastmod>", block.group(0))

    updated = re.sub(r"<url>.*?</url>", stamp, xml, flags=re.S)
    with open("sitemap.xml", "w", encoding="utf-8") as f:
        f.write(updated)
    for loc, mod in re.findall(r"<loc>([^<]+)</loc>\s*<lastmod>([^<]+)</lastmod>", updated):
        print(f"{mod}  {loc}")


if __name__ == "__main__":
    main()
