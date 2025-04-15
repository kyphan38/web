# implement ssh

## SSH Authentication

Securely access a remote system without typing passwords

- You put your public key on the remote server
- You keep your private key on your machine
- When connecting, SSH uses cryptography to verify you have the private key

Common tools: `ssh`, `ssh-keygen`

Key formats: `.pub` (public), `.pem` (private)

### Steps 1: Generate SSH Key on Local Machine

Execute the following command

```bash
ssh-keygen -t rsa -b 4096 -f ~/.ssh/server-ssh
---
server-ssh (private key)  server-ssh.pub (public key)
```

### Step 2: Copy Public Key to Remote Server

Append public key to `~/.ssh/authorized_keys` in remote server

```bash
vim ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh
```

### Step 3: SSH Login From Local Machine

Now, you should be logged in without entering your password

```bash
ssh username@your.remote.server
```
