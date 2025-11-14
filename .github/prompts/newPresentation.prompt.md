---
agent: agent
---

Create a new slidev presentation regarding the topic information followed after the instructions.

## Instructions:

- The presentation should be structured similer to the slide decks (`*.md`) already present in the root of this repository excluding the `slides.md`.
- analog to those slide decks use slidev markdown syntax. (see also #context7 slidev documentation)
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
- add slide for demos where appropriate to illustrate key points
  - add instructions for the demo in the speaker notes
- Ensure each slide has a concise title that reflects its content.
- Use bullet points, images, and diagrams where appropriate to enhance understanding.
- Include speaker notes for each slide to guide the presentation delivery.
  - add a prompt to the speaker notes for creating an AI-generated image relevant to the slide content (generated images should be in the same stayle like e.g. `/public/devcontainer_move.jpeg` or `/public/devcontainer.jpeg`)
- The presentation should be engaging and visually appealing, using a consistent theme and color scheme.
- Create slides to fill a 60 minutes talk with demos. (thats around 30-40 slides)
