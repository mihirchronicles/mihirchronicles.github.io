#!/usr/bin/env node
// Scaffold a new markdown file in content/bookshelf or content/notes.
//
// Usage:
//   npm run new -- book "The Creative Act" "Rick Rubin"
//   npm run new -- note "On Trees" [tag1,tag2]

const fs = require("fs")
const path = require("path")

const [type, title, extra] = process.argv.slice(2)

const usage = `Usage:
  npm run new -- book "<Book Name>" "<Author>"
  npm run new -- note "<Title>" [tag1,tag2]`

if (!["book", "note"].includes(type) || !title) {
  console.error(usage)
  process.exit(1)
}

const slug = title
  .toLowerCase()
  .replace(/['’]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "")

const now = new Date()
const date = [
  now.getFullYear(),
  String(now.getMonth() + 1).padStart(2, "0"),
  String(now.getDate()).padStart(2, "0"),
].join("-")

let folder, body

if (type === "book") {
  if (!extra) {
    console.error(usage)
    process.exit(1)
  }
  folder = "bookshelf"
  body = `---
title: ${title} by ${extra}
date: "${date}"
path: "/${folder}/${slug}"
---

## I. Brief Summary

## II. Big Ideas

## III. Quotes
`
} else {
  folder = "notes"
  const tags = (extra || "")
    .split(",")
    .map(t => t.trim())
    .filter(Boolean)
    .map(t => `"${t}"`)
    .join(", ")
  body = `---
title: "${title}"
date: "${date}"
tags: [${tags}]
draft: true
path: "/${folder}/${slug}"
---

`
}

const file = path.join(__dirname, "..", "content", folder, `${slug}.md`)

if (fs.existsSync(file)) {
  console.error(`File already exists: content/${folder}/${slug}.md`)
  process.exit(1)
}

fs.writeFileSync(file, body)
console.log(`Created content/${folder}/${slug}.md`)
