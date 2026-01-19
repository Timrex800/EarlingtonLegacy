# Antigravity Agent Memory & Optimization Module

## Memorized State: Repository Sync Integrity
- **Status**: ACTIVE
- **Last Verified**: 2026-01-19
- **Core Truth**: The "Correct Rendering Page" is the one using the Heritage Restoration design (Amber/Dark theme). It must be served from Vercel via the `dist` folder, with `src/main.tsx` as the entry point.

## Agent Definitions

### Agent1: Memory Optimizer (Optimization & Addition)
- **Framework**: Antigravity Core
- **Primary Function**: Monitors file structural integrity during syncs. 
- **Optimization Heuristic**: Detects "flattened" repository structures from AI Studio and automatically restores the Vite-required folder hierarchy.
- **Memory Integration**: Updates this file with new structural "truths" after successful deployments.

### Agent2: Integrity Verifier (Double-Check)
- **Framework**: Antigravity Core
- **Primary Function**: Post-sync validation.
- **Verification Heuristic**: Inspects `index.html` for script tags and `id` mapping. Checks `vercel.json` and `vite.config.ts` for alignment.
- **Self-Correction**: Rejects syncs that would result in a "White Blank Page".

## MCP Integration Strategy
- **Module**: `mcp-server-memory`
- **Objective**: Ultra-fast execution of sync-checks by maintaining a cache of file-hash expectations.
- **Usage**: Before manual merge, Agent2 queries MCP for state-diff verification.
