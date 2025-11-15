---
agent: agent
tools:
  [
    "edit",
    "runNotebooks",
    "search",
    "new",
    "runCommands",
    "runTasks",
    "Azure MCP/search",
    "microsoft/playwright-mcp/*",
    "usages",
    "vscodeAPI",
    "problems",
    "changes",
    "testFailure",
    "openSimpleBrowser",
    "fetch",
    "githubRepo",
    "extensions",
    "todos",
    "runSubagent",
    "runTests",
  ]
---

The goal is to generate an image for the slide in the context.

## Instructions:

- Create an AI image generation prompt for the slide based on the following information:
  - Slide Title: Use the title of the slide
  - Slide Content: Use the content of the slide
  - Slide Style: Use a style similar to the images in the repository (e.g., /public/devcontainer_move.jpeg or /public/devcontainer.jpeg)
- The prompt should be detailed enough to generate a relevant and high-quality image.
- for executing the the prompt use an AI image generation tool from a website:
  - use #playwright-mcp to interact with the website
  - go to the website: https://gemini.google.com/app?hl=de
  - wait for the user to login if needed
  - input the generated prompt into the image generation tool
  - wait for the image to be generated
  - if there is text on the image make sure it is readable and correct
    - if not regenerate the image with an updated prompt
    - if still not correct try regenerating with adjusted prompt not to use text on the image
  - download the generated image
  - Save the image in the `public/` directory of the repository with a filename that reflects the slide title (e.g., slide-title.jpg).
