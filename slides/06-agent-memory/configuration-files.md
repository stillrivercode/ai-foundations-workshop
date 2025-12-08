---
layout: default
---

# Configuration Files by Tool

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 bg-orange-500/10 rounded-lg">
<div class="font-bold text-orange-400 mb-2">Claude Code</div>

**File:** `CLAUDE.md`

```markdown
# Project Context

## Tech Stack
- Node.js 20, TypeScript 5
- Express with Zod validation

## Conventions
- Use kebab-case for files
- Prefer composition over inheritance

## Commands
npm run dev   # Start server
npm test      # Run tests
```
</div>

<div class="p-4 bg-blue-500/10 rounded-lg">
<div class="font-bold text-blue-400 mb-2">Gemini CLI</div>

**File:** `GEMINI.md`

```markdown
# Gemini Instructions

## Project
E-commerce API with PostgreSQL

## Style Guide
- Functional approach
- Explicit error handling
- JSDoc for public APIs

## Testing
- Vitest for unit tests
- Supertest for API tests
```
</div>

<div class="p-4 bg-green-500/10 rounded-lg">
<div class="font-bold text-green-400 mb-2">OpenAI Codex</div>

**File:** `AGENTS.md`

```markdown
# Agent Configuration

## Context
React Native mobile app
with Expo and TypeScript

## Architecture
- Feature-based folders
- React Query for data
- Zustand for state

## Important
Always check iOS/Android compat
```
</div>

</div>

<div class="mt-4 text-center text-sm opacity-60">
These files live in your project root and are automatically read by each tool
</div>

<!--
Each tool has its own configuration file. Keep them updated as your project evolves. Think of them as living documentation.
-->
