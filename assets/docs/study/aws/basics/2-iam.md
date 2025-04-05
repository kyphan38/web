# iam

## Basics

Problem

![img](./img/5.png)

Solution

- IAM has the same level of permissions and authorization as the root user in the account

![img](./img/6.png)

![img](./img/7.png)

Three main jobs

![img](./img/8.png)

Key features

- No cost
- Global service / Global resilience
- Allow or deny its identities on its AWS account
- No direct control on external accounts or users
- Identity federation and MFA
  - Use Facebook, Twitter, Google, etc. to access AWS resources

## Demo - General Account

Root account

- Account alias
  - Used for sign-in URL
  - Create &rarr; Fill in "Preferred alias"
- Users
  - User &rarr; Add users
    - Username
    - Credential type
    - Set permissions

IAM account

- Login
  - Account ID or account alias
  - IAM user name
  - Password
- Setup MFA

## Demo - Production Account

Same to general account
