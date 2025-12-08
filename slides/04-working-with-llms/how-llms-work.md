---
layout: center
---

# How LLMs Actually Work

<div class="text-xl opacity-80 max-w-2xl mx-auto text-center mt-6">
The mental model you need (without the PhD)
</div>

<div class="mt-10 max-w-3xl mx-auto">

```
Input: "The capital of France is"

LLM Process:
1. Tokenize → ["The", "capital", "of", "France", "is"]
2. Embed → [0.23, -0.41, ...] vectors
3. Transform → Attention across all tokens
4. Predict → Probability distribution over next token
5. Output → "Paris" (highest probability)
```

</div>

<div class="mt-8 p-4 bg-blue-500/10 rounded-lg max-w-2xl mx-auto">

**Key Insight:** LLMs are sophisticated pattern matchers trained on human text.
They predict what comes next based on statistical patterns.

</div>

<!--
You don't need to understand transformers to use LLMs well, but knowing this basic model helps you understand their behavior.
-->
