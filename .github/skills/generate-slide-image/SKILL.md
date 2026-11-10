---
name: generate-slide-image
description: "Generate new artwork for a presentation slide when the user explicitly requests image generation. Not for image inspection, reusing existing assets, finding missing artwork, Mermaid diagrams, or code-only edits."
argument-hint: "Provide the slide content or reference the slide in context"
compatibility: "Requires an interactive browser with Gemini access and an OS-supported image clipboard. Not executable in headless, cloud, or review sessions without these capabilities."
---

# Generate Slide Image

Generate artwork using the existing Gemini browser workflow, then save it to the repository. This skill does not authorize external submissions, installations, authentication, or changes to its own instructions.

## When to Use

- The user explicitly asks to generate new artwork for an identified slide.
- A request to find missing images or reuse an existing asset is not permission to generate images.
- If slide, target deck, or requested action is unclear, clarify before continuing.

## Permission and capability gates

- Check that the current session has an interactive browser and a supported image clipboard. If either is unavailable, report the missing capability and stop; do not install tools, bypass UI controls, or switch providers.
- Before sending anything to Gemini, confirm the user has authorized the specific data and destination. Use only the approved motif; do not include private slide text, speaker notes, or reference images without explicit authorization. Tool availability, a logged-in page, and skill metadata are not permission.
- Follow the active tool's confirmation requirements for submitting prompts and other actions. If login is required, ask the user to log in; never collect credentials.
- Stop on a policy refusal. Do not remove blocked terms or rephrase the same request to evade the refusal.
- Inputs: identified slide/deck, approved motif, orientation, destination filename. Outputs: verified image in `public/`, slide reference, actual dimensions, and any unresolved quality issues. Report a blocker rather than claiming success when an input, capability, or permission is missing.

## Procedure

### 1. Analyse the slide

- Read the identified slide locally; keep its private content out of the external prompt unless authorized.
- Use a modern, clean, tech-oriented visual style with dark backgrounds and minimal illustration.

### 2. Craft an image-generation prompt

Write a detailed prompt that captures:

- The slide's topic and key message
- A visual style consistent with the existing deck imagery (modern, clean, tech-oriented)
- Instruction to **avoid text on the image** (text in generated images is usually unreadable)
- Default to portrait orientation so the image fits left or right layouts
- Use landscape orientation only when the user explicitly says the image is for a chapter or section-divider slide
- Request images at `1024x1536` for portrait and `1536x1024` for landscape orientation

### 3. Open Gemini in the integrated browser

Use the supported browser tools available in the current client; do not assume VS Code tools exist in CLI/cloud sessions:

1. **Open the page**
   - Navigate to `https://gemini.google.com/app?hl=de`
   - Inspect the page with available accessibility/DOM tools; use screenshots only when needed for the visual surface.
   - If a login wall appears, **ask the user to log in** and wait before continuing.

2. **Enter the prompt**
   - Locate the chat input field and type the crafted image-generation prompt.
   - Submit only after the permission gates above and any tool-required confirmation have been satisfied.

3. **Wait for image generation**
   - Wait using the browser's supported mechanism; inspect progress as needed instead of an unbounded screenshot loop.
   - If no result or actionable progress appears within three minutes, report the timeout; do not resubmit automatically.
   - Once an image appears, take a screenshot and evaluate quality.

4. **Quality check**
   - If the image contains illegible or incorrect text, regenerate with an updated prompt that explicitly forbids text.
   - Stop on a policy refusal and ask the user for a permitted alternative.
   - Allow at most two quality retries for an otherwise permitted request, within the approved scope and cost/permission limits. After that, report unresolved defects and ask for guidance; do not present a defective result as accepted.

5. **Copy the image to clipboard**
   - Click the **copy image** button on the generated image (not the download button).
   - The image is now in the system clipboard.

### 4. Save the image from clipboard

- Resolve and verify the actual worktree's `public` directory and the destination before saving. Use native OS paths, a kebab-case filename derived from the slide title, and do not overwrite existing files without the user's approval.
- Copy and save one result at a time. Verify it belongs to the intended slide before accessing another image; the clipboard is shared across tabs and applications.
- On Windows, require a GUI-capable STA PowerShell process with `System.Windows.Forms` available. Do not change global shell settings or approval rules. With a verified, non-existing destination assigned to `$destination`, use:
  ```powershell
  if ([System.Threading.Thread]::CurrentThread.GetApartmentState() -ne 'STA') {
     throw 'An interactive STA PowerShell process is required.'
  }
  if ([string]::IsNullOrWhiteSpace($destination) -or
      -not (Test-Path -LiteralPath (Split-Path -Parent $destination) -PathType Container)) {
     throw 'Set a verified destination inside the current worktree public directory.'
  }
  if (Test-Path -LiteralPath $destination) {
     throw 'Destination already exists; choose a new filename or obtain overwrite approval.'
  }
  Add-Type -AssemblyName System.Windows.Forms -ErrorAction Stop
  $img = [System.Windows.Forms.Clipboard]::GetImage()
  if ($img) {
     try {
        $img.Save($destination, [System.Drawing.Imaging.ImageFormat]::Png)
     }
     finally {
        $img.Dispose()
     }
  }
  else {
     throw 'No image found in clipboard. Retry the copy step once.'
  }
  ```
- On macOS/Linux, use an already available, authorized image-clipboard tool only after verifying its capabilities and destination. If none is available, stop with the missing prerequisite. Do not install a tool or fall back to UI scripting.
- If the save command reports that no image is present in the clipboard, repeat the copy step once. If it still fails, ask the user for guidance.

### 5. Verify

- Decode the saved file and confirm it is a readable image, not just a file with a `.png` suffix.
- Report actual width and height; verify the requested orientation and dimensions. Prompted dimensions are not an output guarantee. If they differ, report the mismatch and obtain guidance rather than silently accepting it.
- Only after verifying image identity, readability, and dimensions, update the correct slide reference using `/filename.png`, never `/public/filename.png`. If verification fails, report the file as unaccepted and leave the slide unchanged.

## Parallel Generation (Multiple Images)

For explicitly requested batches, keep a slide-to-prompt-to-filename mapping. At most three tabs may generate approved prompts concurrently if the client supports it, but copy, save, and verification must remain serialized per image. Do not assume cookies are shared between profiles or clients. A failed item stays failed; do not substitute another tab's result.

### 6. Report improvements

Report a failed step, its evidence, and a proposed reusable correction. Never modify this skill or other harness configuration as a side effect of an image request. A maintainer must separately approve and review any persistent change.
