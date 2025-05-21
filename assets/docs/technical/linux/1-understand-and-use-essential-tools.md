# understand and use essential tool

## Command Line Basics

Login methods

- Local text-mode console: Log in directly on the computer using a text-based interface
- Local graphical-mode console: Log in directly on the computer using a graphical interface, like a desktop
- Remote text-mode login: Log in to a remote computer over a network using a text-based interface (e.g., via SSH or Telnet)
- Remote graphical-mode login: Log in to a remote computer with a graphical desktop

Old terms

- Console: The physical or main interface for interacting with a computer
- Virtual terminal: A software-based text interface, like a command-line window
- Terminal emulator: A program that mimics a text-based console on your screen

SSH

- Computer (SSH Client) &rarr; Server (SSH daemon)

```bash
ssh aaron@192.168.0.17
---
aaron@192.168.0.17's password:
```

## Logging in and Switching Users

Security features

- Access controls: Defines who access resources and what they can do
- PAM (Pluggable Authentication Modules): Handles authentication, authorization, and session management
- Network security: Protects systems from network-based threats
- SSH hardening: Secures the secure shell service for remote access
- SELinux: Enforces stricter security policies
- Others

Account types

| Account Type         | Purpose                                                                 | Examples              | Attributes                                                                                                                                   | Typical UID Range                |
|----------------------|-------------------------------------------------------------------------|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------|
| User Account         | Standard accounts for interactive login by humans                        | bob, michael, dave    | Username, Password (stored securely), User ID (UID), Group ID (GID), Home Directory, Login Shell                                           | Often starts at 1000 (>= 1000)   |
| Superuser Account    | Full administrative access to the system                                | root                  | Username: root, UID: always 0                                                                                                                 | UID is 0                        |
| System Account       | Used by system services or daemons running in the background            | sshd, mail, daemon    | Username, User ID (UID), Group ID (GID), Home Directory, typically no login capabilities                                                    | Reserved range, often below 1000|
| Service Account      | Dedicated accounts for specific applications or services to run under    | nginx, postgres       | Username, User ID (UID), Group ID (GID), Home Directory, service-specific permissions                                                        | Often within system account range or user range|

Groups

- A collection of users, primarily used to manage permissions efficiently. Users can belong to multiple groups

Essential commands

- User

```bash
# Display user account database
cat /etc/passwd
---
root:*:0:0:System Administrator:/var/root:/bin/sh
daemon:*:1:1:System Services:/var/root:/usr/bin/false

# Display user and group identity
id kyphan
---
uid=1001(kyphan) gid=1001(kyphan) groups=1001(kyphan),27(sudo)

# Display currently logged-in users
who
---
kyphan   tty1         2025-04-16 09:30
kyphan   pts/0        2025-04-16 10:15 (192.168.1.10)

# Display history of last logged-in users
last
---
kyphan   pts/0        192.168.1.10     Wed Apr 16 10:15   still logged in
kyphan   tty1                          Wed Apr 16 09:30   still logged in
reboot   system boot  5.15.0-generic   Wed Apr 16 09:25   - 10:30  (01:05)

# Search for information and home directory
grep -i kyphan /etc/passwd
---
kyphan:x:1001:1001::/home/kyphan:/bin/bash
```

- Group

```bash
# Display group database
cat /etc/group
---
root:x:0:
sudo:x:27:kyphan
kyphan:x:1001:
```

Switch users

- `su`
  - Switches to another user account. If no user is specified, it defaults to root
  - Requires the target user's password with `su -`
  - Directly using su to become root for extended periods or sharing the root password is often discouraged for security reasons

```bash
# Switch to the root user
su -
---
Password:

# Execute a single command as root
su -c "whoami"
---
Password:
root
```

- `sudo`
  - Allows permitted users to execute specific commands as another user (typically root) without needing the target user's password
  - It requires the user's own password for authentication
  - Provides better accountability and allows granting specific, limited administrative privileges instead of full root access

```bash
# Execute a command with root privileges
sudo apt-get update
---
[sudo] password for kyphan:

# Display the sudoers configuration file
cat /etc/sudoers
---
root    ALL=(ALL:ALL) ALL
%admin ALL=(ALL) ALL
%sudo   ALL=(ALL:ALL) ALL
```

- no-login shell
  - Assigns a shell like `/sbin/login`, `/usr/sbin/nologin`, or `/bin/false` to an account (often system accounts or even root on hardened systems) prevents users from logging in directly using that account
  - Enhances security by forcing administrative tasks through mechanisms like sudo or requiring a switch from a standard user account

```bash
# Check the login shell for the root user
grep '^root:' /etc/passwd
---
root:x:0:0:root:/root:/bin/bash
```

## Using System Documentation

Commands

- `--help`: Displays a brief summary of their usage and options

```bash
ls --help

# Pager
journalctl --help
```

- `man`: Displays a comprehensive manual pages

```bash
man journalctl
man man
man 1 printf
man 3 printf
```

- `apropos`: Searches the names and short descriptions of all manual pages for a specific keyword

```bash
apropos director
apropos -s 1,8 director

# Update the manual page index database
sudo mandb
```

## Additional System Documentation

- `info`: Accesses documentation in the GNU Info format

```bash
info bash
```

- `/usr/share/doc`: Contains supplementary documentation provided by installed packages

```bash
cd /usr/share/doc/bash

less INTRO

grep "command" INTRO
```

## Working With Files and Directories

List files and directories

- `ls`: Lists the contents of a directory

```bash
ls
ls -a
ls -l /var/log
ls -lah
```

Filesystem tree

- Current working directory
- Relative path
- Absolute path

```bash
cd /var/log
cd -
cd ..
```

Create files

- `touch`: Creates an empty file if it doesn't exist, or updates the access and modification timestamps of an existing file

```bash
touch /home/kyphan/text.txt
```

Create directories

- `mkdir`

```bash
mkdir -p /home/kyphan/folder
```

Copy files and directories

- `cp`: Copies files or entire directory structures

```bash
cp hello.text folder/
cp hello.txt folder/hello_copy.txt

# If hello does not exist, it copies only the contents, if not, it copies the entire folder/ to be hello/folder/
cp -r folder/ hello/

```

Move files

- `mv`: Moves files/directories to a different location or renames them

```bash
mv abc.txt hello/
mv abc.txt abcd.txt
mv folder/ new_folder/
```

Delete files and directories

- `mv`: Removes files and directories

```bash
rm abc.txt

rm -r folder
```

## Working With Hard Links

Inodes

- An inode (index node) is a data structure on Unix-like filesystems
- Each file and directory on the filesystem has a unique inode
- It stores metadata about the file or directory, excluding the filename and the actual file content
- Key metadata includes file type, permissions, owner, file size, timestamps, link count, pointers, etc.

```bash
# Create the file and write text into it
echo "Picture of Milo the dog" > Pictures/family_dog.jpg

# Display detailed status information
stat Pictures/family_dog.jpg
---
File: Pictures/family_dog.jpg
Size: 49 Blocks: 8 IO Block: 4096 regular file
Device: fd00h/64768d Inode: 52946177 Links: 1
Access: (0640/-rw-r-----) Uid: ( 1000/ aaron) Gid: ( 1005/ family)
...
```

- How it works
  - When accessing a path like Pictures/family_dog.jpg, the system locates the Pictures directory
  - It searches the directory's contents for the entry family_dog.jpg
  - This entry contains the corresponding inode number
  - The system uses the inode number to find the inode structure itself
  - From the inode, it reads metadata (like permissions) and gets the pointers to the data blocks to retrieve the file's content
- Relationship
  - A directory entry links a filename to an inode number
  - The inode stores metadata and points to the data blocks

![img](./img/1.png)

Hard links

- A hard link is simply another directory entry (another filename, potentially in a different directory) that points to the exact same inode as the original file
- Benefit
  - Allows multiple filenames to refer to the same file data without duplicating the data itself, thus saving storage space
  - Instead of having two separate copies of a large file, you have two names pointing to one set of data blocks via the shared inode

```bash
# ln path_to_target_file path_to_link_file

# Recursively copy the contents of Aaron's Pictures directory to Jane's
cp –r /home/aaron/Pictures/ /home/jane/Pictures/

# Create a hard link: Jane's path now points to the same inode as Aaron's path
ln /home/aaron/Pictures/family_dog.jpg /home/jane/Pictures/family_dog.jpg

# Display detailed status information
stat Pictures/family_dog.jpg
---
File: Pictures/family_dog.jpg
Size: 49 Blocks: 8 IO Block: 4096 regular file
Device: fd00h/64768d Inode: 52946177 Links: 2
Access: (0640/-rw-r-----) Uid: ( 1000/ aaron) Gid: ( 1005/ family)
...

# The link count for inode 52946177 decreases from 2 to 1
rm /home/aaron/Pictures/family_dog.jpg

# The link count for inode 52946177 decreases from 1 to 0
rm /home/jane/Pictures/family_dog.jpg
```

- Data deletion
  - The actual file data (disk blocks) associated with an inode is only marked for deletion (and eventually overwritten) when its link count reaches zero
  - Removing a hard link (rm) just deletes that specific directory entry and decrements the inode's link count

Limitiations and considerations

- Only hardlink to files, not folders
- Only hardlink to files on the same filesystem

```bash
# Add existing user 'aaron' to the supplementary group 'family'
useradd -a -G family aaron

# Add existing user 'jane' to the supplementary group 'family'
useradd -a -G family jane

# Change file permissions: owner=read/write, group=read/write, others=none
chmod 660 /home/aaron/Pictures/family_dog.jpg
```

## Working With Soft Links

Soft (symbolic) links

- Unlike a hard link which points directly to an inode, a symbolic link's content is simply the pathname (text string) of another file or directory (the target)
- It is used to create convenient access points, redirect paths, or link across different filesystems or partitions

![img](./img/2.png)

```bash
# ln -s path_to_target_file path_to_link_file

# Create a symbolic link named 'family_dog_shortcut.jpg' and points to the absolute path '/home/aaron/Pictures/family_dog.jpg'
ln –s /home/aaron/Pictures/family_dog.jpg family_dog_shortcut.jpg

ls -l
---
lrwxrwxrwx. 1 aaron aaron family_dog_shortcut.jpg -> /home/aaron/Pictures..

readlink family_dog_shortcut.jpg
---
/home/aaron/Pictures/family_dog.jpg

echo "Test" >> fstab_shortcut
---
bash: fstab_shortcut: Permission denied

ls -l
---
lrwxrwxrwx. 1 aaron aaron family_dog_shortcut.jpg -> /home/aaron/Pictures..

ln –s Pictures/family_dog.jpg relative_picture_shortcut
```

- If the target file or directory is deleted, moved, or renamed, the symbolic link is not automatically updated or removed
- It continues to point to the original path, which now leads nowhere. Such links are called "broken" or "dangling" links - "No such file or directory" error

Limitiations and considerations

- Softlink to files and folders
- Softlink to files on different filesystem as well

## List, Set, and Change Standard Ugo/RWX Permissions -- Continue

## Lab

### Logging in and System Documentation

```bash
man ssh | grep version
ssh -V

apropos hostname
hostnamectl

mandb

man ssh | grep verbose
ssh -v alex@localhost

ls -la /home/bob/data

ssh bob@dev-host01
touch myfile

apropos ssh
sudo mandb

apropos "NFS mounts"
touch nfsmount.conf
```

### Files, Directories, Hard and Soft Links

```bash
mkdir -p /home/bob/lfcs

touch /home/bob/lfcs/lfcs.txt

cp -r /tmp/Invoice/ /home/bob/

cp -a /home/bob/myfile.txt /home/bob/data/

cp -r /home/bob/lfcs /home/bob/old-data

rm /home/bob/lfcs/lfcs.txt

mv /home/bob/lfcs/ /home/bob/new-data/

rm -rf /home/bob/lfcs

ln -s /tmp /home/bob/link_to_tmp

ln /opt/hlink /home/bob/hlink

mv /home/bob/new_file /home/bob/old_file

mkdir -p /tmp/1/2/3/4/5/6/7/8/9

ls --full-time
```
