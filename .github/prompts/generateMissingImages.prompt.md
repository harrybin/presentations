---
agent: agent
description: Identify missing slide artwork and generate only explicitly authorized images.
argument-hint: "Identify the deck and whether to inventory or generate artwork"
---

- Identify the target deck; ask if it is unclear. List missing background, content, and chapter images with their slide and intended filename.
- Reuse suitable existing assets first. Finding a missing image is not permission to generate one.
- Track work with session todos, not a markdown file in the repository root.
- For each explicitly requested new image, read and use the existing [generate-slide-image skill](../skills/generate-slide-image/SKILL.md). Follow its data/destination approval, capability, refusal, retry, and verification gates. Do not create a replacement prompt or silently switch providers.
- Keep a slide-to-filename mapping, serialize clipboard copy/save, and verify each result before marking its item done.
- Save verified assets in `public` and reference them as `/filename.png`, never `/public/filename.png`. Report blocked or failed items explicitly.
- Do not delete pre-existing files or modify harness instructions while completing this task.

This prompt is manually invoked in supported VS Code Local sessions. Other clients must not assume `.prompt.md` files are executable slash commands; read the referenced skill explicitly when appropriate.
