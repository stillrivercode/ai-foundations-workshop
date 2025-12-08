---
layout: default
---

# Vague vs Descriptive Prompts

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

### Vague Prompt

<div class="p-4 bg-red-500/10 rounded-lg">

```
Fix this code
```

```
Make it better
```

```
Write tests
```

```
Add error handling
```

</div>

<div class="mt-4 text-sm opacity-75">
AI has to guess what you want
</div>

</div>

<div>

### Descriptive Prompt

<div class="p-4 bg-green-500/10 rounded-lg">

```
Fix the null pointer exception on
line 42 when user.email is undefined
```

```
Refactor to use early returns
and reduce nesting to 2 levels
```

```
Write Jest tests covering the
happy path and edge cases for
empty input and invalid dates
```

```
Add try/catch that logs errors
and returns a 500 response
with error ID for debugging
```

</div>

<div class="mt-4 text-sm opacity-75">
AI knows exactly what to do
</div>

</div>

</div>

<div class="mt-6 p-3 bg-blue-500/10 rounded-lg text-center">
Specific prompts → Specific results → Reusable slash commands
</div>

<!--
The quality of your slash commands depends on the quality of your prompts. Vague prompts make unreliable commands.
-->
