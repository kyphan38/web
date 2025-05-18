# git convention

## Branch

Key points

- Clarity: Easily identify the purpose and scope of work for each branch
- Organization: Keep the repository tidy, making it easier to search for and manage branches
- Automation: Support Continuous Integration/Continuous Deployment (CI/CD) pipelines or other automation tools that might trigger actions based on branch names
- Collaboration: Enable team members to easily follow each other's work and understand the project's development flow

Format

```text
<type>/<description>
---
<type>/<ticket-id>-<description>
```

- Type: Specifies the kind of work the branch addresses (e.g., feature, fix, hotfix, chore)
- Ticket ID (Optional): The identifier of the related ticket/task in the project management system
- Description: A short, descriptive summary of the branch's purpose. Use lowercase letters with words separated by hyphens (-)

Common branch type

| Type     | Meaning                                                                                                        | Example                             |
| :------- | :------------------------------------------------------------------------------------------------------------- | :---------------------------------- |
| feature  | Developing a new feature for the application.                                                                  | feature/add-user-authentication     |
| fix      | Fixing a bug in the codebase (usually on a develop or feature branch).                                         | fix/resolve-login-issue             |
| hotfix   | Fixing a critical, urgent bug on the production environment.                                                   | hotfix/urgent-payment-gateway-error |
| release  | Preparing for a new production release (bundling features, fixes).                                             | release/v1.2.0                      |
| docs     | Changes related only to documentation.                                                                         | docs/update-installation-guide      |
| chore    | Maintenance tasks, updates that don't affect runtime code (e.g., updating dependencies, build configurations). | chore/update-react-version          |
| refactor | Restructuring code without changing functionality or fixing bugs.                                              | refactor/optimize-database-queries  |

### Description

--

- Concise: Keep the description short enough to be easily readable in branch lists
- Descriptive: Clearly state the main purpose of the branch
- Format: Use lowercase letters and hyphens (-) to separate words. Avoid spaces, special characters, or uppercase letters (except possibly in the ticket-id)

### Examples

--

- `feature/implement-oauth-login`
- `fix/JIRA-123-user-cannot-upload-avatar`
- `hotfix/critical-security-patch-for-user-api`
- `chore/setup-eslint-prettier`
- `release/v2.0.1-beta`
- `docs/add-api-usage-examples`

### Best Practices

--

- Consistency: The entire team should agree on and strictly follow the chosen naming convention
- Concise but descriptive: Branch names should be short enough not to be cumbersome when typing commands, but clear enough for others to understand their purpose
- Use hyphens: Always use hyphens (-) to separate words in the description, not underscores (_) or spaces
- Use English: Prefer using English for branch names to ensure consistency and ease of understanding in international or multilingual teams

## Commit

Key points

- Clear: Easy to understand
- Searchable: Facilitates finding specific changes
- Automated: Supports tools like changelog generators
- Professional: Maintains a polished project history

Format

```text
<type>(<scope>): <description>

[Body: Detailed explanation of changes]

[Footer: Additional metadata]
```

- Type: Indicates the change type (e.g., feat, fix, docs)
- Scope: Specifies the affected module (e.g., frontend, backend, api)
- Description: Concise summary of the change (50-72 characters)

### Type

| Type     | Meaning                                      | Example                                 |
| :------- | :------------------------------------------- | :-------------------------------------- |
| feat     | New feature                                  | feat(cart): add checkout functionality  |
| fix      | Bug fix                                      | fix(api): handle null response error    |
| docs     | Documentation changes                        | docs(readme): update installation guide |
| style    | Code style changes (no logic impact)         | style(css): format with prettier        |
| refactor | Code refactoring (no feature or bug changes) | refactor(auth): simplify login logic    |
| test     | Add or modify tests                          | test(unit): add user model tests        |
| chore    | Miscellaneous (e.g., dependency updates)     | chore(deps): update lodash to v4.17.21  |
| perf     | Performance improvements                     | perf(db): optimize query performance    |
| ci       | CI/CD configuration changes                  | ci(github): add linting to workflow     |
| build    | Build-related changes (e.g., webpack, npm)   | build(webpack): add production config   |

### Scope

Key points

- Purpose: Clarifies the affected project area
- Optional: Omit if changes are project-wide

Common scopes

- auth: Authentication (login, logout, JWT)
- ui: User interface (CSS, components)
- api: Server-side endpoints or logic
- db: Database (schema, migrations, queries)
- config: Project configuration (env, webpack)

Choosing a scope

- Base on modified files (e.g., src/auth &rarr; auth)
- Omit if unclear, but avoid overusing this

Examples

- `fix(ui): adjust padding for navbar`
- `feat: add dark mode toggle`

### Description

Key points

- Length: 50-72 characters for clean git log display
- Clarity: Answers "What does this commit do"?
- Style: Imperative, lowercase, starts with a verb (e.g., add, fix)

Example

- Good: `add user profile page with avatar upload`
- Bad: `Added a new profile page and some stuff for users` (too vague, lengthy)

### Body and Footer

Body

- When: For complex changes needing more context
- Format: Use bullet points or numbered lists, max 72 characters per line
- Purpose: Explain what changed and why

Footer

- Content: Metadata like issue IDs, breaking changes, or credits
- Keywords
  - Closes #123: Auto-closes GitHub issue
  - Fixes #123: Similar to Closes
  - BREAKING CHANGE: Highlights major changes

### Examples

--

```text
feat(auth): add Google OAuth login

- Implement Google OAuth2 flow for authentication
- Add /auth/google endpoint for redirect
- Update user model to store Google ID

Closes #123
```

```text
refactor(auth): simplify JWT token generation

- Remove redundant token validation logic
- Update token expiration to 1 hour
- Add unit tests for token generation

BREAKING CHANGE: token expires after 1 hour instead of 24 hours
Closes #456
```

### Best Practices

--

- Language: Use English for international teams; align with team preference otherwise
- Single purpose: One commit per logical change (e.g., don't mix bug fixes and features)
- Review changes: Run git diff to avoid committing unintended changes (e.g., debug logs)
- Team alignment: Agree on types, scopes, and format with the team before adoption
- Tools: Use linters or hooks (e.g., Commitizen) to enforce this convention
