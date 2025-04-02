# linux

## Differentiate apt and apt-get

apt and apt-get are both command-line tools used to manage packages on Debian-based Linux distributions, but they server slightly different purpose and have distinct characteristics

`apt-get`

- Purpose and design
  - Introduced ealier, it is a lower-level pacakage management tool
- Functions
  - Offers a wide range of subcommands (install, remove, update,upgrade, dis-upgrade, autoremove)
  - More options for fine-tuned control, such as handling depedencies exlicitly or managing package states
- Backward compatibility
  - Older and more established, so it's guaranteed to work in scripts and across different versions of Debian-based systems
- Use cases
  - In scripts or automation tasks

`apt`

- Purpose and design
  - Introduced later (in Debian 8 and Ubuntu 16.04), it is a higher-level tool as a front-end to apt-get and other APT tools (like apt-cache)
  - Combines features of apt-get and apt-cache into one command
- Functions
  - Provides a subset of the most frequently used commands, streamlined for convenience
  - Adds some quality-of-life features, like automatically running apt update before apt upgrade if the package index is outdated
- Backward compatibility
  - Newer and still evolving, so it's not as universally supported in older systems or scripts
- Use cases
  - For day-to-ady interactive package management in the terminal

## Why run apt update and apt upgrade before installing?

In Linux, running sudo apt update and sudo apt upgrade before installing software is a common practice because it ensures your system is up-to-date and can install the latest, most compatible versions of packages

Why sudo apt update?

- Updates the package index
  - This command updates the local list of available packages and versions from repositories in /etc/apt/sources.list and /etc/apt/sources.list.d/. Without it, your system might use an outdated list, missing newer versions or key dependencies
- Fetches latest metadata
  - Repositories often release new versions, security patches, or bug fixes. apt update ensures your system has the latest info before installation
- Avoid errors
  - An outdated index can cause "package not found" errors or install unsupported older versions

Why sudo apt upgrade?

- Updates installed packages
  - This command upgrades all installed packages to their latest repository versions, keeping your system patched and compatible with new software
- Fixes dependencies
  - New software may require specific library versions. Outdated dependencies can cause failures; upgrading prevents this
- Enhances security
  - Updates often include security fixes, reducing vulnerabilities during new installations
- Enhances stability
  - Consistent package versions minimize conflicts between old and new software

Why both before installing?

- apt update fetches the latest package data, which apt upgrade then applies. Skipping either risks using outdated or incompatible components
- On servers, combining these steps cuts downtime

When to skip?

- If you ran both recently (e.g., same day) with no expected repository changes
- In offline setups (using manual installs instead)
