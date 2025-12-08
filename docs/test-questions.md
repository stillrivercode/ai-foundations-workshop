# Foundations in AI Engineering - Knowledge Assessment

## Instructions
This assessment tests your understanding of the key concepts covered in the "Foundations in AI Engineering" workshop. Answer all 5 questions to the best of your ability.

---

## Question 1: AI Engineering Definition (20 points)

**Define AI Engineering and describe its three core components. Provide a brief explanation of each component.**

<details>
<summary>Answer Key (Click to expand)</summary>

AI Engineering is the practice of building, integrating, and optimizing AI-powered systems to solve real-world problems.

The three core components are:
1. **Build** - Create AI-powered features and capabilities
2. **Integrate** - Embed AI into existing workflows and systems
3. **Optimize** - Improve AI effectiveness, efficiency, and performance

It's not just about using ChatGPT - it's about systematically incorporating AI capabilities into software development and business processes.
</details>

---

## Question 2: Prompt Engineering Techniques (20 points)

**List and explain the four key prompting techniques covered in the workshop. For each technique, provide a brief example of how to apply it.**

<details>
<summary>Answer Key (Click to expand)</summary>

The four key prompting techniques are:

1. **Be Specific**
   - Provide clear, detailed instructions instead of vague requests
   - Example: Instead of "Make this code better", say "Refactor this function to use early returns, add input validation, and reduce nesting to max 2 levels"

2. **Provide Context**
   - Give background information about the problem, tech stack, or constraints
   - Example: Instead of "Fix this bug", say "This Express middleware should validate JWT tokens. It's returning 401 even for valid tokens. Here's the current code and a valid token example..."

3. **Show Examples**
   - Demonstrate the pattern or format you want
   - Example: "Convert these to kebab-case: 'UserProfile' → 'user-profile', 'APIHandler' → 'api-handler'. Now convert: 'DatabaseConnection'"

4. **Chain of Thought**
   - Ask the AI to break down the problem step by step
   - Example: "Think through this step by step: 1. First, identify the data flow 2. Then, find where state changes 3. Finally, suggest the fix"
</details>

---

## Question 3: Context Windows and Tokens (20 points)

**a) Explain what a context window is and why it matters for working with LLMs.**

**b) What is a token? Provide approximate token counts for the following:**
   - 1 word
   - 1 page of text
   - 100 lines of code

**c) Why is token awareness important? List at least three reasons.**

<details>
<summary>Answer Key (Click to expand)</summary>

**a) Context Window:**
A context window is the total amount of text an LLM can "see" at once - including your prompt AND its response. It matters because:
- Too little context: AI lacks information to provide good answers
- Too much context: Important details get lost or diluted
- Right context: Precise, relevant responses

Current limits (2025): GPT-4o (128K), Claude 3.5 (200K), Gemini 2.0 (1M+)

**b) Tokens:**
Tokens are chunks of text - roughly 4 characters or 0.75 words in English.
- 1 word ≈ 1.3 tokens
- 1 page of text ≈ 500 tokens
- 100 lines of code ≈ 300-500 tokens

**c) Token Awareness Importance:**
1. **Cost** - You pay per token used
2. **Speed** - More tokens = slower response times
3. **Quality** - Focused context = better output
4. Give the AI what it needs, not everything you have
</details>

---

## Question 4: Agent Memory Configuration (20 points)

**Agent memory helps AI tools understand your project context. Answer the following:**

**a) Name three AI tools and their corresponding configuration filenames.**

**b) What type of information should you include in these configuration files? List at least 4 categories.**

**c) Why are these configuration files important for AI engineering workflows?**

<details>
<summary>Answer Key (Click to expand)</summary>

**a) Configuration Files by Tool:**
1. Claude Code - `CLAUDE.md`
2. Gemini CLI - `GEMINI.md`
3. OpenAI Codex - `AGENTS.md`

**b) Information to Include:**
1. Project Context / Tech Stack
2. Architecture and folder structure
3. Coding conventions and style guide
4. Common commands (build, test, deploy)
5. Testing approaches
6. Important constraints or guidelines

**c) Why They're Important:**
- These files live in your project root and are automatically read by each tool
- They provide persistent context across conversations
- Help AI tools understand project-specific conventions
- Reduce the need to repeat context in every prompt
- Ensure consistency across team members using AI tools
- Act as living documentation that evolves with the project
</details>

---

## Question 5: Practical Applications (20 points)

**The workshop covered 8 practical use cases for AI in software development. List at least 6 of these use cases and provide a brief example of each.**

<details>
<summary>Answer Key (Click to expand)</summary>

Eight practical use cases covered:

1. **Code Generation** - Scaffolding, boilerplate, repetitive patterns
2. **Code Review** - Security analysis, best practices, optimization suggestions
3. **Debugging** - Error analysis, root cause identification
4. **Refactoring** - Modernization, pattern application, code cleanup
5. **Documentation** - API docs, READMEs, inline comments
6. **Testing** - Unit tests, edge cases, test data generation
7. **Learning** - Explaining code, exploring libraries and frameworks
8. **Translation** - Language migration, API version upgrades

Best practice: Start with low-risk, high-value tasks like documentation, tests, and boilerplate. Build trust before using AI for critical business logic.
</details>

---

## Grading Scale
- 90-100 points: Excellent understanding
- 80-89 points: Good understanding
- 70-79 points: Satisfactory understanding
- Below 70: Review workshop materials

## Additional Resources
- Workshop slides: See `slides/` directory
- Claude Code documentation: https://docs.claude.com
- Continue practicing with real projects to deepen your understanding
