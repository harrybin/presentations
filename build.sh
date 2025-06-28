#!/bin/bash

sudo rm -rf ./dist

sudo mkdir -p ./dist
sudo chmod -R 777 ./dist

#build the main overview/index slide
npx slidev build slides.md

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