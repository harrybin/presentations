---
name: newpresentation
description: Create a deck using this repository's existing Slidev conventions.
disable-model-invocation: true
argument-hint: "Topic, audience, duration, and optional demo or visual requirements"
---
Create a new slidev presentation regarding the topic information followed after the instructions.

## Instructions:

- Track main steps and sections with session todos. Store temporary research and drafts only in an explicitly identified session-artifact directory, not in the repository root: the build treats root markdown as decks.
- Identify the topic, audience, target deck filename, and any user-specified scope. Ask about missing essential inputs. User-provided duration, demo count, and visual requirements override the editorial defaults below.
- for new slide decks use the theme `@xebia/slidev-theme-xebia-2026`
- The presentation should be structured similer to the slide decks (`*.md`) already present in the root of this repository excluding the `slides.md`.
- analog to those slide decks use slidev markdown syntax.
  - use `aiops-Mainteance-mit-KI.md` as the existing 2026-theme headmatter example; copy only applicable theme, transition, and addon settings, not its title, speaker, assets, or published path
  - for standalone decks, set `publicDeckPath` to the published subpath and do not add `routeAlias`
- ensure the deck contains the following elements:
  - cover slide
  - speaker introduction slide (`special-slides/speaker.md`)
  - a teaser slide triggering the audience's curiosity about the main topic
  - agenda slide (`/copilot-slides/agenda.md`)
  - content slides covering the main topic in detail
  - summary or closing slide
  - Q&A slide
  - thank you slide (`/special-slides/thank-you.md`)
  - include conference references only when supplied or verified; do not invent dates or appearances
- Structure the content slides into logical sections or chapters, each introduced by a chapter slide if necessary
- add slides for **demos** where appropriate to illustrate key points or visualize concepts or tools
  - add instructions for the demo in the speaker notes
  - default to at least 3 demo slides for a 60-minute talk, unless the user requests a different scope
- Ensure each slide has a concise title that reflects its content.
- Use bullet points, images, and diagrams where appropriate to enhance understanding.
- use differnt layout for the slides
  - preferably use the same layouts as in the other slide decks in the repository
  - vary the slide layouts
  - for section slides use dark layouts with images
  - preferably use image-heavy layouts for slides
  - by default aim for at least 50% image-heavy layouts where appropriate; this is an editorial preference, not a Slidev requirement or permission to generate images
  - no image layout on slides with tables, code snippets or mermaid diagrams
- create mermaid diagrams where appropriate to illustrate complex concepts, workflows,structures, data, relationships, or processes etc.
- for timelines use vue-timeline component from `@xebia/slidev-addon-components-common`
- Include **speaker notes** for each slide to guide the presentation delivery.
  - where new artwork is useful, describe a proposed motif locally in the notes, matching assets such as `/devcontainer_move.jpeg` or `/devcontainer.jpeg`; do not transmit private notes or generate images without authorization
- Default to a 60-minute talk with demos (around 30-40 slides) only when no different duration or scope is supplied.
- the agenda / toc should only contain slides starting new topics
  - hide slides by settings their level > 1 or setting `hideInToc: true` in the frontmatter
  - do not have more than 10 main topics in the agenda / toc
- if two subsequent slides have very little content, merge them into one slide
- Put reusable extracted slide content in `special-slides/<deck-name>` and include it using `src`; preserve valid Slidev separators and the single trailing speaker-notes comment.
- If content is insufficient, report the gap. Research only within the user's scope and data/network permissions, not merely to fill a slide quota.
  - keep temporary research in the session-artifact directory; retain deliberate reusable presentation fragments in their repository content folder
  - ask for narrower subtopics when the gap remains
- finally after creating the presentation:
  - validate the presentation for correct slidev syntax
  - ensure all referenced assets (images, diagrams) are available in the `public/` directory and referenced as from "root" folder
  - create a vscode task configuration to preview the presentation locally with slidev analog to the existing tasks in the repository
    - run that task configuration to verify it works correctly
    - it there are any issues fix them
  - report which syntax, paths, preview, and visual checks actually ran; a blocked preview is not a successful validation
  - clean up only your own exactly identified temporary session artifacts when permitted; do not delete pre-existing research or reusable fragments

This prompt is manually invoked in supported VS Code Local sessions. Outside that surface, do not assume a `.prompt.md` slash command is available; read the workflow and the existing Slidev skill explicitly when appropriate.
