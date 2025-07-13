# jenkins controller agent

## Prerequisites

- Two Ubuntu servers with sudo access and connectivity
  - Controller: 192.168.64.10
  - Agent: 192.168.64.11

## Step 1: Install Java (Both)

Jenkins requires a Java Runtime Environment (JRE) to run

On controller

```bash
sudo apt update
sudo apt install openjdk-21-jdk -y
java -version
```

On agent

```bash
sudo apt update
sudo apt install openjdk-17-jdk -y
java --version

sudo systemctl status ssh
```

## Step 2: Install Jenkins (Controller)

Add repository

```bash
sudo wget -O /etc/apt/keyrings/jenkins-keyring.asc https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
echo "deb [signed-by=/etc/apt/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/" | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null
```

Update and install

```bash
sudo apt-get update
sudo apt-get install jenkins -y
```

Start and enable service

```bash
sudo systemctl start jenkins
sudo systemctl enable jenkins
sudo systemctl status jenkins
```

Initial password

```bash
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

## Step 3: Generate SSH Key (Controller)

```bash
sudo su - jenkins
ssh-keygen -t rsa -b 4096
cat ~/.ssh/id_rsa.pub
```

- Controller stores the private key
- Agent stores the public key

## Step 4: Add Public Key (Agent)

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
touch ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
vim ~/.ssh/authorized_keys  # Paste public key
```

## Step 5: Configure Agent (Controller)

Get private key

```bash
sudo cat /var/lib/jenkins/.ssh/id_rsa
```

In Jenkins UI

- Add credentials: SSH Username with private key (ID: agent-ssh-key, Username: ubuntu, Private key: ...)
- Add node: Name: ubuntu-agent-1, Executors: 1, Remote dir: /home/ubuntu/jenkins-agent-ubuntu, Labels: ubuntu agent, Launch: SSH, Host: 192.168.64.11, Credentials: ubuntu (agent-ssh-key)

## Step 5: Test Job

Freestyle project

- Label: ubuntu
- Shell

```bash
echo "Hello from Jenkins Agent!"
echo "Running on host: $(hostname)"
echo "Workspace: $(pwd)"
echo "Java version:"
java -version
```
