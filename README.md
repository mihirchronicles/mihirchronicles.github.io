# Personal Site

## Creating a New Post

Scaffold a new markdown file from the command line (run from the repo root):

```bash
# Book summary → content/bookshelf/the-genius-of-birds.md
npm run new -- book "The Genius Of Birds" "Jennifer Ackerman"

# Note → content/notes/on-trees.md (tags are optional, comma-separated)
npm run new -- note "On Trees" "on,humanity"
```

- The filename and `path` are generated from the title (e.g. "On Trees" → `on-trees`).
- `date` is set to today.
- Book files include the `I. Brief Summary`, `II. Big Ideas`, and `III. Quotes` sections.
- Notes also take an optional `tags` argument as a comma-separated list (no spaces needed), e.g. `"on,humanity"` → `tags: ["on", "humanity"]`. Omit it to get `tags: []`.
- Notes start as `draft: true` — change to `false` when ready to publish.

A new note looks like this:

```md
---
title: "On Trees"
date: "2026-11-08"
tags: ["on", "humanity"]
draft: true
path: "/notes/on-trees"
---
```
- Existing files are never overwritten.
