# bash script global

## Context

Sometimes, you want to create a custom bash script and be able to run it from any location in the terminal just like a regular command

To do this, you can place your script in a directory that is part of the system's `$PATH`. One command and safe choice is `/usr/local/bin`

## What Is $PATH?

Environment variable listing directories for executables

```bash
echo $PATH
---
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
```

Each path is separated by a `:`. When you run a command (like `getDataaseName.sh`), the shell searches paths sequentially for commands.

By placing your script in `/usr/local/bin/`, which is already in `$PATH`, your script becomes globally accessible

### Append New Directory to $PATH

Add to `~/.bashrc`

```bash
export PATH="$PATH:~/bin"
```

Then

```bash
source ~/.bashrc
```

## Solution

### Step 1: Create Script

Navigate to `/usr/local/bin/`

```bash
cd /usr/local/bin
sudo vim getDataBaseName.sh
```

Content

```bash
#!/bin/bash

echo "Database name is Andy"
```

Make the script executable

```bash
sudo chmod +x ./getDatabaseName.sh
```

### Step 2: Run Anywhere

Now, you can run script from any folder

```bash
getDatabaseName.sh
```
