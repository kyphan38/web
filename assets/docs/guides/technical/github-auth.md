# github auth

## Context

GitHub prompts for credentials on every push. Use `.netrc` to store them

## Solution

### Step 1: Create .netrc

``` bash
vim ~/.netrc
```

Content

``` bash
machine github.com
login <username>
password <token>
```

Example

``` bash
machine github.com
login kyphan38
password ghp_lR124ndYVw1ws8shGfsquFIs9L1fx11VjQ1
```

### Step 2: Set Permissions

``` bash
chmod 600 ~/.netrc
```
