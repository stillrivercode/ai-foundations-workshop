# Research: The 3 Types of AI Development

> Analysis of Pony Engine's framework for AI-assisted development modes

**Source Article:** [The 3 Types of AI Development: Vibe Coding, Stride Development, and Side Coding](https://www.ponyengine.com/blog/the-3-types-of-ai-development-vibe-coding-stride-development-and-side-coding)  
**Author:** Savalas Colbert, CEO of Pony Engine  
**Published:** December 19, 2025  
**Reviewed:** December 19, 2025

---

## Executive Summary

Pony Engine has introduced a three-tier taxonomy for AI-assisted development that addresses a significant vocabulary gap in the industry. The framework distinguishes between **Vibe Coding** (intuition-driven), **Stride Development** (structured momentum), and **Side Coding** (engineering-first with AI acceleration). This taxonomy provides a useful mental model for understanding how different builders interact with AI tools and when each approach is appropriate.

---

## The Framework

### Overview

| Mode | Driver | Human Role | Best For |
|------|--------|------------|----------|
| **Vibe Coding** | AI | Prompter | Ideation, prototypes, proof-of-concept |
| **Stride Development** | Shared | Steerer | Product builds, founders, operators |
| **Side Coding** | Human | Architect | Scalable systems, production code |

### Vibe Coding — Building by Feel

**Definition:** Building software by prompting AI, reviewing output, and iterating conversationally without deep engagement with underlying code.

**Origin:** Term popularized by Andrej Karpathy (February 2025), who described it as "going with the vibes" and "forgetting that the code even exists."

**Core Principle:** Speed, intuition, and experimentation take priority over structure.

**Strengths:**
- Extremely fast iteration
- Low barrier to entry
- Ideal for ideation and proof-of-concept work

**Limitations:**
- Minimal structure or documentation
- Fragile codebases
- Difficult to scale or maintain

### Stride Development — Structured Momentum

**Definition:** Pony Engine's response to the limitations of vibe coding. Emphasizes momentum with intentional structure from the beginning.

**Core Principle:** "Move fast—but move on rails."

**Key Methodology:**
1. Create a spec document or blueprint before execution
2. Define what is being built, why it exists, and how components connect
3. Touch the script, make simple logic changes
4. Shape and structure databases
5. Use opinionated tools (e.g., Spectacles) that guide toward best practices

**Target Users:** Founders, operators, and product-minded creators who want meaningful control without becoming full-time engineers.

### Side Coding — Engineering with AI as an Accelerator

**Definition:** Traditional engineering enhanced by AI. The human defines architecture, establishes structure, and makes final technical decisions.

**Core Principle:** "The human is the opinionated one."

**Characteristics:**
- Can build with or without AI
- AI is accelerator, not driver
- Often corrects AI-generated code
- Refines system architecture
- Rejects AI suggestions when appropriate

---

## Industry Context & Validation

### Current State of Vibe Coding (Late 2025)

The industry is experiencing what has been termed the "vibe coding hangover":

- **Security vulnerabilities:** In May 2025, Lovable (a Swedish vibe coding app) had 170 out of 1,645 applications with security issues allowing unauthorized access to personal information.
- **Reliability issues:** SaaStr founder documented negative experiences including an AI agent deleting a database despite explicit instructions.
- **Complexity limitations:** LLMs struggle with novel, complex coding problems involving multiple files, poorly documented libraries, or critical code with real-world impacts.

### Enterprise Adoption Reality

- 25% of Y Combinator Winter 2025 startups have codebases that are 95% AI-generated
- Only 34% of enterprise organizations have formal policies and tools in place for AI-assisted coding
- Collins Dictionary named "vibe coding" Word of the Year for 2025

### Expert Perspectives

**Simon Willison (Developer, Author):**
> "My golden rule for production-quality AI-assisted programming is that I won't commit any code to my repository if I couldn't explain exactly what it does to somebody else."

**Andrew Ng:**
> Takes issue with the term "vibe coding," saying it misleads people into assuming software engineers just "go with the vibes" when using AI tools.

**IBM:**
> "AI simply generates code, but true creativity, goal alignment and out-of-the-box thinking remain uniquely human so human input and oversight is important and cannot be overridden."

---

## Strengths of the Framework

### 1. Fills a Real Vocabulary Gap

The industry lacked precise language for the middle ground between pure AI delegation and traditional engineering. "Stride Development" provides a name for the mode where most production work actually happens.

### 2. Spec-First Emphasis is Correct

Starting with a blueprint before execution is exactly what separates sustainable AI-assisted development from the chaos causing "development hell."

### 3. Non-Hierarchical Framing

The "none is inherently better" positioning shows maturity. Each mode has legitimate use cases:
- Vibe Coding explores
- Stride Development builds with intent
- Side Coding scales with precision

### 4. Claims Align with Industry Evidence

| Claim | Industry Evidence |
|-------|-------------------|
| Vibe coding is "powerful but only up to a point" | ✅ Confirmed — LLMs struggle with complex multi-file projects |
| Non-engineers can prototype in minutes | ✅ Confirmed — 25% of YC W25 startups are 95% AI-generated |
| Structure/spec-first approach scales | ✅ Confirmed — "Structured creativity" is the sustainable model |
| Human remains "opinionated one" at higher levels | ✅ Confirmed — Human oversight cannot be overridden |

---

## Areas for Expansion

### 1. Side Coding Definition

Currently underdeveloped compared to the other modes. Senior engineers using AI aren't just "correcting" output—they're using AI for:
- Boilerplate generation while focusing on architecture
- Rubber-duck debugging (explaining problems to clarify thinking)
- Exploration of unfamiliar APIs/frameworks
- Code review assistance

### 2. Transition Mechanics

The article states the future belongs to those who know "how to transition between modes" but doesn't explain how. Key questions:
- When does a Vibe-coded prototype need rewriting for Stride?
- What signals indicate you've hit Vibe Coding's ceiling?
- Can you Stride-develop on top of a Vibe-coded foundation?

### 3. Skill Requirements at Each Level

The learning curve at each level is implicit but worth making explicit:

| Mode | Required Skills |
|------|-----------------|
| Vibe Coding | Effective prompting, context structuring, knowing when to reset |
| Stride Development | Technical literacy, data modeling, product thinking, spec writing |
| Side Coding | Full engineering fundamentals + AI tool proficiency |

### 4. Security and Maintainability

Given industry evidence of widespread security vulnerabilities in AI-generated code, this could be expanded beyond "fragile codebases" in limitations.

---

## Workshop Integration Opportunities

This taxonomy maps cleanly onto the AI Foundations Workshop curriculum:

| Mode | Workshop Topic Alignment |
|------|-------------------------|
| **Vibe Coding** | Prompt engineering basics, conversational iteration |
| **Stride Development** | Agent memory configuration, spec-driven development |
| **Side Coding** | Tool evaluation, understanding when AI helps vs. hinders |

### Suggested Usage

1. **Opening Mental Model:** Use the three-mode framework to orient participants
2. **Self-Assessment:** Have participants identify which mode they currently operate in
3. **Skill Mapping:** Show how curriculum helps them operate effectively at each level
4. **Progression Path:** Illustrate how to move between modes as projects mature

---

## Recommended Follow-Up Content

1. **"The Transition Playbook"** — When and how to move between modes
2. **"Stride Development in Practice"** — Case study of spec-to-product using the methodology
3. **"The Skill Stack for Each Mode"** — What you need to learn at each level
4. **"Spectacles Deep Dive"** — How Pony Engine's tooling enables Stride Development

---

## Sources

### Primary
- Pony Engine. "The 3 Types of AI Development: Vibe Coding, Stride Development, and Side Coding." December 19, 2025.

### Industry Context
- Wikipedia. "Vibe coding." Retrieved December 19, 2025.
- Willison, Simon. "Not all AI-assisted programming is vibe coding." March 19, 2025.
- IBM. "What is Vibe Coding?" December 2025.
- Google Cloud. "Vibe Coding Explained: Tools and Guides." 2025.
- InfoWorld. "What is vibe coding? AI writes the code so developers can think big." November 4, 2025.
- Cycode. "Vibe Coding: Leveraging AI-Assisted Programming." May 14, 2025.
- freeCodeCamp. "How to Use Vibe Coding Effectively as a Dev." December 2025.

---

*Research compiled for Stillriver Software Solutions LLC — AI Foundations Workshop*
