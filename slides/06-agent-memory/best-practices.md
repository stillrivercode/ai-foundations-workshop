---
layout: two-cols
---

# Agent Memory Best Practices

<div class="mt-4">

### Do Include

<div class="space-y-2 text-sm">
<div><carbon-checkmark class="text-green-400" /> Tech stack and versions</div>
<div><carbon-checkmark class="text-green-400" /> Project structure overview</div>
<div><carbon-checkmark class="text-green-400" /> Coding conventions</div>
<div><carbon-checkmark class="text-green-400" /> Common commands</div>
<div><carbon-checkmark class="text-green-400" /> Architecture patterns used</div>
<div><carbon-checkmark class="text-green-400" /> Testing approach</div>
<div><carbon-checkmark class="text-green-400" /> Key dependencies</div>
</div>

</div>

::right::

<div class="pl-8 mt-4">

### Don't Include

<div class="space-y-2 text-sm">
<div><carbon-close class="text-red-400" /> Secrets or credentials</div>
<div><carbon-close class="text-red-400" /> Obvious language features</div>
<div><carbon-close class="text-red-400" /> Entire file contents</div>
<div><carbon-close class="text-red-400" /> Outdated information</div>
<div><carbon-close class="text-red-400" /> Personal preferences as rules</div>
</div>

### Keep It Updated

```bash
# Add to your workflow:
# Review CLAUDE.md monthly
# Update after major changes
# Remove deprecated patterns
```

</div>

<div class="absolute bottom-12 left-12 right-12">
<div class="text-sm p-3 bg-blue-500/10 rounded-lg">
<carbon-idea class="inline text-blue-400" /> Start small. A 20-line config file is better than none. Expand as you learn what helps.
</div>
</div>

<!--
Quality over quantity. A focused, accurate config file beats a comprehensive but outdated one.
-->
