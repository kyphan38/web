# create vault policies

## Vault Policies Overview

## Intro to Vault Policies

How do we determine who should access secrets?

Key features

- Vault policies provide operators a way to permit or deny access to certain paths or actions within Vault (RBAC)
  - Gives us the ability to provide granular control over who gets access to secrets
- Policies are written in declarative statements and can be written using JSON or HCL
- When writing policies, always follow the principal of least privilege
  - In other words, give users/applications only the permissions they need
- Policies are Deny by Default (implicit deny) - therefore you must explicitly grant to paths and related capabilities to Vault clients
  - No policy = no authorizatio
  - Policies support an explicit DENY that takes precedence over any other permission
- Policies are attached to a token. A token can have multiple policies
  - Policies are cumulative and capabilities are additive

Out-of-the-box Vault policies

- root policy is created by default – superuser with all permissions
  - You cannot change nor delete this policy
  - Attached to all root tokens
- default policy is created by default – provides common permissions
  - You can change this policy but it cannot be deleted
  - Attached to all non-root tokens by default (can be removed if needed)

```bash
vault policy list
---
default
root
```

- Default

```bash
vault policy read default
---
# Allow tokens to look up their own properties
path "auth/token/lookup-self" {
capabilities = ["read"]
}
# Allow tokens to renew themselves
path "auth/token/renew-self" {
capabilities = ["update"]
}
# Allow tokens to revoke themselves
path "auth/token/revoke-self" {
capabilities = ["update"]
}
# Allow a token to look up its own capabilities on a path
path "sys/capabilities-self" {
capabilities = ["update"]
}
```

- Root

```bash
vault policy read root
---
No policy named: root
```

The root policy does not contain any rules but can do anything within Vault. It should be used with extreme care

```bash
path "*" {
capabilities = ["read","create","update","delete","list","sudo"]
}
```

## Managing Policies using CLI

Use the vault policy command

- Syntax: `vault <type_of_vault_object> <subcommand> <name_of_policy> <location_of_file>` 

```bash
vault policy list
---
admin-policy
default
root
---

vault policy write admin-policy /tmp/admin.hcl
---
Success! Uploaded policy: admin-policy
---
```

## Managing Policies using UI

Direction: Homepage &rarr; Policies &rarr; Create ACL policy

## Managing Policies using API

Creating a new Vault policy

- Method: POST

```bash
 curl \
--header "X-Vault-Token: s.***" \
--request PUT \
--data @payload.json \
http://127.0.0.1:8200/v1/sys/policy/webapp
```

Payload file

```bash
{
"policy": "path \"kv/apps/webapp\" { capabilities… "
}
```

## Anatomy of a Vault Policy

Everything in Vault is path-based

- Policies grant or forbid access to those paths and operations

```bash
path "<path>" {
capabilities = ["<list of permissions>"]
}
```

```bash
path "<path>" {
capabilities = ["<list of permissions>"]
}
path "<path>" {
capabilities = ["<list of permissions>"]
}
path "<path>" {
capabilities = ["<list of permissions>"]
}
```

```bash
path "kv\data\apps\jenkins" {
capabilities = ["read","update","delete"]
}
path "sys/policies/*" {
capabilities = ["create","update","list","delete"]
}
path "aws/creds/web-app" {
capabilities = ["read"]
}
```

## Vault Policies - Path

Path: ...

- 

Examples of paths:

- sys/policy/vault-admin
- kv/apps/app01/web
- auth/ldap/group/developers
- database/creds/prod-db
- secrets/data/platform/aws/tools/ansible/app01
- sys/rekey

Root-protected paths

- Many paths in Vault require a root token or sudo capability to use
- These paths focus on important/critical paths for Vault or plugins

Examples of root-protected paths

- auth/token/create-orphan (create an orphan token)
- pki/root/sign-self-issued (sign a self-issued certificate)
- sys/rotate (rotate the encryption key)
- sys/seal (manually seal Vault)
- sys/step-down (force the leader to give up active status)

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

Capabilities define what can we do?

- Capabilities are specified as a list of strings (yes, even if there's just one)

Capability HTTP Verb
create POST/PUT
read GET
update POST/PUT
delete DELETE
list LIST

Capability Description
sudo Allows access to paths that are root-protected
deny Disallows access regardless of any other defined 
capabilities

create = if the key does not yet exist
update = if the key exists and you want to replace/update it

(unknown title)

- Create – create a new entry
• Read – read credentials, configurations, etc
• Update – overwrite the existing value of a secret or configuration
• Delete – delete something
• List – view what's there (doesn't allow you to read)
• Sudo – used for root-protected paths
• Deny – deny access – always takes presedence over any other capability

:::note
Write is not a valid capability
:::

Example 1

- Requirement
  - Access to generate database credentials at database/creds/db01
  - Create, Update, Read, and Delete secrets stored at kv/apps/dev-app01

```bash
path "database/creds/dev-db01" {
capabilities = ["read"]
}
path "kv/apps/dev-app01" {
capabilities = ["create", "read", "update", "delete"]
}
```

Example 2

- Requirement
  - Access to read credentials after the path kv/apps/webapp
  - Deny access to kv/apps/webapp/super-secret

```bash
path "kv/apps/webapp/*" {
capabilities = ["read"]
}
path "kv/apps/webapp/super_secret" {
capabilities = ["deny"]
}
```

## Customizing the Path

Using the * to cusomize the path

- The glob (*) is a wildcard and can only be used at the end of a path
- Can be used to signify anything "after" a path or as part of a pattern
- Example
  - secret/apps/application1/* - allows any path after application1
  - kv/platform/db-* - would match kv/platform/db-2 but not kv/platform/db2

Using the + to customize the path

- The plus (+) supports wildcard matching for a single directory in the path
- Can be used in multiple path segments (i.e., secret/+/+/db)
- Examples
   -  • secret/+/db - matches secret/db2/db or secret/app/d
   -  kv/data/apps/+/webapp – matches the following:
      -  kv/data/apps/dev/webapp
      • kv/data/apps/qa/webapp
      • kv/data/apps/prod/webapp 

Example

```bash
path "secret/+/+/webapp" {
capabilities = ["read", "list"]
}
path "secret/apps/+/team-*" {
capabilities = ["create", "read"]
}
```

ACL Teamplting

- Use variable replacement in some policy strings with values available to the token
- Define policy paths containing double curly braces: `{{<parameter>}}`
- Example: Creates a section of the key/value v2 secret engine to a specific user 

```bash
path "secret/data/{{identity.entity.id}}/*" {
capabilities = ["create", "update", "read", "delete"]
}
path "secret/metadata/{{identity.entity.id}}/*" {
capabilities = ["list"]
```

Table

Parameter Description
identity.entity.id The entity's ID
identity.entity.name The entity's name
identity.entity.metadata.<<metadata key>> Metadata associated with the entity for the given key
identity.entity.aliases.<<mount accessor>>.id Entity alias ID for the given mount
identity.entity.aliases.<<mount accessor>>.name Entity alias name for the given mount
identity.entity.aliases.<<mount accessor>>.metadata.<<metadata key>> Metadata associated with the alias for the given mount and metadata key
identity.groups.ids.<<group id>>.name The group name for the given group ID
identity.groups.names.<<group name>>.id The group ID for the given group name
identity.groups.names.<<group id>>.metadata.<<metadata key>> Metadata associated with the group for the given key
identity.groups.names.<<group name>>.metadata.<<metadata key>> Metadata associated with the group for the given key

## Working with Policies

Create a new token with "web-app" policy attached

```bash
vault token create -policy="web-app"
Key Value
--- -----
token s.7uBlZwXSxOg31uGXIUetEdXD
token_accessor 18r88muoe3x1xEqVqXdlTMwJ
token_duration 768h
token_renewable true
token_policies ["default" "web-app"]
identity_policies []
token_policies [default web-app]
```

- Every token gets the default policy plus the assigned policy or policies

Test to make sure the policy fulfills the requirements

- Example requirements
  - Clients must be able to request AWS credential granting read access to a S3 bucket
  - Read secrets from secret/apikey/Google

```bash
vault token create -policy="web-app"
# Authenticate with the newly generated token
vault login <token>
# Make sure that the token can read
vault read secret/apikey/Google
# This should fail
vault write secret/apikey/Google key="ABCDE12345"
# Request a new AWS credentials 
vault read aws/creds/s3-readonly
```

Administrative policies

- Permissions for Vault backend functions live at the sys/ path
- Users/admins will need policies that define what they can do within Vault to administer Vault itself
  - Unsealing
  - Changing policies
  - Adding secret backends
  - Configuring database configurations

(Unknown title)

- Licensing
- Setup New Vault Cluster
- Configure UI
- Rotate Keys
- Seal Vault

```bash
# Configure License
path "sys/license" {
capabilities = ["read", "list", "create", "update", "delete"]
}
# Initialize Vault
path "sys/init" {
capabilities = ["read", "update", "create"]
}
# Configure UI in Vault
path "sys/config/ui" {
capabilities = ["read", "list", "update", "delete", "sudo"]
}
# Allow rekey of unseal keys for Vault
path "sys/rekey/*" {
capabilities = ["read", "list", "update", "delete"]
}
# Allows rotation of master key
path "sys/rotate" {
capabilities = ["update", "sudo"]
}
# Allows Vault seal
path "sys/seal" {
capabilities = ["sudo"]
}
```

## Lab

### Working with Vault Policies
