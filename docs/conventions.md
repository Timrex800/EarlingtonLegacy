# Coding Conventions

## Purpose

This document defines the coding standards and conventions for this project. Consistent code style improves readability, maintainability, and collaboration.

## General Principles

### 1. Clarity Over Cleverness

- Write code that is easy to understand
- Avoid unnecessary complexity
- Use descriptive names
- Document non-obvious logic

### 2. Consistency

- Follow established patterns
- Match existing code style
- Use project conventions
- Maintain uniformity

### 3. Security First

- Never commit credentials
- Sanitize all configuration
- Use environment abstraction
- Follow security guidelines

### 4. Accessibility Always

- Semantic HTML
- ARIA when needed
- Keyboard navigation
- Color contrast

## TypeScript Conventions

### Type Safety

#### Strict Mode

Always use TypeScript strict mode:

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "strict": true
  }
}
```

#### Explicit Types

Prefer explicit types over inference when it improves clarity:

```typescript
// Good
interface UserProps {
  name: string;
  role: string;
}

const user: UserProps = { name: "User", role: "Admin" };

// Avoid
const user = { name: "User", role: "Admin" }; // implicit any possible
```

#### Avoid Any

Never use `any` unless absolutely necessary:

```typescript
// Bad
const data: any = fetchData();

// Good
interface DataShape {
  id: string;
  content: string;
}
const data: DataShape = fetchData();
```

### Naming Conventions

#### Interfaces

PascalCase, descriptive of shape:

```typescript
interface ComponentProps {
  title: string;
  isActive: boolean;
}
```

#### Types

PascalCase, descriptive:

```typescript
type StatusType = "active" | "inactive" | "pending";
```

#### Variables

camelCase, descriptive of content:

```typescript
const userName = "John";
const isAuthenticated = true;
const userList = ["user1", "user2"];
```

#### Constants

UPPER_SNAKE_CASE for true constants:

```typescript
const MAX_RETRIES = 3;
const API_TIMEOUT = 5000;
```

#### Functions

camelCase, verb or verb phrase:

```typescript
function fetchUserData() {}
function validateInput() {}
function handleSubmit() {}
```

### Function Conventions

#### Arrow Functions

Prefer arrow functions for callbacks and short functions:

```typescript
const numbers = [1, 2, 3];
const doubled = numbers.map((n) => n * 2);
```

#### Regular Functions

Use for component functions or when needing `this` context:

```typescript
function ComponentName(props: Props) {
  return <div>{props.title}</div>;
}
```

#### Return Types

Explicitly type return values for exported functions:

```typescript
function calculateTotal(items: Item[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}
```

## React Conventions

### Components

#### Functional Components

Always use functional components with hooks:

```typescript
interface HeroProps {
  title: string;
  subtitle?: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <section>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </section>
  );
}
```

#### Component Files

- One component per file
- File name matches component name
- PascalCase for component files

#### Props

- Define interface for props
- Destructure in function signature
- Use optional properties (`?`) when appropriate
- Provide defaults where sensible

### Hooks

#### Hook Order

Consistent order in components:

```typescript
function Component() {
  // 1. State hooks
  const [state, setState] = useState();

  // 2. Effect hooks
  useEffect(() => {}, []);

  // 3. Custom hooks
  const data = useCustomHook();

  // 4. Event handlers
  const handleClick = () => {};

  // 5. Return
  return <div />;
}
```

#### Dependencies

Always specify dependencies correctly:

```typescript
// Good
useEffect(() => {
  fetchData(id);
}, [id]);

// Bad
useEffect(() => {
  fetchData(id);
}, []); // Missing dependency
```

### JSX Conventions

#### Self-Closing Tags

Use self-closing tags when no children:

```tsx
// Good
<img src="..." alt="..." />

// Bad
<img src="..." alt="..."></img>
```

#### Attribute Order

Consistent attribute ordering:

1. Key/ref
2. Accessibility (aria-\*, role)
3. Class/style
4. Data attributes
5. Event handlers
6. Other props

```tsx
<button
  key="submit"
  aria-label="Submit form"
  className="btn-primary"
  onClick={handleClick}
  disabled={isLoading}
>
  Submit
</button>
```

#### Conditional Rendering

Use logical AND for simple conditions:

```tsx
{
  isVisible && <Component />;
}
```

Use ternary for if/else:

```tsx
{
  isLoading ? <Spinner /> : <Content />;
}
```

Extract complex conditions:

```tsx
const shouldShowAlert = isError && !isDismissed && hasPermission;

{
  shouldShowAlert && <Alert />;
}
```

## CSS Conventions

### Class Naming

Use descriptive, semantic class names:

```css
/* Good */
.hero-section {
}
.nav-link-active {
}
.form-input-error {
}

/* Bad */
.hs {
}
.red-text {
}
.mt-20 {
}
```

### Organization

Order properties logically:

```css
.component {
  /* Positioning */
  position: relative;
  top: 0;

  /* Box model */
  display: flex;
  width: 100%;
  margin: 1rem;
  padding: 1rem;

  /* Typography */
  font-size: 1rem;
  color: #333;

  /* Visual */
  background: white;
  border: 1px solid #ddd;

  /* Misc */
  cursor: pointer;
  transition: all 0.3s;
}
```

### Responsive Design

Mobile-first approach:

```css
/* Base (mobile) */
.container {
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
}
```

### Color Values

Use consistent color format:

```css
/* Prefer */
color: hsl(210, 50%, 50%);

/* Or hex */
color: #3b82f6;

/* Avoid */
color: rgb(59, 130, 246);
```

## File Organization

### Directory Structure

```
/components
  /Hero
    Hero.tsx
    Hero.css
  /Footer
    Footer.tsx
    Footer.css

/types
  types.ts

/constants
  constants.tsx
```

### Import Order

Consistent import ordering:

```typescript
// 1. External dependencies
import React, { useState, useEffect } from "react";

// 2. Internal components
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";

// 3. Types
import type { UserProps } from "./types";

// 4. Constants
import { MAX_ITEMS } from "./constants";

// 5. Styles
import "./App.css";
```

## Comments & Documentation

### When to Comment

#### Good Comments

```typescript
// Calculate compound interest using the formula: A = P(1 + r/n)^(nt)
function calculateInterest(principal: number, rate: number) {
  // ...
}

// WORKAROUND: The API returns dates in inconsistent formats
// TODO: Remove this once backend is updated
function parseDate(dateString: string) {
  // ...
}
```

#### Unnecessary Comments

```typescript
// Bad: Obvious what code does
// Loop through users
users.forEach((user) => {});

// Bad: Outdated comment
// This uses the old API (but code was updated)
fetch("/new-api/endpoint");
```

### JSDoc

Use JSDoc for exported functions:

```typescript
/**
 * Formats a date string into a readable format
 * @param date - ISO date string
 * @param locale - Optional locale for formatting
 * @returns Formatted date string
 */
export function formatDate(date: string, locale?: string): string {
  // ...
}
```

## Error Handling

### Try-Catch

Handle errors appropriately:

```typescript
async function fetchData() {
  try {
    const response = await fetch("/api/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    // Handle error appropriately
    throw error;
  }
}
```

### Error Boundaries (React)

Implement for component error handling:

```typescript
class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    // Log error
    console.error(error, errorInfo);
  }

  render() {
    // Fallback UI
  }
}
```

## Accessibility Guidelines

### Semantic HTML

Use appropriate elements:

```html
<!-- Good -->
<header>
  <nav>
    <a href="/">Home</a>
  </nav>
</header>

<!-- Bad -->
<div class="header">
  <div class="nav">
    <span onclick="...">Home</span>
  </div>
</div>
```

### ARIA Labels

Add when semantic meaning unclear:

```tsx
<button aria-label="Close modal" onClick={handleClose}>
  ×
</button>

<nav aria-label="Main navigation">
  {/* ... */}
</nav>
```

### Keyboard Navigation

Ensure keyboard accessibility:

```tsx
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyPress={(e) => e.key === "Enter" && handleClick()}
>
  Custom Button
</div>
```

## Testing Conventions (Future)

### Test File Naming

```
Component.tsx
Component.test.tsx
```

### Test Structure

```typescript
describe("ComponentName", () => {
  it("should render correctly", () => {
    // Arrange
    // Act
    // Assert
  });

  it("should handle user interaction", () => {
    // ...
  });
});
```

## Git Conventions

### Commit Messages

Follow conventional commits:

```
type(scope): description

Examples:
feat: add hero component
fix: correct alignment issue
docs: update architecture guide
refactor: simplify state management
style: format code
test: add unit tests
chore: update dependencies
```

### Branch Naming

Descriptive branch names:

```
feature/add-contact-form
fix/navigation-bug
refactor/component-structure
docs/update-readme
```

## Performance Guidelines

### Avoid Unnecessary Re-renders

```typescript
// Use memo for expensive components
const MemoizedComponent = React.memo(ExpensiveComponent);

// Use useMemo for expensive calculations
const expensiveValue = useMemo(() => {
  return calculateExpensiveValue(data);
}, [data]);

// Use useCallback for stable function references
const handleClick = useCallback(() => {
  // handler logic
}, [dependencies]);
```

### Lazy Loading

```typescript
const LazyComponent = React.lazy(() => import("./Component"));

<Suspense fallback={<Loading />}>
  <LazyComponent />
</Suspense>;
```

## Security Conventions

### Never Commit

- API keys or tokens
- Passwords or credentials
- Personal information
- Internal URLs
- Vendor account details
- Domain names (use abstraction)

### Always

- Use environment variables
- Sanitize user input
- Validate data
- Follow security checklist
- Review PRs for security issues

## Code Review Checklist

Before submitting PR, verify:

- [ ] Types are correct and strict
- [ ] No build warnings
- [ ] Accessibility maintained
- [ ] Performance considered
- [ ] Security verified (no credentials)
- [ ] Sanitization complete (no identifiers)
- [ ] Comments added where needed
- [ ] Tests added/updated (when applicable)
- [ ] Documentation updated
- [ ] Follows all conventions

---

**Document Version**: 1.0  
**Last Updated**: Phase 3  
**Status**: Living Document
