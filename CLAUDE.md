# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

This is a Slidev presentation for "Foundations in AI Engineering" - a 1hr 45min workshop by Stillriver teaching AI-powered development fundamentals.

## Core Commands

```bash
npm run dev         # Start Slidev development server on localhost:3030
npm run build       # Build static slides for production
npm run export      # Export slides to PDF (requires playwright)
npm run preview     # Preview built slides
```

## Architecture

### Slidev Structure
- **slides.md**: Main entry point that imports all slide sections
- **slides/**: Individual slide sections organized by topic
  - `01-introduction/`: Welcome, agenda, why AI now
  - `02-what-is-ai-engineering/`: Definition, roles, skills
  - `03-ai-tools-landscape/`: Tool comparison
  - `04-working-with-llms/`: Technical foundations
  - `05-prompt-engineering/`: Core techniques
  - `06-agent-memory/`: Configuration files
  - `07-practical-applications/`: Use cases, integration
  - `08-getting-started/`: Next steps, resources

### Slide Format
Each slide is a markdown file with YAML frontmatter for layout configuration. Common layouts:
- `layout: center` - Centered content
- `layout: two-cols` - Two column layout
- `layout: default` - Standard slide
- `layout: intro` - Introduction style

## Editing Guidelines

- Keep speaker notes in HTML comments `<!-- -->`
- Use Slidev's built-in icons: `<carbon-*>` components
- Color coding: blue=informational, green=positive, red=warning, yellow=tips
- Maintain consistent timing (~3-4 min per slide)

## Presentation Duration

Total: 105 minutes (1hr 45min)
- Introduction: 10 min (3 slides)
- What is AI Engineering: 15 min (4 slides)
- AI Tools Landscape: 15 min (5 slides)
- Working with LLMs: 15 min (4 slides)
- Prompt Engineering: 20 min (6 slides)
- Agent Memory: 15 min (3 slides)
- Practical Applications: 10 min (3 slides)
- Getting Started: 5 min (2 slides + Q&A)
