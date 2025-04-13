"use strict";(self.webpackChunkkyphan=self.webpackChunkkyphan||[]).push([[9586],{5699:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"growth/vault/compare-authentication-methods","title":"compare authentication methods","description":"Intro to Auth Methods","source":"@site/assets/docs/growth/vault/4-compare-authentication-methods.md","sourceDirName":"growth/vault","slug":"/growth/vault/compare-authentication-methods","permalink":"/growth/vault/compare-authentication-methods","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1744513797000,"sidebarPosition":4,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"install vault","permalink":"/growth/vault/install-vault"},"next":{"title":"create vault policies","permalink":"/growth/vault/create-vault-policies"}}');var a=t(4848),s=t(8453);const l={},r="compare authentication methods",o={},h=[{value:"Intro to Auth Methods",id:"intro-to-auth-methods",level:2},{value:"Working With Auth Methods",id:"working-with-auth-methods",level:2},{value:"Configuring Auth Methods Using CLI",id:"configuring-auth-methods-using-cli",level:2},{value:"Configuring Auth Methods Using API",id:"configuring-auth-methods-using-api",level:2},{value:"Vault Authentication Using CLI",id:"vault-authentication-using-cli",level:2},{value:"Vault Authentication Using API",id:"vault-authentication-using-api",level:2},{value:"Vault Entities",id:"vault-entities",level:2},{value:"Vault Identity Groups",id:"vault-identity-groups",level:2},{value:"Choosing an Auth Method",id:"choosing-an-auth-method",level:2},{value:"Differentiate Human vs System Auth Methods",id:"differentiate-human-vs-system-auth-methods",level:2},{value:"Demo",id:"demo",level:2},{value:"Configuring Auth Methods Using CLI",id:"configuring-auth-methods-using-cli-1",level:3},{value:"Configuring Auth Methods Using API",id:"configuring-auth-methods-using-api-1",level:3},{value:"Configuring Auth Methods Using UI",id:"configuring-auth-methods-using-ui",level:3},{value:"Vault Authentication Using CLI",id:"vault-authentication-using-cli-1",level:3},{value:"Vault Authentication Using API",id:"vault-authentication-using-api-1",level:3},{value:"Vault Authentication Using UI",id:"vault-authentication-using-ui",level:3},{value:"AppRole Auth Method",id:"approle-auth-method",level:3},{value:"Okta Auth Method",id:"okta-auth-method",level:3},{value:"UserPass Auth Method",id:"userpass-auth-method",level:3},{value:"Lab",id:"lab",level:2},{value:"Working With Auth Methods - Later",id:"working-with-auth-methods---later",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"compare-authentication-methods",children:"compare authentication methods"})}),"\n",(0,a.jsx)(n.h2,{id:"intro-to-auth-methods",children:"Intro to Auth Methods"}),"\n",(0,a.jsx)(n.p,{children:"Key features"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Performing authentication and managing identities"}),"\n",(0,a.jsx)(n.li,{children:"Assigning identities and associated policies to users"}),"\n",(0,a.jsxs)(n.li,{children:["Supporting multiple methods tailored to specific use cases","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Human-oriented: e.g., LDAP, OIDC"}),"\n",(0,a.jsx)(n.li,{children:"System-oriented: e.g., AppRole, AWS"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Once authenticated, Vault issues a client token used for all subsequent requests (e.g., read/write operations)","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The primary goal of all authentication methods is to obtain a token"}),"\n",(0,a.jsx)(n.li,{children:"Each token is linked to one or more policies and has a time-to-live (TTL)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Tokens in Vault"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Tokens are the core authentication mechanism in Vault","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Most Vault operations require a valid token"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["The token auth method creates and manages tokens","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Enabled by default and cannot be disabled"}),"\n",(0,a.jsx)(n.li,{children:"External authentication (e.g., LDAP, OIDC) generates a Vault token"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"If a token is not provided for non-authentication requests, Vault returns a 403 Access Denied error without redirects or hints"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Workflow"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"img",src:t(3953).A+"",width:"1092",height:"533"})}),"\n",(0,a.jsx)(n.h2,{id:"working-with-auth-methods",children:"Working With Auth Methods"}),"\n",(0,a.jsx)(n.p,{children:"Key features"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Most auth methods must be explicitly enabled before use"}),"\n",(0,a.jsx)(n.li,{children:"Multiple auth methods can coexist, often serving distinct purposes (e.g., applications vshuman users)"}),"\n",(0,a.jsxs)(n.li,{children:["The token auth method is always enabled","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"A new Vault deployment relies on a root token for initial authentication"}),"\n",(0,a.jsx)(n.li,{children:"It cannot be disabled or replaced as the sole method in a fresh setup"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Auth methods can be enabled, disabled, or configured via"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Vault UI (limited functionality compared to CLI/API)"}),"\n",(0,a.jsx)(n.li,{children:"Vault API"}),"\n",(0,a.jsx)(n.li,{children:"Vault CLI"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Requirement"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"A valid token with sufficient privileges is needed to manage auth methods"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Path configuration"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Each auth method is enabled at a specific path","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Custom paths can be set when enabling the method (only at creation)"}),"\n",(0,a.jsx)(n.li,{children:"If unspecified, the default path matches the method type (e.g., aws for AWS, approle for AppRole)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"vault auth enable approle\n---\nSuccess! Enabled approle auth method at: approle/\n"})}),"\n",(0,a.jsx)(n.h2,{id:"configuring-auth-methods-using-cli",children:"Configuring Auth Methods Using CLI"}),"\n",(0,a.jsx)(n.p,{children:"Use the vault auth comamnd"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"enable"}),"\n",(0,a.jsx)(n.li,{children:"disable"}),"\n",(0,a.jsx)(n.li,{children:"list"}),"\n",(0,a.jsx)(n.li,{children:"tune"}),"\n",(0,a.jsx)(n.li,{children:"help"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"CLI commands for authentication"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Enabling and disabling auth methods"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"vault auth enable approle\n---\nSuccess! Enabled approle auth method at: approle/\n\nvault auth disable approle\n---\nSuccess! Disabled the auth method (if it existed) at: approle/\n\nvault auth list\n---\nPath           Type      Accessor             Description\n----           ----      --------             -----------\nkyphan/         approle   auth_approle_d8c20abe n/a\ntoken/         token     auth_token_89ce3371  token-based credentials\nvault-course/  approle   auth_approle_b3f0c92d n/a\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Custom paths and descriptions","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Enable","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Syntax: ",(0,a.jsx)(n.code,{children:"vault <object_type> <subcommand> <customize> <description> <method_type>"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Disable","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Syntax: ",(0,a.jsx)(n.code,{children:"vault <object_type> <subcommand> <object_path>"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'vault auth enable approle\n---\nSuccess! Enabled approle auth method at: approle/\n\nvault auth enable -path=vault-course approle\n---\nSuccess! Enabled approle auth method at: vault-course/\n\nvault auth enable -path=apps -description="MyApps" approle\n\nvault auth disable apps\n'})}),"\n",(0,a.jsx)(n.p,{children:"Configuring auth methods"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Syntax: ",(0,a.jsx)(n.code,{children:"vault write auth/<path_name>/<option>"})]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"vault write auth/approle/role/vault-course \\\n  secret_id_ttl=10m \\\n  token_num_uses=10 \\\n  token_ttl=20m \\\n  token_max_ttl=30m \\\n  secret_id_num_uses=40\n"})}),"\n",(0,a.jsx)(n.h2,{id:"configuring-auth-methods-using-api",children:"Configuring Auth Methods Using API"}),"\n",(0,a.jsx)(n.p,{children:"Vault provides a fully-featured API designed for machine-to-machine interaction"}),"\n",(0,a.jsx)(n.p,{children:"Critical components of an API request that need to be included"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Request Type: GET, POST, or DELETE"}),"\n",(0,a.jsx)(n.li,{children:"Headers: Appropriate headers such as X-Vault-Token, Authorization, or X-Vault-Namespace"}),"\n",(0,a.jsx)(n.li,{children:"Data: Included if required by the request"}),"\n",(0,a.jsx)(n.li,{children:"API Endpoint: Specifies the Vault component being interacted with"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"HTTP API: When is a token required?"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Using an Auth Method: When authenticating to Vault via the API, a token is not required because authentication generates a new token"}),"\n",(0,a.jsx)(n.li,{children:"Configuring an Auth Method: When enabling, configuring, or disabling an authentication method, a token with appropriate permissions must be provided"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Enabling an authentication method"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Method: POST"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl \\\n  --header "X-Vault-Token: hvs.2kjqZ12ofDr3efPdtMJ1z5dZ" \\\n  --request POST \\\n  --data \'{"type": "approle"}\' \\  # Can reference a file, e.g., --data @data.json\n  https://vault.example.com:8200/v1/sys/auth/approle  # API endpoint\n'})}),"\n",(0,a.jsx)(n.h2,{id:"vault-authentication-using-cli",children:"Vault Authentication Using CLI"}),"\n",(0,a.jsx)(n.p,{children:"Vault offers several ways to authenticate via the command-line interface (CLI)"}),"\n",(0,a.jsx)(n.p,{children:"Using the vault login command"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Authenticate using a token or another authentication method"}),"\n",(0,a.jsx)(n.li,{children:"Utilizes a token helper to store the token"}),"\n",(0,a.jsxs)(n.li,{children:["Syntax: ",(0,a.jsx)(n.code,{children:"vault login -method=<method_type> <argument>"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Example: Token-based authentication"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'vault login <hvs.2kjqZ12ofDr3efPdtMJ1z5dZ>\n---\nSuccess! You are now authenticated. The token information displayed below is\nalready stored in the token helper. You do NOT need to run "vault login" again\nFuture Vault requests will automatically use this token\n\nKey                  Value\n---                  -----\ntoken                hvs.2kjqZ12ofDr3efPdtMJ1z5dZ\ntoken_accessor       502YCRmp1SfZ8YCdfbYeS9fj\ntoken_duration       \u221e\ntoken_renewable      false\ntoken_policies       ["root"]\nidentity_policies    []\npolicies             ["root"]\n'})}),"\n",(0,a.jsx)(n.p,{children:"Example: Userpass authentication"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'vault login -method=userpass username=kyphan\n---\nPassword (will be hidden)\nSuccess! You are now authenticated. The token information displayed below\nis already stored in the token helper. You do NOT need to run "vault login"\nagain. Future Vault requests will automatically use this token\n\nKey                  Value\n---                  -----\ntoken                hvs.2kjqZ12ofDr3efPdtMJ1z5dZ\ntoken_accessor       SpiJi6bghz4huS8MG4HsLmNp\ntoken_duration       768h\ntoken_renewable      true\ntoken_policies       ["admin", "default"]\nidentity_policies    []\npolicies             ["admin", "default"]\ntoken_meta_username  kyphan\n'})}),"\n",(0,a.jsx)(n.p,{children:"Use the VAULT_TOKEN environment variable"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Use this method if you already have a token"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Token Helper"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"img",src:t(2470).A+"",width:"1517",height:"791"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Caches the token after authentication and stores it in a local file - ",(0,a.jsx)(n.code,{children:".vault-token"})," for use in subsequent requests"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Parsing the JSON response to obtain the Vault token"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'export VAULT_ADDR="https://vault.example.com:8200"\n\nexport VAULT_FORMAT=json\n\nOUTPUT=$(vault write auth/approle/login role_id="12345657" secret_id="1nv84nd3821s")\n\nVAULT_TOKEN=$(echo "$OUTPUT" | jq \'.auth.client_token\' -j)\n\nvault login "$VAULT_TOKEN"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"vault-authentication-using-api",children:"Vault Authentication Using API"}),"\n",(0,a.jsx)(n.p,{children:"Authentication requests to the Vault HTTP API return a JSON response that include"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The token"}),"\n",(0,a.jsx)(n.li,{children:"The token accessor"}),"\n",(0,a.jsx)(n.li,{children:"Information about attached policies"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Users must parse the response to extract the token and use it for subsequent Vault requests"}),"\n",(0,a.jsx)(n.p,{children:"Authenticating with an authentication method"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Data: role_id, secret_id, etc."}),"\n",(0,a.jsx)(n.li,{children:"Method: POST"}),"\n",(0,a.jsx)(n.li,{children:"Response: JSON"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl \\\n  --request POST \\\n  --data @auth.json \\\n  https://vault.example.com:8200/v1/auth/approle/login\n---\n{\n  "request_id": "0f874bea-16a6-c3da-8f20-1f2ef9cb5d22",\n  "lease_id": "",\n  "renewable": false,\n  "lease_duration": 0,\n  "data": null,\n  "wrap_info": null,\n  "warnings": null,\n  "auth": {\n    "client_token": "hvs.wjkffdrqM9QYTOYrUnUxXyX6",\n    "accessor": "Hbhmd3OfVTXnukBv7WxMrWld",\n    "policies": ["admin", "default"],\n    "metadata": {}\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"vault-entities",children:"Vault Entities"}),"\n",(0,a.jsx)(n.p,{children:"Key features"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Vault creates an entity and attaches an alias to it if a corresponding entity does not already exist","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"This is managed through the identity secrets engine, which oversees internal identities recognized by Vault"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"An entity represents a single person or system that logs into Vault. Each entity has a unique identifier and consists of zero or more aliases"}),"\n",(0,a.jsx)(n.li,{children:"An alias is a combination of an authentication method and an identifier. It serves as a mapping between an entity and one or more authentication methods"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"alt text",src:t(559).A+"",width:"1076",height:"482"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"alt text",src:t(415).A+"",width:"1101",height:"512"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Entities can be manually created to consolidate multiple aliases for a single user, enabling more efficient authorization management"}),"\n",(0,a.jsx)(n.li,{children:"Tokens created for an entity inherit the capabilities granted by its associated alias(es)"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"alt text",src:t(8870).A+"",width:"1058",height:"489"})}),"\n",(0,a.jsx)(n.p,{children:"Workflow"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"alt text",src:t(77).A+"",width:"1212",height:"647"})}),"\n",(0,a.jsx)(n.h2,{id:"vault-identity-groups",children:"Vault Identity Groups"}),"\n",(0,a.jsx)(n.p,{children:"Key features"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"A group can include multiple entities as its members"}),"\n",(0,a.jsx)(n.li,{children:"A group can also contain subgroups"}),"\n",(0,a.jsx)(n.li,{children:"Policies applied to a group grant permissions to all its members"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"alt text",src:t(8948).A+"",width:"597",height:"301"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"alt text",src:t(8859).A+"",width:"878",height:"440"})}),"\n",(0,a.jsx)(n.p,{children:"Types of groups"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Internal group","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Groups created within Vault to organize entities and propagate identical  permissions"}),"\n",(0,a.jsx)(n.li,{children:"Created manually"}),"\n",(0,a.jsx)(n.li,{children:"Simplify permission management for entities"}),"\n",(0,a.jsxs)(n.li,{children:["They are commonly used with Vault Namespaces to propagate permissions to child namespaces","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"This is particularly useful when you want to avoid configuring identical authentication methods for every namespace"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"alt text",src:t(8354).A+"",width:"677",height:"228"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["External group","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Groups that Vault infers and creates based on group associations from authentication methods"}),"\n",(0,a.jsx)(n.li,{children:"Created manually or automatically"}),"\n",(0,a.jsx)(n.li,{children:"External groups allow permissions to be set based on group membership from an external identity provider, such as LDAP, Okta, or an OIDC provider"}),"\n",(0,a.jsxs)(n.li,{children:["This enables a one-time setup in Vault, with ongoing permission management handled in the identity provider","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Note: The group name in Vault must match the group name in the identity provider"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"alt text",src:t(1289).A+"",width:"735",height:"228"})}),"\n",(0,a.jsx)(n.h2,{id:"choosing-an-auth-method",children:"Choosing an Auth Method"}),"\n",(0,a.jsx)(n.p,{children:"When selecting an authentication method, consider the following key factors and their implications"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Frequently rotated","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Typically refers to dynamic credentials that are regularly updated"}),"\n",(0,a.jsx)(n.li,{children:"Meets the requirements: AWS, LDAP, Azure, GCP (Google Cloud Platform), Kubernetes (K8s)"}),"\n",(0,a.jsx)(n.li,{children:"Does not meet the requirements: Userpass, TLS Certificates, AppRole"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Remove secrets from process or build pipeline","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Generally indicates the use of dynamic or integrated credentials to eliminate hardcoded secrets"}),"\n",(0,a.jsx)(n.li,{children:"Meets the requirements: AWS, Azure, GCP (Google Cloud Platform), Kubernetes (K8s)"}),"\n",(0,a.jsx)(n.li,{children:"Does not meet the requirements: Userpass, LDAP"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Use existing user credentials","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Typically means integrating with an existing identity provider to leverage current user credentials"}),"\n",(0,a.jsx)(n.li,{children:"Meets the Requirement: OIDC (OpenID Connect), LDAP, Okta, GitHub"}),"\n",(0,a.jsx)(n.li,{children:"Does not meet the requirements: Userpass, AWS, Azure, GCP (Google Cloud Platform)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"differentiate-human-vs-system-auth-methods",children:"Differentiate Human vs System Auth Methods"}),"\n",(0,a.jsx)(n.p,{children:"Vault supports a wide variety of authentication methods, which can be broadly categorized into those designed for human-based authentication and those intended for machine-to-machine (system-based) authentication"}),"\n",(0,a.jsx)(n.p,{children:"Human-based auth methods"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Integrates with an existing identity provider"}),"\n",(0,a.jsx)(n.li,{children:"Requires a hands-on approach to use"}),"\n",(0,a.jsx)(n.li,{children:"Involves logging in via a prompt or pop-up"}),"\n",(0,a.jsx)(n.li,{children:"Often configured with the platform's integrated multi-factor authentication (MFA)"}),"\n",(0,a.jsx)(n.li,{children:"Example: GitHub, JWT/OIDC, Okta, RADIUS, Userpass"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"System-based auth emthods"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Utilizes methodologies that are not human-friendly (e.g., difficult-to-remember credentials)"}),"\n",(0,a.jsx)(n.li,{children:"Typically integrates with an existing backend platform"}),"\n",(0,a.jsx)(n.li,{children:"Vault validates credentials directly with the platform"}),"\n",(0,a.jsx)(n.li,{children:"Example: AWS, Tokens, Cloud Foundry, TLS Certificates, Kerberos, Microsoft Azure, AppRole, Oracle Cloud, GCP (Google Cloud Platform), Alibaba Cloud, Kubernetes (K8s)"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"demo",children:"Demo"}),"\n",(0,a.jsx)(n.h3,{id:"configuring-auth-methods-using-cli-1",children:"Configuring Auth Methods Using CLI"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'vault auth -h\n\nvault auth enable userpass\n\nvault auth list\n\nvault auth enable -path=vault-course userpass\n\nvault auth list\n\nvault auth disable userpass\n\nvault auth list\n\nvault disable vault-course\n\nvault auth enable -path=kyphan -description="local credentials for Vault" userpass\n\nvault auth list\n\nvault auth tune -default-lease-ttl=24h kyphan/\n\nvault write auth/kyphan/users/andy password=vault policies=kyphan\n\nvault list auth/kyphan/users/andy\n\nvault read auth/kyphan/users/andy\n\nvault auth enable approle\n\nvault write auth/approle/role/kyphan token_ttl=20m policies=kyphan\n'})}),"\n",(0,a.jsx)(n.h3,{id:"configuring-auth-methods-using-api-1",children:"Configuring Auth Methods Using API"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl \\\n  --header "X-Vault-Token: hvs.2kjqZ12ofDr3efPdtMJ1z5dZ" \\\n  --request POST \\\n  --data @auth.json \\\n  http://127.0.0.1:8200/v1/sys/auth/approle\n\nvault auth list\n\ncurl \\\n  --header "X-Vault-Token: hvs.2kjqZ12ofDr3efPdtMJ1z5dZ" \\\n  --request POST \\\n  --data @policies.json \\\n  http://127.0.0.1:8200/v1/auth/approle/role/vaultcourse\n\ncurl \\\n  --header "X-Vault-Token: hvs.2kjqZ12ofDr3efPdtMJ1z5dZ" \\\n  http://127.0.0.1:8200/v1/auth/approle/role/vaultcourse/role-id | jq\n\ncurl \\\n  --header "X-Vault-Token: hvs.2kjqZ12ofDr3efPdtMJ1z5dZ" \\\n  -- request POST \\\n  http://127.0.0.1:8200/v1/auth/approle/role/vaultcourse/secret-id | jq\n'})}),"\n",(0,a.jsx)(n.h3,{id:"configuring-auth-methods-using-ui",children:"Configuring Auth Methods Using UI"}),"\n",(0,a.jsx)(n.p,{children:"Directions: Homepage \u2192 Access \u2192 Enable new method"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"vault login -method=username username=kyphan password=kp123\n"})}),"\n",(0,a.jsx)(n.h3,{id:"vault-authentication-using-cli-1",children:"Vault Authentication Using CLI"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"vault login -method=okta username=kyphan@gmail.com password=kp123\n\nvault auth enable aws\n\nvault auth disable aws\n\nvault policy list\n\nvault write auth/approle/roles/login role_id=asd123 secret_id=qwe123\n\nvault login -method=userpass username=kyphan password=kp123\n"})}),"\n",(0,a.jsx)(n.h3,{id:"vault-authentication-using-api-1",children:"Vault Authentication Using API"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl \\\n  --request POST \\\n  --data @password.json \\\n  http://1270.0.0.1:8200/v1/auth/okta/login/kyphan@andy.io | jq\n\ncurl \\\n  --header "X-Vault-Token: hvs.2kjqZ12ofDr3efPdtMJ1z5dZ" \\\n  http://127.0.0.1:8200/v1/secret/data/app01 | jq\n'})}),"\n",(0,a.jsx)(n.h3,{id:"vault-authentication-using-ui",children:"Vault Authentication Using UI"}),"\n",(0,a.jsx)(n.p,{children:"Directions: Homepage \u2192 Profile"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"vault login <token>\n\nexport VAULT_TOKEN=hvs.2kjqZ12ofDr3efPdtMJ1z5dZ\n"})}),"\n",(0,a.jsx)(n.h3,{id:"approle-auth-method",children:"AppRole Auth Method"}),"\n",(0,a.jsx)(n.p,{children:"Setup"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"vault auth list\n\nvault auth enable approle\n\nvault write auth/approle/role/kyphan pocilies=kyphan token_ttl=20m\n\nvault list auth/approle/role\n\nvault read auth/approle/role/kyphan/role-id\n\nvault write -f auth/approle/role/kyphan/secret-id\n"})}),"\n",(0,a.jsx)(n.p,{children:"Login"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"vault write auth/approle/login role_id=<role_id> secret_id=<secret_id>\n"})}),"\n",(0,a.jsx)(n.h3,{id:"okta-auth-method",children:"Okta Auth Method"}),"\n",(0,a.jsx)(n.p,{children:"Setup"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Directions: Homepage \u2192 Security \u2192 API \u2192 Tokens \u2192 Create Token"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'vault auth enable okta\n\nvault auth list\n\nvault write auth/okta/config base_url="okta.com" org_name="kyphan" api_token="<token>"\n\nvault read auth/okta/config\n\nvault write auth/okta/users/andy@kyphan.io policies=kyphan\n'})}),"\n",(0,a.jsx)(n.p,{children:"Login via UI"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Method: Okta"}),"\n",(0,a.jsxs)(n.li,{children:["Username: ",(0,a.jsx)(n.code,{children:"<andy@kyphan.io>"})]}),"\n",(0,a.jsxs)(n.li,{children:["Password: ",(0,a.jsx)(n.code,{children:"<okta_password>"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Login via CLI"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"vault login -method=okta username=andy@kyphan.io\n"})}),"\n",(0,a.jsx)(n.h3,{id:"userpass-auth-method",children:"UserPass Auth Method"}),"\n",(0,a.jsx)(n.p,{children:"Setup"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"vault auth list\n\nvault auth enable userpass\n\nvault write auth/userpass/users/kyphan password=kp policies=kyphan\n\nvault write auth/userpass/users/kyphann password=kpp policies=kyphan\n\nvault list auth/userpass/users\n\nvault read auth/userpass/users/kyphan\n"})}),"\n",(0,a.jsx)(n.p,{children:"Login"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"vault login -method=userpass username=kyphan password=kp\n\nvault login -method=userpass username=kyphann password=kpp\n"})}),"\n",(0,a.jsx)(n.h2,{id:"lab",children:"Lab"}),"\n",(0,a.jsx)(n.h3,{id:"working-with-auth-methods---later",children:"Working With Auth Methods - Later"})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},3953:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/17-f8ff2d8ca88aab731a2713cdd69f5f08.png"},2470:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/18-6d37240e2b53b2a63812ff80ca8e895a.png"},559:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/19-d6fdc0516a46ebca387a063fbd746065.png"},415:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/20-1141bde0136a3677ece7af4b0dda35b1.png"},8870:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/21-af1836a19ee6dfa53e8b46924cdeecc9.png"},77:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/22-8845bd75c7a7f24621481219e34a291f.png"},8948:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/23-587ab7b0a1086073d305a0114e040421.png"},8859:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/24-2642d64f807d2eec8eafc05c4ef1c2b2.png"},8354:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/25-e17ba6ce5877af366f3a9a1e1ea2ce51.png"},1289:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/26-6d14e851c8287bde05a7866dd8646c85.png"},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var i=t(6540);const a={},s=i.createContext(a);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);