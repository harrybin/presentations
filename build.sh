#!/bin/bash

sudo rm -rf ./dist

sudo mkdir -p ./dist
sudo chmod -R 777 ./dist

#build the main overview/index slide
npx slidev build slides.md

patch_spa_github_pages_assets() {
  python <<'PY'
from pathlib import Path
import json
import shutil

project_root = Path(".")
dist_dir = project_root / "dist"
deck_roots = sorted(
    file.stem
    for file in project_root.glob("*.md")
    if file.name not in {"README.md", "slides.md"}
)

redirect_script = """    <!-- Start Single Page Apps for GitHub Pages -->
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      // MIT License
      // https://github.com/rafgraph/spa-github-pages
      (function(l) {
        if (l.search[1] === '/') {
          var decoded = l.search.slice(1).split('&').map(function(s) {
            return s.replace(/~and~/g, '&')
          }).join('?');
          window.history.replaceState(null, null,
            l.pathname.slice(0, -1) + decoded + l.hash
          );
        }
      }(window.location))
    </script>
    <!-- End Single Page Apps for GitHub Pages -->"""

for index_file in dist_dir.rglob("index.html"):
    content = index_file.read_text()
    if "Single Page Apps for GitHub Pages" in content:
        continue
    if "</head>" not in content:
        raise SystemExit(f"Unable to inject SPA redirect script into {index_file}")
    index_file.write_text(content.replace("</head>", f"{redirect_script}\n  </head>", 1))

root_404_file = dist_dir / "404.html"
source_404_file = project_root / "public" / "404.html"
if not root_404_file.exists() and source_404_file.exists():
    shutil.copyfile(source_404_file, root_404_file)

if root_404_file.exists():
    content = root_404_file.read_text()
    if "__SPA_DECK_ROOTS__" in content:
        root_404_file.write_text(content.replace("__SPA_DECK_ROOTS__", json.dumps(deck_roots)))

    for deck_root in deck_roots:
        deck_404_file = dist_dir / deck_root / "404.html"
        if not deck_404_file.exists():
            shutil.copyfile(root_404_file, deck_404_file)
PY
}

# Function to build slides for each markdown file in the root folder, excluding README.md and slides.md
build_slides() {
  for file in *.md; do
    if [[ "$file" != "README.md" && "$file" != "slides.md" ]]; then
      local output_dir="${file%.md}"
      npx slidev build --out "./dist/$output_dir" --base "/$output_dir/" "$file"
    fi
  done
}

# Call the function to build slides
build_slides
patch_spa_github_pages_assets