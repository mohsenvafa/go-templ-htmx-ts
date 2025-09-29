# Go HTMX Application with TypeScript Components

A simple Go web application with HTMX integration featuring Angular-like component structure.

## Project Structure

```
ts-go/
├── components/                 # Component directory
│   ├── index/                 # Index component (self-contained)
│   │   ├── index.component.templ
│   │   ├── index.component.ts
│   │   ├── index.go           # Go handler
│   │   └── index.component_templ.go  # Generated
│   ├── page-header/           # Page Header component (sub-component)
│   │   ├── page-header.component.templ
│   │   ├── page-header.component.ts
│   │   └── page-header.component_templ.go  # Generated
│   ├── user-profile/          # User Profile component (self-contained)
│   │   ├── user-profile.component.templ
│   │   ├── user-profile.component.ts
│   │   ├── user-profile.go    # Go handler
│   │   └── user-profile.component_templ.go  # Generated
│   └── user-address/          # User Address component (self-contained)
│       ├── user-address.component.templ
│       ├── user-address.component.ts
│       ├── user-address.go    # Go handler
│       └── user-address.component_templ.go  # Generated
├── static/
│   ├── js/
│   │   ├── main.ts           # Main entry point
│   │   └── dist/             # Built JavaScript (generated)
│   └── css/
│       └── style.css
├── main.go
├── Makefile
└── package.json
```

## Features

- **Angular-like Components**: Each templ component has a corresponding TypeScript component
- **TypeScript Integration**: Component-specific logic in separate `.ts` files
- **HTMX Integration**: Dynamic content loading without full page refreshes
- **Simple Build System**: Using esbuild for fast TypeScript compilation
- **Watch Mode**: Automatic rebuilding on file changes

## Commands

```bash
# Build TypeScript components
make build

# Watch and build TypeScript components
make build-watch

# Run the Go application
make run

# Clean build artifacts
make clean
```

## Development Workflow

1. **Start the application**:
   ```bash
   make run
   ```

2. **In another terminal, start TypeScript watching**:
   ```bash
   make build-watch
   ```

3. **Edit files**:
   - Edit `.component.templ` files for HTML structure
   - Edit `.component.ts` files for component logic
   - Changes are automatically detected and rebuilt

## Component Structure

Each component is completely self-contained in its own folder:
- **`.component.templ` file**: HTML template with Go templating
- **`.component.ts` file**: TypeScript logic for the component
- **`.go` file**: Go handler for the component (only for route components)
- **`.component_templ.go` file**: Generated templ file

**Sub-components** (like page-header) don't have handlers and are used within other components.

This creates a clean separation of concerns similar to Angular components.

### Import Aliases

Components use import aliases for clean imports:

```typescript
// In static/js/main.ts
import { IndexComponent } from '@components/index.component'
import { UserProfileComponent } from '@components/user-profile.component'
import { UserAddressComponent } from '@components/user-address.component'
```

The `@components` alias is configured in:
- **tsconfig.json**: TypeScript path mapping
- **Makefile**: esbuild alias configuration