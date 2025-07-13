# jenkins upgrade

## Install

Update system

```bash
sudo apt update && sudo apt upgrade -y
```

Install Java (Java 17 or 21)

```bash
sudo apt install openjdk-21-jre -y
java -version
```

Add repository

```bash
sudo wget -O /etc/apt/keyrings/jenkins-keyring.asc https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
echo "deb [signed-by=/etc/apt/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/" | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null
```

Check available versions

```bash
sudo apt-cache madison jenkins
```

Install specific (e.g., 2.504.3)

```bash
sudo apt-get install -y jenkins=2.504.3
sudo systemctl enable jenkins
```

## Backup Jenkins

Locate the Jenkins home directory

- Check `JENKINS_HOME` variable

Key directories

- `config.xml`: The main configuration file (global settings, security, etc.)
- `jobs/`: Contains subdirectories for each job, including their config.xml (job settings) and builds/ (build history)
- `plugins/`: Contains installed plugins, though you can reinstall these later
- `secrets/` : Stores encryption keys and credentials (e.g., master.key, hudson.util.Secret)

Stop Jenkins

```bash
sudo systemctl stop jenkins
```

## Backup

```bash
sudo cp -r /var/lib/jenkins /backup/path/
```

## Upgrade

Update packages

```bash
sudo apt-get update
sudo apt-get upgrade jenkins -y
```

Or specific version

```bash
sudo apt-get install jenkins=NEW.VERSION
```

Restart

```bash
sudo systemctl restart jenkins
```

## Rollback

Stop service

```bash
sudo systemctl stop jenkins
```

Restore backup

```bash
sudo cp -r /backup/path/jenkins /var/lib/
```

Reinstall previous version

```bash
sudo apt-get install jenkins=OLD.VERSION
```

Restart

```bash
sudo systemctl restart jenkins
```
