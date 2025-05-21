# aws accounts

## Basics

![img](./img/1.png)

## How to Create an Account

Two root accounts

![img](./img/2.png)

Create multiple accounts

- All unique emails, no pre-setup required

```bash
catguy@gmail.com
---
cayguy+AWSAccount1@gmail.com
cayguy+AWSAccount2@gmail.com
cayguy+AWSAccount3@gmail.com
```

## How to Setup MFA

We only usernames and passwords - if leaked, anyone can be you!

Factors - different pieces of evidence which prove identity

- Knowledge - Something you know, usernames, passwords
- Possession - Something you have, bank card, MFA device/app
- Inherent - Something you are, fingerprint, face, voice, or iris
- Location - A location (physical), which network (corp or wifi)

More factors means more security and harder to fake

- But we should balance between convenience and security

![img](./img/3.png)

![img](./img/4.png)

## How to Create a Budget

Billing Dashboards &rarr; Billing Preferences

Billing Dashboards &rarr; Budgets &rarr; Create a budget

## DIY - How to Create a Production Account

Steps

- New email for the Production AWS Account
  - Remember the Gmail "+" trick
- Create the Production AWS Account
  - Same as the General account but - Production
- Add MFA to account root user (and test)
- Add a budget to Production Account (remember the checkboxes)
- Enable IAM user and role access to billing
- Add account contacts
