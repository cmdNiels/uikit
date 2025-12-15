# AGENTS.md - Coding Guidelines for This Repository

## Build, Lint, Test Commands

```bash
pnpm dev              # Start development server (Convex + Next.js)
pnpm build            # Build for production
pnpm start            # Run production server
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint issues automatically
pnpm format           # Format JSON/YAML files with Prettier
```

## Code Style & Conventions

### Style

- **Tab Indentation**: Always use tabs as indentation.

### Naming

- **PascalCase**: Components, types/interfaces, files (e.g., `Button.tsx`, `IVideo.ts`)
- **camelCase**: Variables, functions, methods
- **UPPER_SNAKE_CASE**: Constants
- **Prefix interfaces with `I`**: `IVideo`, `IUserSettings`
- **Prefix event handlers with `handle`**: `handlePress`, `handleSubmit`
- **Auxiliary verbs for booleans**: `isLoading`, `hasError`
- **Single default export per file**; use `@/` alias imports

### TypeScript & Type Safety

- Prefer `interface` over `type` for object shapes
- Store types in `@/types/` directory with proper organization
- Avoid enums; use const objects/maps instead
- Use `satisfies` operator for type validation
- **Inline props directly** in function signature (no separate IProps interfaces)
- Use nullish coalescing (`??`) over logical OR (`||`)
- Use `@typescript-eslint/consistent-type-imports` (separate type imports)
- No explicit `any`; use `unknown` if necessary with proper narrowing

### Imports & Organization

- Use `simple-import-sort` (groups: externals, internals, relative paths)
- Enforce `@/` alias for imports from root
- Remove unused imports automatically
- Double quotes, no template literals for static strings

### UI & Styling

- Use `@/components/` primitives for consistent theming
- Use `cn()` utility instead of string concatenation for classes
- Prefer **flexbox over grid**
- Use `gap-*` instead of `space-*` utilities
- Create `_components/` directories for page-specific, non-reusable components

### Error Handling & Security

- Validate and sanitize all inputs
- Implement proper authentication/authorization with Clerk
- No console logs in production code (`warn` level for violations)
- No `eval`, `innerHTML`, or script injection patterns

### Best Practices

- Write concise, readable, functional code
- Apply early returns for clarity
- Follow DRY (Don't Repeat Yourself) principle
- Use React hooks properly; exhaustive-deps is enforced
- Implement proper Tailwind CSS class consistency

## Copilot/Cursor Rules

See `.github/copilot-instructions.md` for extended guidelines on:

- Full-stack development practices with TypeScript, React, Convex, and Clerk
- Security, performance, and architectural patterns
- Never check terminal output for errors unless user indicates a problem
