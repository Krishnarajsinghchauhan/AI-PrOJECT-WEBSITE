# AI Guidance

This document explains how AI tools were used during development and how AI behavior is constrained.

---

# AI Usage

AI tools were used to assist with:

- debugging
- API integration examples
- documentation drafting

---

# AI Role in the Application

AI is used in the **task insights feature**.

Workflow:

1. The system analyzes user tasks.
2. A deterministic rule-based insight is generated.
3. The insight is sent to a large language model.
4. The LLM improves the advice for clarity and usefulness.

Example:

Rule insight:

You have 3 tasks. 2 are pending.

AI enhanced insight:

You currently have three tasks, two of which are still pending.
Consider completing the most important task first to stay productive.

---

# Safety Constraints

The system ensures:

- AI output does not affect database state
- AI is used only for text enhancement
- the system works even if AI fails

Fallback logic returns the rule-based insight if the AI request fails.

---

# AI Model

The system uses:

HuggingFace Router API

Model:

openai/gpt-oss-120b

This allows integration with a large language model without running infrastructure locally.

---

# Design Principles

The AI integration follows these principles:

- deterministic core logic
- optional AI enhancement
- safe fallback behavior

This ensures the system remains **correct, predictable, and maintainable**.

---
