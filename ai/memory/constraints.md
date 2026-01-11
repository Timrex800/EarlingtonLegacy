# Constraints

## Security Constraints (Non-Negotiable)

### Public Repository Principles

This repository must contain:

- ✅ Intent, not identity
- ✅ Structure, not secrets
- ✅ Policy, not provenance

### Prohibited Content

Nothing in this repository may include:

- ❌ Individual identifiers (names, emails, usernames)
- ❌ Private project references
- ❌ Internal URLs or infrastructure details
- ❌ Credentials, tokens, API keys, passwords
- ❌ Billing, vendor accounts, financial details
- ❌ Deployment credentials or server specifics
- ❌ Organization names or real entities
- ❌ Domain names or repo links
- ❌ Cloud console URLs or project IDs
- ❌ Timeline references tied to real entities

## Technical Constraints

### Build & Deployment

- Must build successfully in CI/CD
- Zero-dependency on external runtime services
- Static output only
- No vendor-specific implementations

### Browser Compatibility

- Modern browser support required
- Mobile-responsive mandatory
- Progressive enhancement approach

### Performance

- Automated audit score target: 90+
- Initial paint < 2s
- Total bundle < 500KB compressed

## Content Constraints

### Language

- Professional, neutral tone
- Inclusive, accessible language
- No vendor-specific terminology
- Abstract patterns only

### Accessibility

- WCAG 2.1 Level AA compliance
- Semantic HTML structure
- Appropriate ARIA implementation
- Full keyboard navigation

## Development Constraints

### Code Quality

- Strict type enforcement
- Zero production warnings
- Consistent formatting
- Semantic naming conventions

### Dependencies

- Minimize external packages
- Prefer actively maintained libraries
- Document integration patterns (not vendors)

## Data & Privacy

### User Data

- Explicit consent for any tracking
- No third-party cookies
- Minimal data collection
- Privacy-first design

### Compliance

- Regional data protection regulations
- Non-profit governance standards
- Transparent data practices

## Abstraction Requirements

### Always Use

- "The platform"
- "The system"
- "The application"
- "The AI layer"
- "The hosting environment"
- "The authentication service"
- "The build tool"

### Never Use

- Real names
- Brand accounts
- Vendor names
- Specific services
- Identifiable entities
- Organization references
- Domain names
- Repository URLs
