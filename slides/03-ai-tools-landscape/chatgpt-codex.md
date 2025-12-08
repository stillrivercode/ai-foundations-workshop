---
layout: two-cols
---

# GEMINI.md

<div class="mt-4">

### What is it?
The equivalent memory file for **Google's Gemini CLI**.

### Key Differences from CLAUDE.md
- Similar markdown format
- Gemini-specific instructions
- Can leverage Google integrations

### Where does it live?
- `./GEMINI.md` - Project root
- Gemini CLI reads it automatically

</div>

::right::

<div class="pl-8 mt-4">

### Example GEMINI.md

```markdown
# Project Context

## Overview
React Native mobile app with
Firebase backend

## Key Files
- src/App.tsx - Entry point
- src/api/ - Firebase functions
- src/screens/ - UI screens

## Testing
Run `npm test` before commits

## Style Guide
Follow Airbnb React conventions
```

### The Pattern
Each AI tool has its own memory file, but the **concept is the same**: persistent context.

</div>

<!--
You don't need to choose one tool. Many teams have both CLAUDE.md and GEMINI.md in their repos.
-->
