---
agent: agent
---

Create a new slidev presentation regarding the topic information followed after the instructions.

## Instructions:

- **Create a todo list as markdown checklist file for the main steps you take and for each main section of the presentation and process that one and update the todo list until done. This will make the contents you need to deal with smaller and easier to handle.**
- The presentation should be structured similer to the slide decks (`*.md`) already present in the root of this repository excluding the `slides.md`.
- analog to those slide decks use slidev markdown syntax.
  - use the same theme, transitions and addons as well asthe other fromtmatter options
  - use a proper routeAlias based on the presentation topic
- ensure the deck contains the following elements:
  - cover slide
  - speaker introduction slide (`special-slides/speaker.md`)
  - a teaser slide triggering the audience's curiosity about the main topic
  - agenda slide (`/copilot-slides/agenda.md`)
  - content slides covering the main topic in detail
  - summary or closing slide
  - Q&A slide
  - thank you slide (`/special-slides/thank-you.md`)
  - end with a slide containing references of the conferences where the presentation was held
- Structure the content slides into logical sections or chapters, each introduced by a chapter slide if necessary
- add slides for **demos** where appropriate to illustrate key points or visualize concepts or tools
  - add instructions for the demo in the speaker notes
  - have at least 3 demo slides in the presentation
- Ensure each slide has a concise title that reflects its content.
- Use bullet points, images, and diagrams where appropriate to enhance understanding.
- use differnt layout for the slides
  - preferably use the same layouts as in the other slide decks in the repository
  - vary the slide layouts
  - for section slides use dark layouts with images
  - preferably use image-heavy layouts for slides
  - at least 50% of the slides should use image-heavy layouts
  - no image layout on slides with tables, code snippets or mermaid diagrams
- create mermaid diagrams where appropriate to illustrate complex concepts, workflows,structures, data, relationships, or processes etc.
- for timelines use vue-timeline component from `@xebia/slidev-addon-components-common`
- Include **speaker notes** for each slide to guide the presentation delivery.
  - add a prompt to the speaker notes for creating an AI-generated image relevant to the slide content (generated images should be in the same stayle like e.g. `/public/devcontainer_move.jpeg` or `/public/devcontainer.jpeg`)
- Create slides to fill a 60 minutes talk with demos. (thats around 30-40 slides)
- the agenda / toc should only contain slides starting new topics
  - hide slides by settings their level > 1 or setting `hideInToc: true` in the frontmatter
  - do not have more than 10 main topics in the agenda / toc
- if two subsequent slides have very little content, merge them into one slide
- if a slide has alarge source, move ti into a subfolder named after the presentation topic and reference it from there
- if you don't have enough content to create that many slides, do deep research on the topic to find more content
  - put your reasearched content into separate markdown files in a subfolder for easier re-use
  - if you then still don't have enough content, ask the user for more specific subtopics to cover
- finally after creating the presentation:
  - validate the presentation for correct slidev syntax
  - ensure all referenced assets (images, diagrams) are available in the `public/` directory and referenced as from "root" folder
  - create a vscode task configuration to preview the presentation locally with slidev analog to the existing tasks in the repository
    - run that task configuration to verify it works correctly
    - it there are any issues fix them
  - delete the todo list markdown checklist file used for tracking the presentation creation process
  - delete the research content markdown files created during the process
