# Presentations AI Guide

## Repo shape

- Multi-deck Slidev workspace: `slides.md` is the index. The build (`build.sh`) treats every other root `*.md` except `README.md` as a deck and emits to `dist/<file-name>` with `--base "/<file-name>/"`. Do not put scratch or tracking markdown in the root. For standalone decks, store the published subpath in `publicDeckPath` and avoid `routeAlias`, because matching alias/base values duplicate the deck segment during navigation.
- Shared content lives under `special-slides/` (generic speaker/Q&A/thank-you plus deck-specific folders) and `copilot-slides/` (agenda + chapter fragments). Include them with `src: /special-slides/...` or `src: /copilot-slides/...` blocks to avoid duplication.
- New decks use the 2026 Xebia theme; use `aiops-Mainteance-mit-KI.md` for applicable headmatter settings, not its title, speaker, images, or path. Existing decks also use an older Xebia theme: preserve their theme when editing.

## Running & building

- Use npm and the locked dependencies. See [README setup and validation](../README.md#setup-and-validation) for the runtime, prerequisites, and commands. There is no root `dev`, `test`, or `lint` script. Use the local CLI with an explicit entry; do not implicitly download another Slidev package.
- The `build` script requires Bash, sudo, Python available as `python`, and authorized package-registry access. It deletes/recreates `dist`, builds the index and all root entries, then patches GitHub Pages routing. Confirm cleanup affects only generated output; do not substitute generic deployment examples.
- The `format` script runs `slidev format`, which organizes Slidev markdown, not its content. Prettier plus `prettier-plugin-slidev` handles content formatting through `.prettierrc`; check only affected files and do not mass-format unrelated decks.

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
- Follow the target theme's layout presets; [Slidev built-ins](https://sli.dev/builtin/layouts) are not an exhaustive list of Xebia layouts. Preserve the target deck's transition and addons.

## Content conventions

- Deck skeleton: cover → `special-slides/speaker.md` → teaser → `/copilot-slides/agenda.md` → chapter files (`copilot-slides/chapter/...`) or bespoke slides → `/special-slides/questions.md` → `/special-slides/thank-you.md`. The `.github/prompts/newPresentation.prompt.md` describes this flow and is the baseline for new AI-generated talks.
- Shared demo context lives in `demo-projects/` (e.g., `demo-projects/devcontainer` for the Container Ships app, `demo-projects/weblate` for the Weblate stack). These folders are referenced from slides but are not part of the Slidev build; do not restructure them without updating the decks.
- When embedding code or commands, keep them concise for on-slide readability (short blocks, no long paragraphs). Prefer highlighting workflows such as `dotnet run` for the ContainerShips API or `docker compose up -d` for the Weblate demo when those areas are discussed.

## References

- Slidev syntax & frontmatter: https://sli.dev/guide/syntax and https://sli.dev/custom/#frontmatter (type definitions live in `packages/types/src/config.ts` upstream).
- The previously referenced Xebia repository layout/example URLs returned HTTP 404 on 2026-11-10. Use existing same-theme decks and the authorized installed theme's layouts; do not invent replacement links or assume registry access.
- Use `/public` for imagery, `/special-slides` & `/copilot-slides` for shared markdown, and `components/` for Vue enhancements.
