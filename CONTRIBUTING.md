# Contributing Guidelines

## Welcome

Thank you for your interest in contributing to this community heritage preservation project. This document outlines our contribution process and requirements.

## Core Principle: PR-Only Workflow

**All changes must go through Pull Requests. Direct commits to main branch are prohibited.**

This ensures:

- Proper review of all changes
- Sanitization verification before merge
- Traceable decision-making
- Quality assurance

## Before You Contribute

### Read the Documentation

1. Review `/ai/memory/constraints.md` for non-negotiable rules
2. Check `/ai/studio/context.md` for project understanding
3. Read `/docs` for architecture and conventions
4. Understand the security policy in `SECURITY.md`

### Understand the Rules

This is a **public repository by design** with strict sanitization requirements:

#### ❌ Absolutely Forbidden

- Personal identifiers (names, emails, usernames)
- Organization names or project references
- Domain names or URLs
- API keys, tokens, or credentials
- Cloud platform IDs or console URLs
- Vendor-specific account details
- Billing or financial information
- Internal infrastructure references
- Real dates or timelines tied to entities

#### ✅ Required Abstractions

Always use generic terms:

- "The platform" (not vendor names)
- "The system" (not project names)
- "The application" (not specific entities)
- "The hosting environment" (not providers)
- "Phase N" (not real dates)

## Contribution Process

### 1. Create an Issue (Optional but Recommended)

Before starting work:

- Check existing issues to avoid duplication
- Describe the problem or feature clearly
- Wait for maintainer feedback
- Get alignment on approach

### 2. Fork and Branch

```bash
# Fork the repository via UI
# Clone your fork
git clone [your-fork-url]

# Create a feature branch
git checkout -b feature/descriptive-name
```

### 3. Make Your Changes

#### Code Quality Requirements

- ✅ TypeScript strict mode compliance
- ✅ Zero build warnings
- ✅ Semantic, meaningful names
- ✅ Inline comments for complex logic
- ✅ Consistent code style
- ✅ No unused imports or variables

#### Security Requirements

- ✅ No credentials or secrets
- ✅ No personal information
- ✅ No vendor or domain references
- ✅ No infrastructure details
- ✅ Proper environment abstraction
- ✅ Full sanitization maintained

#### Accessibility Requirements

- ✅ Semantic HTML
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ Color contrast compliance (WCAG AA)
- ✅ Alt text for images
- ✅ Form labels present

### 4. Test Your Changes

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Create production build
npm run build
```

Verify:

- Build completes successfully
- No console errors or warnings
- Visual review in browser
- Responsive design works
- Accessibility maintained
- Cross-browser compatibility

### 5. Pre-Commit Sanitization Check

**MANDATORY before creating PR:**

Run through this checklist:

- [ ] No strings resembling emails (contains @)
- [ ] No strings resembling API keys or tokens
- [ ] No URLs or domain names
- [ ] No numeric platform IDs
- [ ] No vendor or brand names
- [ ] No organization references
- [ ] No personal names
- [ ] No real timeline markers (use "Phase N")
- [ ] Environment variables not included (only names documented, not values)
- [ ] `.gitignore` includes all sensitive files

**If you are uncertain about ANY item, do not proceed with the PR.**

### 6. Commit Your Changes

```bash
# Stage your changes
git add [files]

# Commit with clear message
git commit -m "type: description"
```

#### Commit Message Format

Use conventional commit format:

```
type: brief description

Optional longer description explaining:
- What changed
- Why it changed
- Any important context
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Code restructuring
- `docs`: Documentation changes
- `style`: Formatting, no logic change
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `security`: Security improvements

### 7. Push and Create Pull Request

```bash
# Push to your fork
git push origin feature/descriptive-name
```

Then create a PR via the UI:

- Use a clear, descriptive title
- Reference any related issues
- Describe what changed and why
- Note any breaking changes
- Confirm sanitization checklist completed

## Pull Request Review

### What We Check

- ✅ Code quality and type safety
- ✅ Build success
- ✅ Security and sanitization
- ✅ Accessibility compliance
- ✅ Documentation updates (if needed)
- ✅ Alignment with project constraints
- ✅ No identifiers or sensitive data

### Review Process

1. Automated checks run (build, lint)
2. Manual review by maintainers
3. Feedback provided if changes needed
4. Approval once standards met
5. Merge to main branch

### Rejection Criteria

PRs will be rejected if they:

- Contain personal identifiers
- Include credentials or secrets
- Reference vendors, domains, or organizations
- Break the build
- Introduce security vulnerabilities
- Violate accessibility standards
- Lack proper documentation
- Fail sanitization requirements

**Submissions violating sanitization policy will be rejected immediately.**

## Types of Contributions

### Code Contributions

- New features
- Bug fixes
- Performance improvements
- Refactoring
- Test coverage

### Documentation

- Architecture documentation
- Code comments
- README updates
- Tutorial creation
- Example additions

### Design

- UI/UX improvements
- Accessibility enhancements
- Visual design updates
- Brand consistency

### Issue Reporting

- Bug reports with reproduction steps
- Feature requests with use cases
- Documentation improvements
- Accessibility issues

## Code Style

### TypeScript

- Use strict mode
- Prefer `const` over `let`
- Avoid `any` type
- Define interfaces for complex types
- Use meaningful variable names

### React

- Functional components with hooks
- Props interfaces clearly defined
- Avoid prop drilling (use context if needed)
- Keep components focused (single responsibility)
- Meaningful component names

### CSS

- Utility-first approach
- Consistent naming conventions
- Mobile-first responsive design
- Accessibility considerations
- Theme-aware styling

## Getting Help

### Questions

- Check `/ai/prompts/` for guidance
- Review `/docs` for architecture info
- Create an issue for clarification
- Engage respectfully in discussions

### Blocked or Stuck

- Describe the problem clearly
- Share what you've tried
- Ask specific questions
- Be patient for responses

## Community Standards

### Be Respectful

- Professional communication
- Constructive feedback
- Assume good intentions
- Inclusive language
- Patient with newcomers

### Be Collaborative

- Share knowledge
- Help others learn
- Credit contributors
- Build on existing work
- Communicate openly

### Be Responsible

- Test your changes
- Follow the process
- Maintain sanitization
- Document decisions
- Own your contributions

## Recognition

Contributors will be recognized through:

- Git commit history
- Release notes (where applicable)
- Documentation credits
- Community acknowledgment

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

## Updates to Guidelines

These guidelines may evolve. Check back before starting new contributions.

---

**Questions?** Create an issue or reach out through project communication channels.

**Ready to contribute?** Thank you for helping preserve community heritage!
