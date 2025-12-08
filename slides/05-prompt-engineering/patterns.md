---
layout: default
---

# Prompt → Slash Command

<div class="text-center opacity-80 mb-6">
Turn your best prompts into reusable commands
</div>

<div class="grid grid-cols-2 gap-6">

<div>

### Step 1: Your Effective Prompt

```markdown
Review this code for:
- Security vulnerabilities
- Performance issues
- Best practice violations

Be specific about line numbers.
Suggest fixes for each issue.
```

<div class="mt-2 text-xs opacity-75">
You've used this prompt 10+ times. Time to save it.
</div>

</div>

<div>

### Step 2: Save as Slash Command

```markdown
# .claude/commands/review.md
---
description: Security & performance review
---
Review this code for:
- Security vulnerabilities
- Performance issues
- Best practice violations

Be specific about line numbers.
Suggest fixes for each issue.

Review: $ARGUMENTS
```

<div class="mt-2 text-xs opacity-75">
Now anyone on your team can run <code>/review</code>
</div>

</div>

</div>

<div class="mt-4 p-3 bg-green-500/10 rounded-lg text-center text-sm">
Your prompt library becomes your team's AI toolkit
</div>

<!--
Every time you find yourself copying the same prompt, that's a sign it should be a slash command.
-->
