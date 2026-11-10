# Slidev Skill

An imported skill for working with [Slidev](https://sli.dev) presentations, adapted to this repository's npm multi-deck workspace.

## Provenance and local use

The upstream source is `slidevjs/slidev`, recorded in `skills-lock.json`. The recorded source hash is not a substitute for reviewing bundled instructions or a verified integrity guarantee. This copy is already stored in `.github/skills/slidev`; do not reinstall it merely to use it.

Local adaptations replace the generic pnpm/scaffolding quickstart with the actual npm scripts, preserve the custom multi-deck build/routing, and clarify optional export dependencies and theme selection. Keep the existing references as generic, on-demand feature documentation, not deployment instructions for this repository.

When updating from upstream, review its diff and preserve/reconcile these adaptations explicitly. Do not manually invent a replacement lock hash, automatically overwrite local guidance, or install dependencies without a task that authorizes it.

## What's Included

The Slidev skill provides Claude Code with knowledge about:

- **Core Syntax** - Markdown syntax, slide separators, frontmatter
- **Animations** - Click animations, transitions, motion effects
- **Code Features** - Line highlighting, Monaco editor, code groups, magic-move
- **Diagrams** - Mermaid, PlantUML, LaTeX math
- **Layouts** - Built-in layouts, slots, global layers
- **Presenter Mode** - Recording, timer, remote access
- **Exporting** - PDF, PPTX, PNG, SPA hosting

## Usage

On a client that supports discovery of `.github/skills`, the agent can load the skill when relevant to:

- Creating new presentations
- Adding slides with code examples
- Setting up animations and transitions
- Configuring themes and layouts
- Exporting presentations

Discovery does not prove execution or compliance. Copilot clients support repository skills, but exact client/version support and tools must be checked in the session. The upstream Claude Code description is not proof that this repository location is discovered by every other client. Do not load the skill for unrelated Markdown or demo-only application edits.

### Example Prompts

```
Create a Slidev presentation about TypeScript generics with code examples
```

```
Add a two-column slide with code on the left and explanation on the right
```

```
Set up click animations to reveal bullet points one by one
```

```
Configure the presentation for PDF export with speaker notes
```

## Documentation

- [Slidev Documentation](https://sli.dev)
- [Theme Gallery](https://sli.dev/resources/theme-gallery)
- [Showcases](https://sli.dev/resources/showcases)

## License

MIT
