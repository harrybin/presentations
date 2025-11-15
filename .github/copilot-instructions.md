# Presentations AI Guide

## Repo shape

- Multi-deck Slidev workspace: `slides.md` is the index and every other `*.md` in the repo root is a standalone talk (e.g. `webappLocalization.md`). The build (`build.sh`) iterates root markdown files (excluding `slides.md`/`README.md`) and emits to `dist/<file-name>` with `--base "/<file-name>/"`, so keep each deck’s `routeAlias` identical to its filename for correct routing from the overview slide.
- Shared content lives under `special-slides/` (generic speaker/Q&A/thank-you plus deck-specific folders) and `copilot-slides/` (agenda + chapter fragments). Include them with `src: /special-slides/...` or `src: /copilot-slides/...` blocks to avoid duplication.
- Theme, transitions, and addons are standardized (see opening frontmatter of any deck). Copy that block when creating new material.

## Running & building

- Install once with `npm install`, then preview any deck via `npx slidev <deck>.md` (VS Code exposes ready-made tasks for the popular decks). Use `npx slidev slides.md` to test the index site locally.
- `npm run build` (invokes `build.sh`) requires a bash-compatible shell; it wipes `dist/`, builds the index, then batch-builds every deck so that the static site mirrors production at https://presentations.harrybin.dev.
- Formatting relies on `prettier` plus `prettier-plugin-slidev` (`npm run format`).

## Authoring slides

- Split slides with `---` and keep a blank line after each separator. When frontmatter is needed, use the `--- <yaml> ---` form before the content block.
- Speaker notes are HTML comments; only the last comment in a slide is exported, so keep a single trailing `<!-- ... -->` per slide.
- Bullets should sit inside `<v-clicks> ... </v-clicks>` to align with the talk pacing expectations stated in the existing decks.
- Use `<Toc minDepth="1" maxDepth="1" />` for agenda slides and reuse the standard agenda fragment (`/copilot-slides/agenda.md`) when possible.
- Always store deck-specific assets in `public/` and reference them with absolute paths like `/pilot-large.jpg`; add placeholder files there if artwork is pending.
- when a slide is to be extracted to its own file, simply move the selected slide content to a new markdown file and replace the original selected slide content by referencing the newly created slide file using the `src:` attribute.
  - there are at lot of examples in the slides deck: `githubCopilotDelphi.md`.
  - when extracting take care that `---` always starts a new slide or or closes frontmatter. So don't make the original slide invalid.

## Components & styling

- Global wrappers: `global-top.vue` shows the progress bar (via `slidev-component-progress`); `global-bottom.vue` renders the glow effect controlled by frontmatter keys `glowEnabled`, `glow`, `glowOpacity`, `glowHue`, and `glowSeed`. Disable animations per deck with `glowEnabled: false` or tune the distribution values (e.g., `glow: top-right`).
- Custom Vue components in `components/`: `Aside.vue` provides consistent callouts (`<Aside type="warning" title="Heads up">...</Aside>`), while `PartialWebContent.vue` can live-fetch static HTML snippets (`url`, optional `regex`, and `scale/width/height` props).
- Follow the theme’s layout presets (see https://sli.dev/builtin/layouts). The default frontmatter already locks the Xebia theme, fade transition, and addon list—deviate only with a clear reason.

## Content conventions

- Deck skeleton: cover → `special-slides/speaker.md` → teaser → `/copilot-slides/agenda.md` → chapter files (`copilot-slides/chapter/...`) or bespoke slides → `/special-slides/questions.md` → `/special-slides/thank-you.md`. The `.github/prompts/newPresentation.prompt.md` describes this flow and is the baseline for new AI-generated talks.
- Shared demo context lives in `demo-projects/` (e.g., `demo-projects/devcontainer` for the Container Ships app, `demo-projects/weblate` for the Weblate stack). These folders are referenced from slides but are not part of the Slidev build; do not restructure them without updating the decks.
- When embedding code or commands, keep them concise for on-slide readability (short blocks, no long paragraphs). Prefer highlighting workflows such as `dotnet run` for the ContainerShips API or `docker compose up -d` for the Weblate demo when those areas are discussed.

## References

- Slidev syntax & frontmatter: https://sli.dev/guide/syntax and https://sli.dev/custom/#frontmatter (type definitions live in `packages/types/src/config.ts` upstream).
- Supported layouts list for the xebia theme: https://github.com/xebia/presentation-templates/tree/main/slidev-theme-xebia/layouts
  - hoe touse these layouts: https://github.com/xebia/presentation-templates/blob/main/slidev-theme-xebia/example.md
- Use `/public` for imagery, `/special-slides` & `/copilot-slides` for shared markdown, and `components/` for Vue enhancements.
