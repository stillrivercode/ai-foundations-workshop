---
layout: default
---

# Custom Slash Commands

<div class="text-center text-lg opacity-80 mb-6">
Create reusable prompts for your team's workflows
</div>

<div class="grid grid-cols-3 gap-4">

<div class="p-4 bg-orange-500/10 rounded-lg">

### Claude Code
<div class="text-xs opacity-75 mb-2">~/.claude/commands/ or .claude/commands/</div>

```markdown
# deploy.md
---
description: Deploy to production
---
Run the deployment script and
verify the health checks pass.
Check @package.json for scripts.
```

<div class="text-xs mt-2">
Usage: <code>/deploy</code>
</div>

</div>

<div class="p-4 bg-blue-500/10 rounded-lg">

### Gemini CLI
<div class="text-xs opacity-75 mb-2">~/.gemini/commands/ or .gemini/commands/</div>

```toml
# review.toml
description = "Code review"
prompt = """
Review the changes in {{args}}
for security issues and
best practices.
"""
```

<div class="text-xs mt-2">
Usage: <code>/review src/api</code>
</div>

</div>

<div class="p-4 bg-green-500/10 rounded-lg">

### OpenAI Codex
<div class="text-xs opacity-75 mb-2">~/.codex/prompts/</div>

```markdown
# test.md
---
description: Generate tests
argument-hint: [file]
---
Write comprehensive tests
for $1 using our testing
conventions.
```

<div class="text-xs mt-2">
Usage: <code>/prompts:test api.ts</code>
</div>

</div>

</div>

<div class="mt-4 p-3 bg-purple-500/10 rounded text-center text-sm">
Custom commands + agent memory = <strong>AI that works exactly how your team works</strong>
</div>

<!--
Custom slash commands let you encode your team's workflows. Combined with memory files, you get consistent, team-specific AI assistance.
-->
