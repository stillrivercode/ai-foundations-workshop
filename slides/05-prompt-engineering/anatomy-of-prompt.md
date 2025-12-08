---
layout: default
---

# Anatomy of an Effective Prompt

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### The Framework

```markdown
1. CONTEXT
   Who you are, what you're working on

2. TASK
   What you want the AI to do

3. CONSTRAINTS
   Rules, formats, limitations

4. EXAMPLES (optional)
   Show what you want

5. OUTPUT FORMAT
   How to structure the response
```

</div>

<div>

### Example

```markdown
CONTEXT:
I'm building a Node.js REST API for
a task management app.

TASK:
Create a validation middleware for
the POST /tasks endpoint.

CONSTRAINTS:
- Use express-validator
- Title required, 3-100 chars
- Due date optional, must be future
- Return 400 with specific errors

OUTPUT:
Provide the middleware code with
brief comments explaining each rule.
```

</div>

</div>

<!--
Structure beats cleverness. A clear, organized prompt almost always beats a "creative" one.
-->
