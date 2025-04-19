# setup jenkins controller agent

## Prerequisites

- System: two Ubuntu servers with root or sudo access and network connectivity
  - controller-server: 192.168.64.10
  - agent-server: 192.168.64.11

## Step 1: Install Java (Both Servers)

Jenkins requires a Java Runtime Environment (JRE) to run. We will install the OpenJDK package

On controller

```bash
sudo apt update
sudo apt install openjdk-17-jdk -y

java -version
```

On agent

```bash
sudo apt update
sudo apt install openjdk-17-jdk -y

java --version

sudo systemctl status ssh
```

## Step 2: Install Jenkins (Controller Server)

Add Jenkins repository

```bash
sudo wget -O /usr/share/keyrings/jenkins-keyring.asc \
  https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc]" \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
```

Update package list and install Jenkins

```bash
sudo apt-get update
sudo apt-get install jenkins -y
```

Start and enable Jenkins service

```bash
sudo systemctl start jenkins
sudo systemctl enable jenkins
sudo systemctl status jenkins
```

Initial Jenkins setup

```bash
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

## Step 3: Generate SSH Key Pair (Controller Server)

Configure SSH key

- Controller stores the private key
- Agent stores the public key

```bash
sudo su - jenkins

ssh-keygen -t rsa -b 4096

cat ~/.ssh/id_rsa.pub
```

## Step 4: Add Public Key (Agent Server)

Ensure SSH directory and authorized_keys file exist with correct permissions

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
touch ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

Add the public key

```bash
vim ~/.ssh/authorized_keys
```

## Step 5: Configure Agent Node (Controller Server)

Retrieve the private key

```bash
sudo cat /var/lib/jenkins/.ssh/id_rsa
```

Add SSH credentials in Jenkins UI

- SSH Username with private key
  - ID: agent-ssh-key
  - Description: SSH key for agent-server
  - Username: ubuntu
  - Private key: ...

Add new node

- Node name: ubuntu-agent-1
- Description: Ubuntu Agent VM
- Number of executors: 1
- Remote root directory: /home/ubuntu/jenkins-agent-ubuntu
- Labels; ubuntu agent
- Launch method: launch agents via SSH
  - Host: 192.168.64.11
  - Credentials: ubuntu (SSH key for agent-server)

## Step 5: Test With a Job

Freestyle project

- Restrict where this project can be run
  - Label expression: ubuntu
- Build steps
  - Execute shell

```bash
echo "Hello from Jenkins Agent!"
echo "Running on host: $(hostname)"
echo "Workspace directory: $(pwd)"
echo "Java version on agent:"
java -version
```
