# implement a bash script from anywhere

## Context

Sometimes, you want to create a custom bash script and be able to run it from any location in the terminal just like a regular command

To do this, you can place your script in a directory that is part of the system's `$PATH`. One command and safe choice is `/usr/local/bin`

## What is $PATH?

It is an environment variable that tells the shells where to look for executables (like programs, tools, and scripts) when you run a command

```bash
echo $PATH
---
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
```

Each path is separated by a `:`. When you run a command (like `getDatabaseName.sh`), the shell checks each of these directories in order until it finds a match

By placing your script in `/usr/local/bin/`, which is already in `$PATH`, your script becomes globally accessible

## Solution

### Step 1: Create the script

Navigate to `/usr/local/bin/`

```bash
cd /usr/local/bin
sudo vim getDataBaseName.sh
```

Paste this sample script:

```bash
#!/bin/bash

echo "Database name is Andy"
```

Make the script executable

```bash
sudo chmod +x ./getDatabaseName.sh
```

### Step 2: Run the script from anywhere

Now, you can run script from any folder and it will work

```bash
getDatabaseName.sh
```
