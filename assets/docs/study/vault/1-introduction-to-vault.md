# introduction to vault

## What is Vault?

Hashicorp offers all open-source

- Included enterprise version: Terraform, vault, Consul, and Nomad
- Open-source only: Boundary, Packer, Vagrant, and Waypoint

What?

- Manage secrets and protect sensitive data
- Provides a single source of secrets for both humans and machines
- Provides complete lifecycle management for secrets
  - Eliminates secret sprawl
  - Securely store any secret
  - Provide governance for access to secrets
- Secrets?
  - Anything your org deems sensitive
    - Usernames and passwords
    - Certificates
    - API keys
    - Encryption keys

## How Vault works?

Vault interfaces

- CLI (machines or humans)
- API (machines)
- UI (humans)

Token generation

- A human user authenticates with Vault using username and password, RoleID and SecretID, TLS certificate, integrated cloud credentials
- Vault generates a token
  - Has a defined TTL (Time To Live) (valid for a specific number of hours)
  - Is scoped to specific Vault paths with associated capabilities (read/write/delete/list)

Token usage

- The application presents a token to Vault and requests data from a specific path (e.g., kv/apps/secret)
- Vault validates the token
  - Is the token valid?
  - Has the token expired?
  - Does the token have permission to access the requested path?
- If validation succeeds, Vault returns the requested data
  - username: abc
  - password: abc123
- The application presents the token, it does not need to re-authenticate after the token is issued

## Why organizations choose Vault?

Organizations typically manage multiple identity providers (IDPs) across environments:

- On-premises: Active Directory
- AWS: AWS IAM
- Azure: Azure Active Directory (Azure AD)
- GCP: Google Cloud IAM

Drawbacks of this multi-IDP setup

- Fragmented authentication mechanisms
- Increased complexity in access control
- No unified source of truth for identity and access management
- Difficulty in scaling secure practices across hybrid or multi-cloud environments

Vault solves these problem

- Applications running in on-premises, AWS, Azure, and GCP environments can authenticate directly with Vault
- On the backend, Vault integrates seamlessly with identity providers like: Active Directory, AWS IAM, Auzre AD, Google Cloud IAM
- Vault becomes the single source of truth for authentication, policy enforcement, and access control across all environments and identity systems

## Benefits and use cases Vault

Benefits

- Store long-lived, static secrets
- Dynamically generate secrets, upon request
- Fully-featured API
- Identity-based access control across clouds and systems
- Provide encryption as a service
- Act as a root or intermediate certificate authority

Use cases

- Centralize the storage of secrets
- Migrate to dynamically generated secrets
- Secure data with a centralized workflow for encryption operations
- Automate the generation of X.509 certificates
- Migrate to identity-based access

Use case 1: Storage of secrets

- Consolidate the storage of secrets across your organization into a unified platform.
- Systems like Chef (data bags), Jenkins (credentials), AWS Secrets Manager, and Azure Key Vault can retrieve secrets from Vault

Use case 2: Migrate to dynamic credentials

- Static credential (not recommended)
  - Always validate 24/7/365
  - Long-lived
  - Require manual rotation
  - Often reused across systems
  - Risk of being hardcoded into source code or repositories
  - Frequently overprivileged
  - Typically created and managed manually
- Dynamic credentials (recommended)
  - Short-lived by design
  - Enforce the principle of least privilege
  - Automatically revoked after lease expiration
  - Each system receives unique credentials
  - Retrieved programmatically
  - No human interaction required

Use case 3: Encryption data

- Vault enables centralized encryption workflows for both data at rest and in transit.
- Example: When multiple applications with different backends need access to a database, Vault can handle the encryption and key management centrally, regardless of the application design

Use case 4: Automate X.209 certificates

- Before Vault
  - Manually generate a CSR (Certificate Signing Request)
  - Submit a ticket to the security or PKI team
  - Wait for the CA to sign and return the certificate
  - Retrieve and upload the certificate and private key manually
  - Repeat the process for renewals
- With Vault
  - Applications integrate directly with Vault using the PKI secrets engine
  - They can automatically request certificates, and Vault returns the certificate and private key on demand
  - No manual intervention required
  - Renewal is also automated

Use case 5: Migrate to identity-based access

- Traditional method
  - Applications authenticate to Vault using IP address, username, and password
  - Requires opening firewalls, managing static credentials, and manual provisioning
- With identity-based access
  - Applications authenticate using trusted identities (e.g., IAM roles, Service Accounts)
  - Vault validates these credentials against trusted IDPs like AWS, Azure, or GCP
  - Upon successful validation, Vault issues a token with access to defined paths
  - No need to manage static secrets or IP-based firewall rules

## Comparing versions of Vault

Open source

- Includes
  - Incredible number of features and integrations
  - Local high-availability by way of clustering
  - Almost all secrets engines and auth methods
  - Can easily integrate with any application using a fully-featured API
- Does not include
  - No Replication capabilities - single datacenter/cloud deployment
  - Does not include access to Enterprise integrations (MFA, HSM, Automated Backups)
  - Limited scalability
  - Automated Backups, etc.

Enterprise

- Includes
  - Access to all features and functions Vault offers
  - Replication capabilities to other Vault clusters across datacenters/clouds
  - All secrets engines and auth methods
  - Can easily integrate with any application using a fully-featured API
  - Namespaces for multi-tenancy solution
  - Policy as Code using Sentinel
  - Easily scale local reads using performance standbys
  - Access to the Raft/Consul snapshot agent for automated disaster recovery solution
- Does not include:
  - Self-managed - not hosted or managed by HashiCorp

HashiCorp Cloud Platform (HCP)

- Includes
  - All features of Vault enterprise
  - Fully-managed solution
  - Click button deployment
  - HashiCorp team of Vault experts manages and upgrades your cluster(s)
