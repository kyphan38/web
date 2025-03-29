# create vault policies

## Vault Policies Overview

## Intro to Vault Policies

How do we determine who should access secrets?

Key features

- Vault policies enable operators to permit or deny access to specific paths or actions in Vault using Role-Based Access Control (RBAC)
  - Provide granular control over secret access
- Policy format is written as declarative statements in JSON or HCL.
- Principle of least privilege grants users or applications only the permissions they need
- By default, Policies implicitly deny access unless explicitly granted
  - No policy = no authorization
  - Explicit DENY overrides all other permissions
- Policies are linked to tokens, a token can have multiple policies
  - Permissions are cumulative and additive

Default Vault policies

- Root policy
  - Created by default as a superuser with unrestricted permissions
  - Cannot be modified or deleted
  - Attached to all root tokens
- Default policy
  - Created by default with common permissions
  - Modifiable but cannot be deleted
  - Attached to all non-root tokens by default (removable if needed)

```bash
vault policy list
---
default
root
```

- Default policy example

```bash
vault policy read default
---
path "auth/token/lookup-self" { capabilities = ["read"] }
path "auth/token/renew-self" { capabilities = ["update"] }
path "auth/token/revoke-self" { capabilities = ["update"] }
path "sys/capabilities-self" { capabilities = ["update"] }
```

- Root policy example

```bash
vault policy read root
---
No policy named: root
```

The root policy has no explicit rules but grants full access

```bash
path "*" { 
  capabilities = ["read", "create", "update", "delete", "list", "sudo"] 
}
```

- Note: Use the root policy with extreme caution

## Managing Policies using CLI

Using the CLI

- Syntax: `vault <object_type> <subcommand> <policy_name> <file_location>`

```bash
vault policy list
---
admin-policy
default
root

vault policy write admin-policy /tmp/admin.hcl
---
Success! Uploaded policy: admin-policy
---
```

## Managing Policies using UI

Direction: Homepage &rarr; Policies &rarr; Create ACL policy

## Managing Policies using API

Create a new policy

- Method: POST

```bash
curl \
  --header "X-Vault-Token: s.***" \
  --request PUT \
  --data @payload.json \
  http://127.0.0.1:8200/v1/sys/policy/webapp
```

- Payload file

```bash
{
  "policy": "path \"kv/apps/webapp\" { capabilities = [\"read\"] }"
}
```

## Anatomy of a Vault Policy

Vault operates on a path-based system. Policies grant or restrict access to these paths and their operations

- Syntax

```bash
path "<path>" {
  capabilities = ["<permissions>"]
}
```

- Examples

```bash
path "kv/data/apps/jenkins" { 
  capabilities = ["read", "update", "delete"] 
}
path "sys/policies/*" { 
  capabilities = ["create", "update", "list", "delete"] 
}
path "aws/creds/web-app" { 
  capabilities = ["read"] 
}
```

## Vault Policies - Path

Common paths

- Examples
  - sys/policy/vault-admin
  - kv/apps/app01/web
  - auth/ldap/group/developers
  - database/creds/prod-db
  - secrets/data/platform/aws/tools/ansible/app01
  - sys/rekey

Root-protected paths

- Certain critical paths require a root token or the sudo capability. Examples include
  - auth/token/create-orphan (create an orphan token)
  - pki/root/sign-self-issued (sign a self-issued certificate)
  - sys/rotate (rotate the encryption key)
  - sys/seal (manually seal Vault)
  - sys/step-down (force leader to relinquish active status)

```bash
path "sys/rotate" { 
  capabilities = ["sudo"] 
}
path "sys/seal" { 
  capabilities = ["sudo"] 
}
path "sys/step-down" { 
  capabilities = ["sudo"] 
}
```

## Vault Policies - Capabilities

Capabilities define permitted actions in Vault

- Specified as a list of strings (even for a single capability)

Capability definitions

| Capability | HTTP Verb  | Description                                    |
|------------|------------|------------------------------------------------|
| create     | POST/PUT   | Create a new entry if it doesn’t exist         |
| read       | GET        | Read credentials, configurations, etc.         |
| update     | POST/PUT   | Overwrite an existing secret or configuration  |
| delete     | DELETE     | Delete an entry                                |
| list       | LIST       | View available items (without reading contents)|
| sudo       | -          | Access root-protected paths                    |
| deny       | -          | Deny access, overriding all other capabilities |


:::note
Write is not a valid capability
:::

Examples

- Example 1 requirements
  - Generate database credentials at database/creds/db01
  - Manage secrets (create, read, update, delete) at kv/apps/dev-app01

```bash
path "database/creds/dev-db01" {
  capabilities = ["read"]
}
path "kv/apps/dev-app01" {
  capabilities = ["create", "read", "update", "delete"]
}
```

- Example 2 requirements
  - Read credentials under kv/apps/webapp/*
  - Deny access to kv/apps/webapp/super-secret

```bash
path "kv/apps/webapp/*" {
  capabilities = ["read"]
}
path "kv/apps/webapp/super-secret" {
  capabilities = ["deny"]
}
```

## Customizing the Path

Using * (Glob)

- Wildcard for anything after a path (only at the end)
- Examples
  - secret/apps/application1/*: Matches any path after application1
  - kv/platform/db-*: Matches kv/platform/db-2, but not kv/platform/db2

Using + (Single Directory Wildcard)

- Matches a single directory in a path segment
- Can be used multiple times (e.g., secret/+/+/db)
- Examples:
  - secret/+/db: Matches secret/db2/db or secret/app/db
  - kv/data/apps/+/webapp: Matches:
    - kv/data/apps/dev/webapp
    - kv/data/apps/qa/webapp
    - kv/data/apps/prod/webapp

Example policy

```bash
path "secret/+/+/webapp" {
  capabilities = ["read", "list"]
}
path "secret/apps/+/team-*" {
  capabilities = ["create", "read"]
}
```

ACL Teamplting

- Use `{{parameter}}` for variable replacement with token-specific values
- Example: Restrict key/value v2 secrets to a specific user’s entity ID

```bash
path "secret/data/{{identity.entity.id}}/*" {
  capabilities = ["create", "update", "read", "delete"]
}
path "secret/metadata/{{identity.entity.id}}/*" {
  capabilities = ["list"]
}
```

Supported parameters

| Parameter                                               | Description                                        |
|---------------------------------------------------------|----------------------------------------------------|
| identity.entity.id                                      | Entity’s ID                                      |
| identity.entity.name                                    | Entity’s name                                     |
| identity.entity.metadata.`<key>`                          | Metadata for the entity by key                   |
| identity.entity.aliases.`<accessor>`.id                  | Entity alias ID for a mount                      |
| identity.entity.aliases.`<accessor>`.name                | Entity alias name for a mount                    |
| identity.groups.ids.`<group-id>`.name                     | Group name for a given group ID                   |
| identity.groups.names.`<group-name>`.id                   | Group ID for a given group name                  |

## Working with Policies

Create a token with policy

```bash
vault token create -policy="web-app"
---
Key             Value
---             -----
token           s.***
token_accessor  18r88muoe3x1xEqVqXdlTMwJ
token_duration  768h
token_renewable true
token_policies  ["default", "web-app"]
```

- All tokens inherit the default policy plus assigned policies

Test policy requirements

- Example requirements
  - Read AWS credentials for an S3 bucket (aws/creds/s3-readonly)
  - Read secrets from secret/apikey/Google

```bash
vault token create -policy="web-app"
vault login <token>
vault read secret/apikey/Google          # Should succeed
vault write secret/apikey/Google key="ABCDE12345"  # Should fail
vault read aws/creds/s3-readonly         # Should succeed
```

Administrative policies

- Manage Vault backend functions under the sys/ path
- Examples: Unsealing, policy management, secret backend setup

- Setup
  - Licensing
  - Setup New Vault Cluster
  - Configure UI
  - Rotate Keys
  - Seal Vault

```bash
path "sys/license" {
  capabilities = ["read", "list", "create", "update", "delete"]
}
path "sys/init" {
  capabilities = ["read", "update", "create"]
}
path "sys/config/ui" {
  capabilities = ["read", "list", "update", "delete", "sudo"]
}
path "sys/rekey/*" {
  capabilities = ["read", ##### "list", "update", "delete"]
}
path "sys/rotate" {
  capabilities = ["update", "sudo"]
}
path "sys/seal" {
  capabilities = ["sudo"]
}
```

## Lab

### Working with Vault Policies
