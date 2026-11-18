---
name: generate-slide-image
description: "Generate new artwork for a presentation slide when the user explicitly requests image generation. Not for image inspection, reusing existing assets, finding missing artwork, Mermaid diagrams, or code-only edits."
argument-hint: "Identify the slide and describe the public visual motif"
compatibility: "Requires a runtime-provided direct image_generation tool; if unavailable, stop and report the blocker."
---

# Generate Slide Image

Generate slide artwork with the runtime's direct `image_generation` tool and save the verified result to the repository. This skill does not authorize unrelated external submissions, installations, authentication, or changes to its own instructions.

## When to Use

- The user explicitly asks to generate new artwork for an identified slide.
- A request to find missing images or reuse an existing asset is not permission to generate images.
- If the slide, target deck, or requested action is unclear, clarify before continuing.

## Safety and capability gates

- Use the direct image-generation tool provided by the current runtime. If it is unavailable, report the blocker and stop; do not install tools, use a browser or clipboard workflow, or switch providers.
- Never send confidential slide content, speaker notes, code, secrets, or screenshot data to an external service. Keep slide analysis local and send only a sanitized visual prompt that does not disclose those materials.
- Supply `input_images` only when the user explicitly asks to edit an image or use it as a reference. Include only the relevant, non-sensitive inputs, identified by image ID or file path. Follow any tool-required confirmation.
- Stop on a policy refusal; do not rephrase to evade it.
- Do not retry automatically after a tool error, cancellation, timeout, or unsatisfactory result. Report what happened without claiming success.
- Do not overwrite an existing destination without the user's approval. Tool availability and skill metadata do not authorize any unrelated action.

## Procedure

### 1. Identify the slide and destination

- Read the identified slide locally to understand its topic and layout; keep its private content out of the external prompt.
- Use the current worktree's `public/` directory and a kebab-case `.png` filename derived from the slide title. Verify the destination before generating and recheck it before saving; if it exists, use a new filename or obtain overwrite approval.
- If the slide or destination cannot be identified safely, clarify before proceeding.

### 2. Prepare a sanitized prompt

- Describe only the visual motif, style, and composition needed for the slide. Do not copy slide text, speaker notes, source code, secrets, or screenshot details into the prompt.
- Avoid text in the image unless the user specifically requests it.
- Include orientation, dimensions, or other output constraints only when the user explicitly requests them. Pass `size` and `quality` to the tool only when the user explicitly asks for those settings.

### 3. Generate once

- Call the runtime-provided `image_generation` tool once with the prompt. Include `input_images` only for an explicitly requested edit or reference, and include `size` or `quality` only when explicitly requested.
- Do not use Gemini, another provider, a browser, login, or clipboard as a fallback. Do not automatically resubmit a failed, timed-out, canceled, or poor result.
- For an explicitly requested batch, keep a separate slide-to-prompt-to-filename mapping and make one generation call per image. A failed item stays failed.

### 4. Save and verify

- Save the actual returned image to the verified destination using an available, authorized file operation. If the result cannot be accessed or saved there, report that blocker; do not imply the file exists.
- Confirm the destination file exists and decode it as an image. Inspect that it depicts the intended motif and assess visible quality; report any defects or limitations plainly.
- Report the actual saved path and measured dimensions. Compare orientation or dimensions only when the user requested those constraints. Do not infer output dimensions from the prompt.
- Update the correct slide reference only after verifying the saved image against the requested motif, quality, and any requested dimensions or orientation. Use deck-relative URLs (for example, `filename.png`) for slide backgrounds and `coverImage` so they resolve under the published deck path; never use `/public/filename.png`. If verification fails or cannot be completed, leave the slide unchanged.

## Report

Report the generated file's actual destination, what was verified, and any quality issue or blocker. Never claim an image was generated, saved, or verified without evidence. Never modify this skill or other harness configuration as a side effect of an image request; persistent instruction changes require a separate request.
