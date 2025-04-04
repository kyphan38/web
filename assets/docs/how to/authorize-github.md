# authorize github

## Context

When working with GitHub, you may encounter an issue where you are prompted to enter your username and password every time you push changes

A solution to this is to set up a `.netrc` file, which store your credentials for logging in and authorizing GitHub

## Solution

### Step 1: Set Up the .Netrc File

On a Mac, UNIX, or Linux, you can create the `.netrc` file using the following command

``` bash
vim ~/.netrc
```

Inside the `.netrc` file, adding the following lines as format

``` bash
machine github.com
login <your_username>
password <your_credentials>
```

Example

``` bash
machine github.com
login kyphan38
password ghp_lRC2nJdYVw1ws8shGfsquFIs9L1fx301VjQ1
```

### Step 2: Set File Permissions

Since the .netrc file contains sensitive information, it's important to ensure that only your user has read/write access to it

To set the correct permissions, use the following command

``` bash
chmod 600 ~/.netrc
```
