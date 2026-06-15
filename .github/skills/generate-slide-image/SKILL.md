---
name: generate-slide-image
description: "Generate an AI image for a presentation slide. Use when: creating slide visuals, generating slide backgrounds, making images for slides, adding artwork to presentations. Triggers: generate image, slide image, create visual, slide artwork."
argument-hint: "Provide the slide content or reference the slide in context"
---

# Generate Slide Image

Generate an AI image for a slide using Gemini via the integrated browser, then save it to the repository.

## When to Use

- A slide needs a background or illustrative image
- The user asks to generate, create, or add an image/visual for a slide
- Artwork placeholders in `public/` need to be filled

## Procedure

### 1. Analyse the slide

- Read the slide title and content from the context provided by the user.
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

Use the integrated VS Code browser tools to interact with Gemini:

1. **Open the page**
   - Navigate to `https://gemini.google.com/app?hl=de`
   - Take a screenshot to verify the page loaded.
   - If a login wall appears, **ask the user to log in** and wait before continuing.

2. **Enter the prompt**
   - Locate the chat input field and type the crafted image-generation prompt.
   - Submit the prompt.

3. **Wait for image generation**
   - Take periodic screenshots to check whether an image has been generated.
   - Once an image appears, take a screenshot and evaluate quality.

4. **Quality check**
   - If the image contains illegible or incorrect text, regenerate with an updated prompt that explicitly forbids text.
   - If Gemini refuses to generate the image due to policy restrictions, simplify the prompt to remove potentially blocked terms and retry. If it still refuses, ask the user to provide an alternative description.
   - Allow a maximum of 2 retries total. If the image is still unsatisfactory after 2 retries, present the best result to the user and ask for guidance.

5. **Copy the image to clipboard**
   - Click the **copy image** button on the generated image (not the download button).
   - The image is now in the system clipboard.

### 4. Save the image from clipboard

- Save the clipboard image to `public/` using the command appropriate for the current OS.
- On Windows, use PowerShell:
  ```powershell
  Add-Type -AssemblyName System.Windows.Forms
  $img = [System.Windows.Forms.Clipboard]::GetImage()
  if ($img) {
     $img.Save("<absolute-path-to-public>/<filename>.png", [System.Drawing.Imaging.ImageFormat]::Png)
  }
  else {
     Write-Error 'No image found in clipboard. Retry the copy step.'
  }
  ```
- On macOS, use `pngpaste "<absolute-path-to-public>/<filename>.png"` if available. If that fails, use an `osascript`-based clipboard export.
- On Linux, use `xclip -selection clipboard -t image/png -o > "<absolute-path-to-public>/<filename>.png"`.
- If the save command reports that no image is present in the clipboard, repeat the copy step once. If it still fails, ask the user for guidance.
- Use a kebab-case filename derived from the slide title (e.g. `legacy-modernization.png`).
- Update the slide markdown to reference the new image with an absolute path: `/legacy-modernization.png`.

### 5. Verify

- Confirm the image file exists in `public/`.
- Confirm the slide markdown references it correctly.

## Parallel Generation (Multiple Images)

When multiple images are requested, open up to **3 browser tabs** at a time (`https://gemini.google.com/app?hl=de` in each tab). Authenticate in the first tab; once logged in the session cookie applies to all tabs. Submit prompts in parallel, one per tab, and process the results (quality check -> copy -> save) as each tab finishes. If more than 3 images are needed, process them in batches of 3.

### 6. Self-improve

If any step in this procedure fails or requires manual user intervention to fix, observe what the user does to work around the problem. Then update this SKILL.md file with the corrected instructions so the issue does not recur in future invocations.
