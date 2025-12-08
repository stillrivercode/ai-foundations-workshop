---
layout: default
---

# Context Windows Explained

<div class="mt-6">

### What is a Context Window?

The **context window** is the total amount of text an LLM can "see" at once -
including your prompt AND its response.

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### Visualized

```
┌─────────────────────────────┐
│     Context Window          │
│  ┌───────────────────────┐  │
│  │ System Prompt         │  │
│  ├───────────────────────┤  │
│  │ Conversation History  │  │
│  ├───────────────────────┤  │
│  │ Your Current Message  │  │
│  ├───────────────────────┤  │
│  │ AI Response (growing) │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
```

</div>

<div>

### Why It Matters

- **Too little context:** AI lacks information
- **Too much context:** Important details get lost
- **Right context:** Precise, relevant responses

### Current Limits (2025)

| Model | Context |
|-------|---------|
| GPT-4o | 128K |
| Claude 3.5 | 200K |
| Gemini 2.0 | 1M+ |

</div>

</div>

<!--
Context management is crucial. More isn't always better - relevance matters more than volume.
-->
