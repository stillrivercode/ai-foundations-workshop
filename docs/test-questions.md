# Foundations in AI Engineering - Knowledge Assessment

## Instructions
This assessment tests your understanding of the key concepts covered in the "Foundations in AI Engineering" workshop. **Time limit: 15 minutes**. Choose the best answer for each question.

---

## Question 1: What is AI Engineering? (10 points)

AI Engineering is best defined as:

**A)** Using ChatGPT to write all your code
**B)** The practice of building, integrating, and optimizing AI-powered systems to solve real-world problems
**C)** Training large language models from scratch
**D)** Replacing all software engineers with AI tools

<details>
<summary>Answer Key</summary>

**Answer: B**

AI Engineering is the practice of building, integrating, and optimizing AI-powered systems to solve real-world problems. The three core components are:
- **Build** - Create AI-powered features
- **Integrate** - Embed AI into workflows
- **Optimize** - Improve AI effectiveness
</details>

---

## Question 2: Prompt Engineering Techniques (10 points)

Which of the following is NOT one of the four key prompting techniques covered in the workshop?

**A)** Be Specific
**B)** Provide Context
**C)** Use All Caps
**D)** Show Examples

<details>
<summary>Answer Key</summary>

**Answer: C**

The four key prompting techniques are:
1. **Be Specific** - Provide clear, detailed instructions
2. **Provide Context** - Give background information
3. **Show Examples** - Demonstrate the pattern you want
4. **Chain of Thought** - Ask AI to break down problems step by step

Using all caps is not a recommended technique.
</details>

---

## Question 3: Context Windows (10 points)

A context window is:

**A)** The size of your computer screen
**B)** The total amount of text an LLM can "see" at once, including your prompt and its response
**C)** The number of conversations you can have with an AI
**D)** A Chrome browser extension

<details>
<summary>Answer Key</summary>

**Answer: B**

The context window is the total amount of text an LLM can "see" at once - including your prompt AND its response. It matters because:
- Too little context: AI lacks information
- Too much context: Important details get lost
- Right context: Precise, relevant responses

Current limits (2025): GPT-4o (128K), Claude 3.5 (200K), Gemini 2.0 (1M+)
</details>

---

## Question 4: Tokens (10 points)

Approximately how many tokens is 1 word in English?

**A)** 0.5 tokens
**B)** 1.3 tokens
**C)** 5 tokens
**D)** 10 tokens

<details>
<summary>Answer Key</summary>

**Answer: B**

Tokens are chunks of text - roughly 4 characters or 0.75 words in English.
- 1 word ≈ 1.3 tokens
- 1 page of text ≈ 500 tokens
- 100 lines of code ≈ 300-500 tokens

Token awareness matters for:
- **Cost** - You pay per token
- **Speed** - More tokens = slower
- **Quality** - Focused context = better output
</details>

---

## Question 5: Agent Memory Configuration (15 points)

Which configuration file is used by Claude Code to understand project context?

**A)** README.md
**B)** CLAUDE.md
**C)** CONFIG.json
**D)** .env

<details>
<summary>Answer Key</summary>

**Answer: B**

Configuration files by tool:
- Claude Code: `CLAUDE.md`
- Gemini CLI: `GEMINI.md`
- OpenAI Codex: `AGENTS.md`

These files should include:
- Project context / tech stack
- Architecture and conventions
- Common commands
- Testing approaches
</details>

---

## Question 6: Multiple Choice - Prompting Best Practices (15 points)

You want an AI to refactor a complex function. Which prompt is BEST?

**A)** "Make this better"
**B)** "Fix the code"
**C)** "Refactor this function to: use early returns, add input validation, and reduce nesting to max 2 levels"
**D)** "PLEASE HELP WITH CODE!!!"

<details>
<summary>Answer Key</summary>

**Answer: C**

This prompt follows the "Be Specific" technique by providing clear, detailed instructions:
- Uses early returns (specific technique)
- Add input validation (specific requirement)
- Reduce nesting to max 2 levels (measurable goal)

Options A, B, and D are too vague and don't provide actionable guidance.
</details>

---

## Question 7: Practical Applications (15 points)

Which of the following is a recommended starting point for using AI in software development?

**A)** Replace your entire authentication system with AI-generated code
**B)** Use AI for documentation, tests, and boilerplate code
**C)** Let AI handle all production database migrations
**D)** Have AI rewrite your core business logic

<details>
<summary>Answer Key</summary>

**Answer: B**

Best practice: Start with **low-risk, high-value tasks** like:
- Documentation (READMEs, API docs, comments)
- Testing (unit tests, edge cases, test data)
- Boilerplate code (scaffolding, repetitive patterns)

Build trust and experience before using AI for critical business logic or security-sensitive code.

Other practical use cases covered:
- Code generation and review
- Debugging and refactoring
- Learning and code translation
</details>

---

## Question 8: Chain of Thought (15 points)

When should you use the "Chain of Thought" prompting technique?

**A)** When you want the AI to think through a problem step by step
**B)** When you want a one-word answer
**C)** When you're creating a linked list data structure
**D)** When you want the AI to work faster

<details>
<summary>Answer Key</summary>

**Answer: A**

The **Chain of Thought** technique asks the AI to break down the problem step by step:

Example:
```
Think through this step by step:
1. First, identify the data flow
2. Then, find where state changes
3. Finally, suggest the fix
```

This technique is especially useful for:
- Complex debugging problems
- Understanding intricate code logic
- Breaking down multi-step tasks
- Getting more transparent reasoning
</details>

---

## Grading Scale
- **90-100 points:** Excellent understanding
- **80-89 points:** Good understanding
- **70-79 points:** Satisfactory understanding
- **Below 70:** Review workshop materials

**Total Points: 100**

## Additional Resources
- Workshop slides: See `slides/` directory
- Claude Code documentation: https://docs.claude.com
- Continue practicing with real projects to deepen your understanding
