# ssh setup

## SSH Authentication

Access remote systems without passwords

- Public key on remote server
- Private key on local machine
- SSH verifies via cryptography

Tools: `ssh, ssh-keygen`

Keys: `.pub` (public), `.pem` (private)

### Step 1: Generate Key (Local)

Execute the following command

```bash
ssh-keygen -t rsa -b 4096 -f ~/.ssh/server-ssh
# Generates: server-ssh (private), server-ssh.pub (public)
```

### Step 2: Copy Public Key (Remote)

Append to `~/.ssh/authorized_keys` on remote

```bash
vim ~/.ssh/authorized_keys  # Paste public key
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh
```

### Step 3: Login (Local)

```bash
ssh -i ~/.ssh/server-ssh username@remote.server
```
