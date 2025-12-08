---
layout: default
---

# The `/init` Command

<div class="text-center text-lg opacity-80 mb-6">
Every tool has <code>/init</code> to bootstrap your agent memory file
</div>

<div class="grid grid-cols-3 gap-4">

<div class="p-4 bg-orange-500/10 rounded-lg">

### Claude Code
```bash
claude
/init
```

<div class="text-sm mt-3">
Creates <code>CLAUDE.md</code> with:
</div>
<ul class="text-xs mt-2 opacity-75">
<li>Project structure</li>
<li>Tech stack</li>
<li>Build commands</li>
<li>Coding conventions</li>
</ul>

<div class="text-xs mt-3 p-2 bg-black/20 rounded">
Docs: <a href="https://docs.anthropic.com/en/docs/claude-code" class="text-orange-400">docs.anthropic.com</a>
</div>

</div>

<div class="p-4 bg-blue-500/10 rounded-lg">

### Gemini CLI
```bash
gemini
/init
```

<div class="text-sm mt-3">
Creates <code>GEMINI.md</code> with:
</div>
<ul class="text-xs mt-2 opacity-75">
<li>Project overview</li>
<li>Key files</li>
<li>Dependencies</li>
<li>Style guide</li>
</ul>

<div class="text-xs mt-3 p-2 bg-black/20 rounded">
Docs: <a href="https://github.com/google-gemini/gemini-cli" class="text-blue-400">github.com/google-gemini</a>
</div>

</div>

<div class="p-4 bg-green-500/10 rounded-lg">

### OpenAI Codex
```bash
codex
/init
```

<div class="text-sm mt-3">
Creates <code>AGENTS.md</code> with:
</div>
<ul class="text-xs mt-2 opacity-75">
<li>Instructions</li>
<li>Role definition</li>
<li>Guidelines</li>
<li>Testing setup</li>
</ul>

<div class="text-xs mt-3 p-2 bg-black/20 rounded">
Docs: <a href="https://openai.com/index/introducing-codex/" class="text-green-400">openai.com/codex</a>
</div>

</div>

</div>

<!--
The /init command analyzes your codebase and generates a starter memory file. You'll customize it from there.
-->
