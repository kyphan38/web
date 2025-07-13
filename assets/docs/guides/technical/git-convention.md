# git convention

## Branch

Key points

- Clarity: Identify purpose easily
- Organization: Tidy repository
- Automation: Support CI/CD
- Collaboration: Follow development flow

Format

```text
<type>/<description>
<type>/<ticket-id>-<description>
```

- Type: Work kind (e.g., feature, fix, hotfix, chore)
- Ticket ID (Optional): Task identifier
- Description: Short summary, lowercase, hyphen-separated

Common branch type

| Type     | Meaning                        | Example                                 |
| :------- | :----------------------------- | :-------------------------------------- |
| feature  | New feature                    | feature/add-user-authentication         |
| fix      | Bug fix                        | fix/resolve-login-issue                 |
| hotfix   | Urgent production fix          | hotfix/urgent-payment-gateway-error     |
| release  | Release preparation            | release/v1.2.0                          |
| docs     | Documentation changes          | docs/update-installation-guide          |
| chore    | Maintenance (no code impact)   | chore/update-react-version              |
| refactor | Code restructuring             | refactor/optimize-database-queries      |

Description

- Concise: Short enough to be easily readable
- Descriptive: Clearly state the main purpose
- Format: Lowercase, hyphens only

Examples

```text
feature/implement-oauth-login
fix/JIRA-123-user-cannot-upload-avatar
hotfix/critical-security-patch-for-user-api
chore/setup-eslint-prettier
release/v2.0.1-beta
docs/add-api-usage-examples
```

Best practices

- Consistency across team
- Short but clear
- Use hyphens, English

## Commit

Key points

- Clear and searchable
- Supports automation
- Professional history

Format

```text
<type>(<scope>): <description>

[Body]

[Footer]
```

- Type: Change type (e.g., feat, fix, docs)
- Scope: Affected area (optional) (e.g., frontend, backend, api)
- Description: Summary (50-72 chars)

Type

| Type     | Meaning                        | Example                                 |
| :------- | :----------------------------- | :-------------------------------------- |
| feat     | New feature                    | feat(cart): add checkout functionality  |
| fix      | Bug fix                        | fix(api): handle null response error    |
| docs     | Documentation                  | docs(readme): update installation guide |
| style    | Code style                     | style(css): format with prettier        |
| refactor | Refactoring                    | refactor(auth): simplify login logic    |
| test     | Tests                          | test(unit): add user model tests        |
| chore    | Misc (e.g., deps)              | chore(deps): update lodash to v4.17.21  |
| perf     | Performance                    | perf(db): optimize query performance    |
| ci       | CI/CD changes                  | ci(github): add linting to workflow     |
| build    | Build changes                  | build(webpack): add production config   |

Scope

- Clarifies area (e.g., auth, ui, api, db, config)
- Optional for global changes
- Based on files modified

Examples

```text
fix(ui): adjust padding for navbar
feat: add dark mode toggle
```

Description

- 50-72 chars
- Imperative, lowercase, verb start (e.g., add, fix)

Key points

- Length: 50-72 characters for clean git log display
- Clarity: Answers "What does this commit do"?
- Style: Imperative, lowercase, starts with a verb (e.g., add, fix)

Example

- Good: `add user profile page with avatar upload`
- Bad: `Added a new profile page and some stuff for users` (too vague, lengthy)

### Body and Footer

- Body
  - For context: Bullet points, smaller than 72 chars/line
  - Explain what/why
- Footer
  - Metadata: Closes #123, BREAKING CHANGE

Examples

```text
feat(auth): add Google OAuth login

- Implement Google OAuth2 flow
- Add /auth/google endpoint
- Update user model

Closes #123
```

```text
refactor(auth): simplify JWT token generation

- Remove redundant validation
- Update expiration to 1 hour
- Add unit tests

BREAKING CHANGE: token expires after 1 hour
Closes #456
```

Best practices

- English preferred
- One change per commit
- Review diffs
- Team agreement
- Use tools for enforcement
