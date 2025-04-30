#!/bin/bash

#build the main overview/index slide
slidev build slides.md

# Function to build slides for each markdown file in the root folder, excluding README.md and slides.md
build_slides() {
  for file in *.md; do
    if [[ "$file" != "README.md" && "$file" != "slides.md" ]]; then
      local output_dir="${file%.md}"
      slidev build --out "$output_dir" --base "/dist/$output_dir" "$file"
    fi
  done
}

# Call the function to build slides
build_slides