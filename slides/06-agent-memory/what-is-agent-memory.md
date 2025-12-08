---
layout: center
---

# Agent Memory & Context

<div class="text-xl opacity-80 max-w-2xl mx-auto text-center mt-6">
Teaching AI about your project before you start working
</div>

<div class="mt-10 max-w-3xl mx-auto">

```
Without Agent Memory:
┌─────────────────────────────────────┐
│ You: "Add a new endpoint"           │
│ AI: "What framework? What pattern?  │
│      What's your file structure?"   │
└─────────────────────────────────────┘

With Agent Memory:
┌─────────────────────────────────────┐
│ You: "Add a new endpoint"           │
│ AI: "I'll add it to src/routes/     │
│      using your Express + TypeScript│
│      pattern with Zod validation."  │
└─────────────────────────────────────┘
```

</div>

<div class="mt-8 text-center">
<carbon-idea class="text-4xl text-yellow-400" />
<div class="text-sm opacity-75 mt-2">Agent memory = persistent context across sessions</div>
</div>

<!--
Agent memory eliminates repetitive context-setting. It's like giving the AI a project onboarding document.
-->
