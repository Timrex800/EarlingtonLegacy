# Zero-Cost Automated Development Pipeline
## Earlington Legacy Educational Platform

This document outlines the fully automated, zero-cost development-to-production pipeline designed for the Earlington Legacy platform.

### **1. Architecture Overview**

The pipeline integrates **Google AI Studio** (Code Generation), **GitHub** (Version Control & CI/CD), and **Vercel** (Hosting & Edge Functions).

```mermaid
graph LR
    A[AI Agent / Developer] -- Push "ai-updates" --> B(GitHub Actions);
    B -- Validate & Auto-Merge --> C[Dev Branch];
    C -- Pull Request --> D[Main Branch];
    D -- Auto-Deploy --> E[Vercel Production];
    
    subgraph "CI/CD Pipeline"
    B
    end
    
    subgraph "Hosting"
    E
    end
```

### **2. Workflow Components**

#### **A. AI Automated Coding (`ai-merge.yml`)**
*   **Trigger**: Pushes to `ai-updates` branch.
*   **Action**: 
    1.  Checkout code.
    2.  Install dependencies & **BUILD** the project to verify integrity.
    3.  If build passes:
        *   Create a Pull Request to `dev`.
        *   Auto-Approve.
        *   Auto-Merge to `dev`.
*   **Purpose**: Allows the AI coder to autonomous work without breaking the dev branch.

#### **B. Continuous Integration (`ci.yml`)**
*   **Trigger**: Pushes to `main`, `dev`, or `ai-updates`.
*   **Action**: Runs `npm run build` to ensure the site compiles correctly.
*   **Purpose**: Safety net to catch errors immediately.

#### **C. Production Deployment (Vercel)**
*   **Trigger**: Push to `main`.
*   **Action**: Vercel automatically builds and deploys the static site and Edge Functions.
*   **Domain**: `earlingtonlegacy.com` (Managed via Afrihost DNS configured to Vercel).

### **3. Security & Sensitivity Protocol**

To ensure **no sensitive details** appear in public folders:

1.  **`.gitignore` Enforcement**:
    *   Strictly excludes `.env`, `.env.local`, and all variations.
    *   Excludes build artifacts (`dist`, `node_modules`).
    *   Excludes Editor configs (`.vscode`).

2.  **Secrets Management**:
    *   **GitHub Secrets**: Used for `GITHUB_TOKEN` operations.
    *   **Vercel Environment Variables**: All API Keys (e.g., `GEMINI_API_KEY`) are stored in Vercel Project Settings, *never* in the codebase.

### **4. How to Operate**

#### **For AI Development:**
1.  Instruct the AI to make changes.
2.  Commit changes to a branch named `ai-updates`.
3.  The pipeline will automatically validate and merge into `dev`.

#### **For Production Release:**
1.  Review the `dev` branch.
2.  Create a Pull Request from `dev` to `main`.
3.  Once merged, Vercel deploys to `earlingtonlegacy.com` automatically.

### **5. Cost Analysis**
*   **GitHub Actions**: Free tier (2,000 mins/month) - Sufficient for checking builds.
*   **Vercel**: Hobby Tier (Free) - Unlimited deployments, 100GB bandwidth.
*   **Google AI Studio**: Free Tier.
*   **Total Cost**: **$0.00**

---
**Status**: ACTIVE & SECURED
**Generated**: 2026-01-15
