---
layout: default
---

# Prompt Engineering in Action

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### Poor Prompt

```markdown
Write tests for this function
```

**Result:** Generic tests, wrong framework, missing edge cases

</div>

<div>

### Effective Prompt

```markdown
Write unit tests for the calculateDiscount
function below using Jest.

Requirements:
- Test normal cases (10%, 20%, 50% discounts)
- Test edge cases (0%, 100%, negative)
- Test invalid inputs (null, undefined, NaN)
- Use describe/it blocks
- Include setup/teardown if needed

Function:
[paste function here]

Expected behavior:
- Returns discounted price as number
- Throws for invalid discount percentages
- Handles currency rounding to 2 decimals
```

**Result:** Comprehensive, correctly-structured tests

</div>

</div>

<!--
The difference is dramatic. The effective prompt takes 30 seconds longer to write but saves 10 minutes of back-and-forth.
-->
