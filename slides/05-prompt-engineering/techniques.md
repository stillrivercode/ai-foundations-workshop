---
layout: default
---

# Key Prompting Techniques

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 bg-blue-500/10 rounded-lg">
<div class="font-bold text-blue-400 mb-2">1. Be Specific</div>

```diff
- "Make this code better"

+ "Refactor this function to:
+  - Use early returns
+  - Add input validation
+  - Reduce nesting to max 2 levels"
```
</div>

<div class="p-4 bg-green-500/10 rounded-lg">
<div class="font-bold text-green-400 mb-2">2. Provide Context</div>

```diff
- "Fix this bug"

+ "This Express middleware should
+  validate JWT tokens. It's returning
+  401 even for valid tokens. Here's
+  the current code and a valid token
+  example..."
```
</div>

<div class="p-4 bg-purple-500/10 rounded-lg">
<div class="font-bold text-purple-400 mb-2">3. Show Examples</div>

```markdown
Convert these to kebab-case:
- "UserProfile" → "user-profile"
- "APIHandler" → "api-handler"

Now convert: "DatabaseConnection"
```
</div>

<div class="p-4 bg-yellow-500/10 rounded-lg">
<div class="font-bold text-yellow-400 mb-2">4. Chain of Thought</div>

```markdown
Think through this step by step:
1. First, identify the data flow
2. Then, find where state changes
3. Finally, suggest the fix

Problem: [describe issue]
```
</div>

</div>

<!--
These four techniques will solve 90% of prompting challenges. Master them before trying advanced techniques.
-->
