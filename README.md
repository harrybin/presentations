# Presentations

This repository contains public presentations created by me, [@harrybin](https://github.com/harrybin).
The presentations are built using [Slidev](https://sli.dev/) and are available at: [https://presentations.harrybin.dev](https://presentations.harrybin.dev).

## Structure

- **Entry Point**:
  - `slides.md` file in the root directory contained an overview of all presentations.
  - all other presentations are located right beside the `slides.md` file in the root directory. Such as:
    - `devcontainer.md` for the devcontainer presentation.
    - `webappLocalization.md` for the web application localization presentation.
- **Linked Content**:
  - shared slides can be found in the `special-slides` folder
  - special/extracted slides from presentations can be found in the `special-slides/<presentation-name>` folder.
- **Assets**: All images and assets of **all** slides are located in the `public` folder. This is the default location for Slidev to look for assets.

- **Demo Projects**: The `demo-projects` folder contains demo projects that are used in the presentations. These projects are not part of the Slidev framework but are included for demonstration purposes. (each demo project has its own folder name like the presentation name)

## Setup and validation

Use **Node.js 24 and npm** for the presentation workspace and demo frontend. The CI and all supplied Node devcontainer configurations target this major version. Keep the existing lockfiles; do not switch package managers or upgrade packages just to run a task.

From the repository root, restore locked dependencies using the same peer-resolution option as CI. Xebia packages may require pre-existing authorized GitHub Package Registry access. Report authentication failures; never search for or print credentials.

```powershell
npm ci --legacy-peer-deps
npm start
```

The start script previews the index. For a particular existing deck, use the installed CLI, not an implicit package download:

```powershell
npm exec --no -- slidev .\githubCopilotDelphi.md
```

New decks use the 2026-theme headmatter in `aiops-Mainteance-mit-KI.md`; existing decks retain their theme. Assets live in `public` and use URLs such as `/pilot-large.jpg`, not `/public/pilot-large.jpg`. Shared slide fragments belong in `special-slides` or `copilot-slides`. Temporary notes and task tracking belong in session artifacts, never root markdown: the production build collects root markdown except the index and README.

The complete build requires a Bash-compatible environment, `sudo`, Python available as `python`, and installed dependencies. It **deletes and recreates `dist`**, builds the index and root entries, then applies the custom GitHub Pages routing fallback. Check that `dist` contains only disposable generated output first. Run this only in that environment, not directly in Windows PowerShell:

```bash
npm run build
```

For a targeted check, build only the affected deck using an explicitly chosen disposable output directory outside source content. Check the output and the published base path; do not forward generic Slidev base flags to the shell build script.

The `format` script invokes `slidev format`, which organizes Slidev markdown rather than formatting its contents. Content formatting uses Prettier with the Slidev parser for the deck/fragment paths in `.prettierrc`. Check only affected files; do not mass-format unrelated decks. There are no root `test` or `lint` scripts.

CLI image/PDF/PPTX export needs the optional `playwright-chromium` dependency, which is not currently locked here. Report that prerequisite rather than installing it without an authorized dependency change.

## Agent-harness maintenance

Contributors update affected instructions, prompts, and skills when runtime/package-manager versions, Slidev/themes, architecture, build commands, or content paths change. The repository maintainer reviews persistent behavior changes, permissions/data destinations, and imported skill updates. A client, harness, or model change, or a recurring evidenced agent failure, is also a reason for a targeted review, not a new permanent rule for every incident.

Keep repository-wide guidance in `.github/copilot-instructions.md`, reusable Slidev/image procedures in the existing skills, and task-specific authoring in the existing prompts. Prompts are manually invoked in supported VS Code Local sessions; discovery and support differ in other clients. A Markdown link or model choice does not guarantee inclusion or execution. Global/personal instructions, installed tools, and cloud permissions are outside this repository's configuration.

Review local link targets, skill names/required frontmatter, actual npm script names, runtime pins, and formatter scope with existing tools. Validate behavior in fresh, matched sessions using the [manual evaluation protocol](.github/evals/generate-slide-image/README.md), recording failures and unavailable measurements as such. Tool availability or skill metadata is not authorization. Do not self-edit the harness during unrelated tasks, add automated follow-up jobs, or claim a build/eval ran without evidence.
