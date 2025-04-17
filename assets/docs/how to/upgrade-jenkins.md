# upgrade jenkins

## Information

Prerequisites

- System: A Ubuntu server with root or sudo access and network connectivity

Technology

- In-place upgrade

## Install

Update the system

```bash
sudo apt update && sudo apt upgrade -y
```

Install Java because Jenkins requires it

- Check supported versions: [Jenkins Java Support Policy](https://www.jenkins.io/doc/book/platform-information/support-policy-java)

```bash
sudo apt install openjdk-17-jdk -y
```

Add Jenkins repository

```bash
sudo wget -O /usr/share/keyrings/jenkins-keyring.asc \
  https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc]" \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
```

Check available version

```bash
sudo apt-get update
sudo apt-cache policy jenkins
```

Install specific version - `2.426-1`

```bash
sudo apt-get install -y jenkins=2.426.1
```

Enable Jenkins service

```bash
sudo systemctl enable jenkins
sudo systemctl start jenkins
sudo systemctl status jenkins
```

## Backup

Locate the Jenkins home directory

- Check `JENKINS_HOME` variable
- Or, go to Manage Jenkins > System Information > user.home
- Default location `/var/lib/jenkins`

Important directory to backup

- `config.xml`: The main configuration file (global settings, security, etc.)
- `jobs/`: Contains subdirectories for each job, including their config.xml (job settings) and builds/ (build history)
- `plugins/`: Contains installed plugins, though you can reinstall these later
- `secrets/` : Stores encryption keys and credentials (e.g., master.key, hudson.util.Secret)
- `users/`: Contains user configurations
- `nodes/`: Contains configurations for any connected agent nodes

Stop Jenkins service

```bash
sudo systemctl stop jenkins
```

Backup data

```bash
TIMESTAMP=$(date +"%Y%m%d%H%M%S")
mkdir -p /tmp/bk-jenkins

export JENKINS_HOME=/var/lib/jenkins
export BACKUP_DIR=/tmp/bk-jenkins/bk-jenkins_${TIMESTAMP}

sudo tar -czvf ${BACKUP_DIR}.tar.gz \
  --exclude="${JENKINS_HOME}/jobs/*/workspace" \
  "${JENKINS_HOME}"/*.xml \
  "${JENKINS_HOME}/jobs" \
  "${JENKINS_HOME}/plugins" \
  "${JENKINS_HOME}/secrets" \
  "${JENKINS_HOME}/users" \
  "${JENKINS_HOME}/nodes" \
  "${JENKINS_HOME}/userContent"
```

## Upgrade

Update package list

```bash
sudo apt update
```

Perform the upgrade

```bash
sudo apt-get install -y jenkins=2.440.1
```

Restart Jenkins service

```bash
sudo systemctl restart jenkins
sudo systemctl status jenkins
```

## Rollback

Stop Jenkins service

```bash
sudo systemctl stop jenkins
```

Restore backup

```bash
sudo cp -R /var/lib/jenkins /var/lib/broken_jenkins_bk

sudo tar -xzvf ${BACKUP_DIR}.tar.gz -C /var/lib/jenkins

sudo chown -R jenkins:jenkins /var/lib/jenkins
```

Install previous Jenkins version

```bash
sudo apt-get install jenkins=2.426.1
```

Start Jenkins service

```bash
sudo systemctl start jenkins
sudo systemctl status jenkins
```
