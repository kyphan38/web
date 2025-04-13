# implement jenkins - pending

## Install Jenkins

Update the system

```bash
sudo apt update && sudo apt upgrade -y
```

Install Java because Jenkins requires it

- Check supported versions: [Jenkins Java Support Policy](https://www.jenkins.io/doc/book/platform-information/support-policy-java)

```bash
sudo apt install default-jre
```

Add Jenkins repository

```bash
sudo wget -O /usr/share/keyrings/jenkins-keyring.asc   https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key

echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc]"   https://pkg.jenkins.io/debian-stable binary/ | sudo tee   /etc/apt/sources.list.d/jenkins.list > /dev/null
```

Check available version

```bash
sudo apt-cache adison jenkins
```

Install specific version - `2.426-1`

```bash
sudo apt-get install -y jenkins=2.426.1
```

```bash
sydo systemctl enable jenkins
```

## Backup Jenkins

Locate the Jenkins home directory

- Check `JENKINS_HOME` variable
- Or, go to Manage Jenkins > System Information > user.home
- In this case it is `/var/lib/jenkin`

Important directory to backup

- `config.xml`: The main configuration file (global settings, security, etc.)
- `jobs/`: Contains subdirectories for each job, including their config.xml (job settings) and builds/ (build history)
- `plugins/`: Contains installed plugins, though you can reinstall these later
- `secrets/` : Stores encryption keys and credentials (e.g., master.key, hudson.util.Secret)

Stop Jenkins

```bash
sudo systemctl stop jenkins
```

## Upgrade Jenkins

## Rollback Jenkins
