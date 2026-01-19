# Earlington Legacy Initiative (NPC)
## Coding Instructions & Build Constitution – Operational Entry Point

### 1. Purpose

This document defines the mandatory coding instructions and execution rules for the Earlington Legacy Initiative website. It is the first operational reference for developers, AI systems, and reviewers. All coding activity must comply with this framework.

### 2. Single Source of Truth

GitHub is the sole authoritative repository. All code, whether created by humans or AI systems, must be committed to GitHub before it is considered valid or deployable.

### 3. Development Origin Rules

- Google AI Studio is the primary development environment for frontend code creation.
- Google AI Studio may generate, modify, and test code, but it cannot receive updates back from GitHub.
- Only stable snapshots are exported from Google AI Studio to GitHub.

### 4. Antigravity Coding Authority

- Antigravity is authorised to fix, refactor, and optimise code.
- Antigravity may only apply code changes directly against GitHub.
- Antigravity is prohibited from updating Google AI Studio or deploying to production.

### 5. Commit Rules

- Direct commits by Antigravity are prohibited on protected branches.
- All logic changes require a Pull Request and review.
- Cosmetic-only fixes may be committed directly to a hotfix branch if explicitly approved.

### 6. Deployment Flow

Vercel deploys automatically from GitHub. Firebase provides backend services only. Afrihost DNS routes traffic and provides domain verification. No deployment bypass is permitted.

### 7. Governance Enforcement

Any deviation from these coding instructions constitutes a breach of the Build Constitution and must be escalated through Jira and trustee oversight.
