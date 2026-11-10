---
name: prettier-plugin
description: Format Slidev markdown files correctly
---

# Prettier Plugin

Format Slidev markdown files correctly.

## Installation

Prettier and its Slidev plugin are already declared in this repository. The installation/configuration snippets below are generic examples, not an instruction to reinstall them or overwrite the existing config. Our actual deck/fragment paths differ from the example's `pages` directory; use `.prettierrc`.

```bash
pnpm i -D prettier prettier-plugin-slidev
```

## Configuration

Create/modify `.prettierrc`:

```json
{
  "overrides": [
    {
      "files": ["slides.md", "pages/*.md"],
      "options": {
        "parser": "slidev",
        "plugins": ["prettier-plugin-slidev"]
      }
    }
  ]
}
```

## Why Needed

Slidev's syntax (frontmatter, code blocks) may conflict with default Markdown formatting. This plugin understands Slidev-specific syntax.

## Note

Must specify files via `overrides` since Slidev and regular Markdown share `.md` extension.
