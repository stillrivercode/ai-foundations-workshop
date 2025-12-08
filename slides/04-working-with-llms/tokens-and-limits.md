---
layout: two-cols
---

# Tokens and Limits

<div class="mt-4">

### What's a Token?

Tokens are chunks of text - roughly 4 characters or 0.75 words in English.

```
"Hello, world!"
→ ["Hello", ",", " world", "!"]
→ 4 tokens
```

```
"function calculateTotal(items)"
→ ["function", " calculate", "Total", "(", "items", ")"]
→ 6 tokens
```

</div>

::right::

<div class="pl-8 mt-4">

### Quick Estimates

| Content | Tokens |
|---------|--------|
| 1 word | ~1.3 tokens |
| 1 page of text | ~500 tokens |
| 100 lines of code | ~300-500 tokens |
| Average function | ~50-100 tokens |

### Why This Matters

- **Cost:** You pay per token
- **Speed:** More tokens = slower
- **Quality:** Focused context = better output

</div>

<div class="absolute bottom-12 left-12 right-12">
<div class="text-sm p-3 bg-yellow-500/10 rounded-lg">
<carbon-idea class="inline text-yellow-400" /> Pro tip: Give the AI what it needs, not everything you have
</div>
</div>

<!--
Token awareness helps you write efficient prompts and understand costs. It's the "memory" the AI has to work with.
-->
