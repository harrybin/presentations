---
agent: agent
---

- For the current slide deck in context determine where images are missing (background images, content images, chapter images etc.).
- create a markdown todo list file with all the missing images and in which slide they are missing
- for each of that missing images do:
  - call the prompt [generateImageForSlide](generateImageForSlide.prompt.md) with the slide content
  - when done check the todo list entry
- when all done delete the todo list.
