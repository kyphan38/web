# linux

## GNU/Linux

History

- Started in 1983 by Richard Stallman, the GNU Project aimed to build a free Unix-like OS
- By the early 1990s, GNU lacked a kernel until Linus Torvalds created the Linux kernel in 1991, released under the GNU GPL in 1992
- Together, they formed GNU/Linux, a free, open-source alternative to proprietary Unix
- GNU/Linux is packaged into user-friendly distributions like Ubuntu, Debian, and Fedora, each offering unique features and interfaces

Key features

- Free and open-source, unlike paid Unix systems
- GNU tools paired with the Linux kernel
- Kernel manages CPU, memory, and storage
- Distributions (e.g., Ubuntu for beginners, Debian for stability, Fedora for cutting-edge updates) make GNU/Linux accessible

Learn more

- [Linux and GNU](https://www.gnu.org/gnu/linux-and-gnu.en.html)

## Linux Directory Structure

![img](./img/1.png)

## Basic Commands

Fun fact: a directory is a just a file containing the names of other files

| Category                      | Popular Commands                                      |
| :---------------------------- | :---------------------------------------------------- |
| File System Navigation        | cd, pwd, ls                                           |
| File & Directory Mgmt         | cp, mv, rm, mkdir, touch, ln -s                       |
| Viewing & Editing Files       | cat, less, head, tail, nano, vim                      |
| Searching Files & Text        | find, grep, locate, wc                                |
| Permissions & Ownership       | chmod, chown, chgrp                                   |
| Process Management            | ps, top, htop, kill, killall                          |
| System Information            | uname, uptime, df -h, du -sh, free -h                 |
| Hardware Information          | lscpu, lsblk, lspci, lsusb                            |
| Networking                    | ping, ip / ifconfig, ssh, scp, wget, curl             |
| Archiving & Compression       | tar, gzip, gunzip, zip, unzip                         |
| Package Management            | apt / dnf / yum / pacman (install, remove, update)    |
| User & Group Management       | sudo, su, useradd, usermod, passwd, whoami, id        |
| Disk Management               | lsblk, df -h, mount, umount, fdisk -l                 |
| System Services (systemd)     | systemctl (start, stop, status, enable, disable)      |
| Job Scheduling                | crontab -e, crontab -l, at                            |
| Shell Environment             | echo, export, alias, source, env                      |
| Command History & Help        | history, man, --help, apropos                         |
| System Control                | shutdown, reboot, clear, hostname                     |
| Development Tools             | git, make, gcc/g++                                    |
| Miscellaneous Utilities       | watch, tee, sleep, which, type, xargs                 |

### Practice

```bash
#
ssh

#
telnet google 80

#
man telnet

#
telnet --help

#
which telnet

#
ls /usr/bin | grep telnet
```

## Shell, Console, and Terminal - Continue - 1:19:13

Console

- Physical devices to interact with the computer such as screen, keyboard, and mouse

Terminal

- A program acts as a wrapper to enter commands

Shell

- A command line interpreter that receives and executes commands
