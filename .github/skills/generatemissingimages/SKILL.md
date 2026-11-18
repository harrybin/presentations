---
name: generatemissingimages
description: Identify missing slide artwork and generate only explicitly authorized images.
disable-model-invocation: true
argument-hint: "Identify the deck and whether to inventory or generate artwork"
---
- Identify the target deck; ask if it is unclear. List missing background, content, and chapter images with their slide and intended filename.
- Reuse suitable existing assets first. Finding a missing image is not permission to generate one.
- Track work with session todos, not a markdown file in the repository root.
- For each explicitly requested new image, read and use the [generate-slide-image skill](../generate-slide-image/SKILL.md). Follow its data-safety, destination, direct-tool availability, refusal, no-retry, and verification gates. Do not create a replacement workflow or silently switch providers.
- Keep a slide-to-filename mapping, save each direct-tool result to its verified destination, and verify it before marking its item done.
- Save verified assets in `public/` and follow the linked skill's asset URL guidance. Report blocked or failed items explicitly.
- Do not delete pre-existing files or modify harness instructions while completing this task.

Invoke this skill manually in clients that support it. Image generation requires the current runtime's direct tool.
