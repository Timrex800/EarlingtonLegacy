---
description: Repository Sync and Vercel Deployment Process
---

# Repository Sync and Vercel Deployment Workflow

This workflow ensures the "Correct Rendering Page" from Google AI Studio is correctly synced and deployed to Vercel without breaking the Vite build structure.

// turbo-all

## 1. Sync Logic (Memory Addition & Optimization)
- **Role**: Agent1 (Optimizer)
- **Steps**:
    1. Fetch latest changes from `origin/main` (AI Studio source).
    2. Validate that the directory structure is preserved (`src/` folder must contain `App.tsx`, `main.tsx`, etc.).
    3. If files are flattened to root, move them back to `src/`.
    4. Ensure `index.html` has the correct module entry point: `<script type="module" src="/src/main.tsx"></script>`.
    5. Update `package.json` and `package-lock.json` if dependencies changed.

## 2. Verification (Double-Check Accuracy)
- **Role**: Agent2 (Verifier)
- **Steps**:
    1. Run `git status` to check for unintended deletions.
    2. Check `index.html` for existence of `id="root"` or `id="app"` (must match `main.tsx`).
    3. Verify that the CSS framework (Tailwind) is correctly initialized.
    4. Check `vercel.json` for correct build and output directory settings.

## 3. Final Execution
- **Steps**:
    1. Commit changes with prefix `chore: [AI-SYNC]`.
    2. Push to `ai-updates` branch.
    3. Merge to `main`.
    4. Verify live site status.
