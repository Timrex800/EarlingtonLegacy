# AI Studio Context

## Project Overview

Community heritage preservation platform - non-profit public initiative

## Current Phase

Phase: 3 (Sanitization & Structure)

## Active Development Areas

- Static website with component-based architecture
- Type-safe codebase
- Search optimization
- Accessibility improvements
- Future: Authentication service integration

## Recent Phase Activities

- Repository sanitization for public safety
- Feature scope reduction
- Deployment workflow configuration
- Metadata implementation
- Theme refinement

## Current Focus

- Maintaining clean, identity-free repository
- Preparing for community event promotion
- Planning user account system

## Project Structure

### Source Code Locations

```
/components       - UI components
/public          - Static assets
App.tsx          - Main application
index.tsx        - Entry point
index.html       - Template
constants.tsx    - Shared configuration
types.ts         - Type definitions
```

### Configuration Files

```
package.json     - Dependencies and scripts
tsconfig.json    - Type system configuration
vite.config.ts   - Build configuration
firebase.json    - Hosting configuration (abstract)
```

### AI Memory

```
/ai/memory       - Build state, decisions, constraints
/ai/prompts      - System, refactor, deployment guides
/ai/studio       - This file (context)
```

### Documentation

```
/docs            - Architecture, governance, conventions
README.md        - Public-facing description
SECURITY.md      - Security policies
CONTRIBUTING.md  - Contribution guidelines
```

## Key Components

### Hero

- Main landing section
- Brand messaging
- Call-to-action elements
- Animated entrance

### InfoSection

- Community information
- Event highlights
- Educational content

### EducationSection

- Program information
- Learning resources
- Heritage documentation

### CtaSection

- Call-to-action prompts
- Involvement opportunities
- Event registration (future)

### FounderSection

- Leadership information
- Mission statement
- Organization details

### AuditDashboard

- Transparency information
- Registration details
- Public accountability

### Footer

- Navigation
- Contact information
- Social media integration (future)
- Legal links

## Technical Details

### Build Process

1. Type compilation
2. Component bundling
3. CSS optimization
4. Asset copying to output directory
5. Static file generation

### Development Workflow

```bash
npm install      # Install dependencies
npm run dev      # Start development server
npm run build    # Create production build
```

### Deployment

- Platform: Static hosting service
- Custom domain: Configured
- HTTPS: Enforced
- CI/CD: Automated workflow

## Design System

### Colors

- **Primary**: Warm metallic tones
- **Backgrounds**: Dark mode friendly, gradient overlays
- **Text**: High contrast for accessibility
- **Accents**: Secondary action colors

### Typography

- **Headings**: Bold hierarchy
- **Body**: Readable, accessible sizing
- **Special**: Metallic effects for emphasis

### Spacing

- Consistent spacing system
- Mobile-first breakpoints
- Generous white space

## Data Model

### Event

```typescript
{
  title: string
  date: string
  description: string
  imageUrl?: string
}
```

### Director (Future)

```typescript
{
  name: string
  role: string
  bio?: string
}
```

## External Integrations

### Current

- None (fully static)

### Planned

- **Authentication**: User accounts
- **Analytics**: Privacy-respecting tracking (future)
- **Forms**: Contact/registration (future)

## Security Principles

### Public Repository Rules

- No credentials or API keys
- No personal identifiers
- No internal infrastructure details
- Environment abstraction for secrets
- Sanitized configuration only
- **No vendor names, domains, or organization references**

### Privacy

- Regional privacy law compliance
- Minimal data collection
- Transparent practices
- User consent for tracking

## Testing Strategy

### Current

- Manual browser testing
- Build validation
- Visual review

### Future

- Unit tests for components
- E2E tests for critical paths
- Accessibility audits
- Performance monitoring

## Dependencies

### Core

- UI framework (v18+)
- Type system (v5+)

### Build Tools

- Modern bundler (v5+)
- Build plugins

### Future

- Authentication SDK
- Testing frameworks

## Known Issues

- See `ai/memory/build-state.md` for current status

## Upcoming Features

### Short-term

1. Event registration system
2. Authentication integration
3. User accounts
4. Enhanced contact forms

### Long-term

1. Digital archive
2. Interactive timeline
3. Community gallery
4. Donation integration
5. Member directory (authenticated)

## Decision-Making Framework

### When to Proceed

- Aligns with constraints
- No security risks
- Improves UX or maintainability
- Clear benefit

### When to Pause

- Security risk present
- Requires stakeholder input
- Significantly increases complexity
- Unclear requirements

### When to Document

- Architectural changes
- New dependencies
- Security configurations
- Build process updates
- Deployment procedures

## AI Studio Rules

### Permitted Actions

- Read all files
- Propose changes via PR only
- Update abstract memory files
- Suggest refactoring
- Provide deployment guidance

### Forbidden Actions

- Introducing identifiers
- Adding URLs or domains
- Adding credentials
- Referencing real systems, vendors, or people
- Committing without sanitization check
- Direct commits (PR-only enforcement)

**Any violation invalidates the PR.**

## Pull-Before-Reasoning

Always:

1. Review latest `ai/memory/` state
2. Check `constraints.md` for rules
3. Verify phase in `build-state.md`
4. Reference `decisions-log.md` for context
5. Maintain complete abstraction

## Communication Guidelines

### Tone

- Professional but warm
- Heritage-focused
- Community-oriented
- Inclusive and welcoming
- Educational

### Language

- Clear and accessible
- Avoid jargon
- Respectful of history
- Forward-looking
- Fully abstracted (no real entities)

### Values

- Transparency
- Community
- Education
- Preservation
- Inclusivity
- Security

## Success Metrics

### Technical

- Automated audit score > 90
- Zero console errors
- Page load < 3s
- 100% mobile responsive

### Content

- Clear messaging
- Accessible to all users
- Search-optimized
- Regularly updated

### Community

- User engagement (future)
- Event participation (future)
- Contribution activity
- Positive feedback

## Next Steps (Phase 4)

1. Complete documentation suite (`/docs`)
2. Add SECURITY.md and CONTRIBUTING.md
3. Organize source code into `/src`
4. Prepare for authentication service
5. Plan event promotion strategy
