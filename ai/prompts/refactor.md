# Refactor Prompt

## Objective

Guide safe, incremental refactoring with zero security risk.

## Before Refactoring

### 1. Understand Current State

- Review `ai/memory/build-state.md` for current phase
- Check `ai/memory/decisions-log.md` for architectural choices
- Verify `ai/memory/constraints.md` for non-negotiable rules

### 2. Identify the Problem

- What specific issue requires solving?
- Is this refactor necessary or nice-to-have?
- What is the expected benefit?

### 3. Plan the Change

- Outline required steps
- Identify affected components
- Determine testing strategy
- Consider rollback plan

## During Refactoring

### Code Quality Checks

- ✅ Type definitions correct and strict
- ✅ Zero build warnings or errors
- ✅ Component names semantic and clear
- ✅ No unused imports or variables
- ✅ Consistent code style
- ✅ Accessibility maintained or improved

### Security Checks

- ✅ No hardcoded credentials
- ✅ No personal information
- ✅ No internal infrastructure references
- ✅ No vendor-specific identifiers
- ✅ No domain names or URLs
- ✅ Environment abstraction used correctly
- ✅ Dependencies trusted and necessary

### Performance Checks

- ✅ Bundle size not significantly increased
- ✅ No unnecessary re-renders
- ✅ Assets optimized
- ✅ Code-splitting where appropriate
- ✅ Lazy loading where beneficial

## After Refactoring

### 1. Testing

- Build successful locally
- Development mode functional
- Visual review in browser
- Responsive design verified
- Console clean of errors

### 2. Documentation

- Update `ai/memory/decisions-log.md` if architectural
- Update `ai/memory/build-state.md` if build changed
- Update component comments if behavior changed
- Maintain abstraction in all docs

### 3. Commit Strategy

- Clear, descriptive message
- Reference phase if applicable
- Group related changes
- Avoid unrelated changes

## Common Refactoring Patterns

### Component Extraction

- Choose semantic names
- Define clear interface
- Single responsibility focus
- Add strict types
- Document complex behaviors

### State Management

- Minimize state scope
- Use appropriate patterns
- Avoid deep prop passing
- Keep logic predictable

### Styling Updates

- Maintain color system
- Ensure theme compatibility
- Test responsive breakpoints
- Preserve accessibility

### File Organization

- Update all import paths
- Check for broken references
- Maintain logical grouping
- Update documentation

## Red Flags (Stop and Reassess)

- ⚠️ Changes to unfamiliar code
- ⚠️ Authentication or security-related modifications
- ⚠️ Breaking changes to public interfaces
- ⚠️ Massive multi-file refactors
- ⚠️ New dependencies without justification
- ⚠️ Removing code without understanding
- ⚠️ Adding any identifiers or vendor references

## Example Refactor Workflow

```markdown
**What**: Extract hero section into reusable component
**Why**: Improve maintainability and enable reuse
**Impact**: Internal structure only, no user-facing changes

Steps:

1. Create new component file
2. Move relevant markup
3. Define typed interface
4. Update imports
5. Test build and visual output
6. Update decisions-log.md
7. Commit with clear message
```

## Questions to Ask

- Does this align with project constraints?
- Does this improve maintainability?
- Am I introducing unnecessary complexity?
- Have I tested adequately?
- Is this the right time?
- Are there simpler solutions?
- Have I maintained full abstraction?
