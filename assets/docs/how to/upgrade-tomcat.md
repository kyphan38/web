# implement tomcat

## Prerequisites

- System: Ubuntu Server with root or sudo access and network connectivity

## Install Tomcat

Update the system

```bash
sudo apt update && sudo apt upgrade -y
```

Install Java because Tomcat requires it. If there is no Java currently on the server, use the following command to install OpenJDK

```bash
sudo apt install default-jdk -y
```

Create a system user for Tomcat (optional but recommended)

```bash
sudo useradd -m -U -s /bin/false tomcat
```

Download specific version of Tomcat (9.0.82)

```bash
cd /tmp
wget https://archive.apache.org/dist/tomcat/tomcat-9/v9.0.82/bin/apache-tomcat-9.0.82.tar.gz
```

Extract it and move to `/opt/tomcat-9.0.82`

```bash
sudo mkdir /opt/tomcat-9.0.82
sudo tar -xzvf apache-tomcat-9.0.82.tar.gz -C /opt/tomcat-9.0.82 --strip-components=1
```

Creating a symbolic link `/opt/tomcat` pointing to the specific version makes upgrades easier - you can just update the link without changing other configs

```bash
sudo ln -sfn /opt/tomcat-9.0.82 /opt/tomcat
```

Set permissions

```bash
sudo chown -R tomcat:tomcat /opt/tomcat-9.0.82
sudo chown -R tomcat:tomcat /opt/tomcat
---
sudo chmod -R u+x,g+rx,o+rx /opt/tomcat-9.0.82/bin/
sudo chmod +x /opt/tomcat-9.0.82/bin/*.sh
```

Create a systemd service (for auto-start)

```bash
sudo vim /etc/systemd/system/tomcat.service
```

```bash
[Unit]
Description=Apache Tomcat Web Application Container
After=network.target

[Service]
Type=forking

User=tomcat
Group=tomcat

Environment="JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64"
Environment="CATALINA_PID=/opt/tomcat/temp/tomcat.pid"
Environment="CATALINA_HOME=/opt/tomcat"
Environment="CATALINA_BASE=/opt/tomcat"
Environment="CATALINA_OPTS=-Xms512M -Xmx1024M -server -XX:+UseParallelGC"
Environment="JAVA_OPTS=-Djava.awt.headless=true -Djava.security.egd=file:/dev/./urandom"

ExecStart=/opt/tomcat/bin/startup.sh
ExecStop=/opt/tomcat/bin/shutdown.sh

Restart=on-failure

[Install]
WantedBy=multi-user.target
```

Reload systemd and start Tomcat

```bash
sudo systemctl daemon-reload
sudo systemctl start tomcat
sudo systemctl enable tomcat
```

Access Tomcat via `http://<your-server-ip>:8080`

```bash
sudo ufw allow 8080
```

Check Tomcat version

```bash
sudo java -cp /opt/tomcat/lib/catalina.jar org.apache.catalina.util.ServerInfo
```

## Backup Tomcat

Create a backup of existing Tomcat deployment

```bash
sudo mkdir -p /backups/tomcat
sudo tar -czvf /backups/tomcat/tomcat-9.0.82-backup-$(date +%Y%m%d).tar.gz /opt/tomcat-9.0.82
```

Create a backup of existing configs, webapps, and systemd service file (optional but recommended)

```bash
sudo cp -r /opt/tomcat/conf /backups/tomcat/tomcat-9.0.82-conf-backup-$(date +%Y%m%d)
sudo cp -r /opt/tomcat/webapps /backups/tomcat/tomcat-9.0.82-webapps-backup-$(date +%Y%m%d)
sudo cp /etc/systemd/system/tomcat.service /backups/tomcat/tomcat-9.0.82-tomcat.service-backup-$(date +%Y%m%d)
```

## Upgrade Tomcat

Download specific version of Tomcat (9.0.85)

```bash
cd /tmp
wget https://archive.apache.org/dist/tomcat/tomcat-9/v9.0.85/bin/apache-tomcat-9.0.85.tar.gz
```

Extract and move it to `/opt/tomcat-9.0.85`

```bash
sudo mkdir /opt/tomcat-9.0.85
sudo tar -xzvf apache-tomcat-9.0.85.tar.gz -C /opt/tomcat-9.0.85 --strip-components=1
```

Set permissions

```bash
sudo chown -R tomcat:tomcat /opt/tomcat-9.0.85
sudo chmod -R u+x,g+rx,o+rx /opt/tomcat-9.0.85/bin/ # 755
sudo chmod +x /opt/tomcat-9.0.85/bin/*.sh
```

Copy config, webapps from the current installation

```bash
sudo chmod 755 /opt/tomcat/conf/
sudo chmod 755 /opt/tomcat/webapps/
---
sudo cp -r /opt/tomcat/conf/* /opt/tomcat-9.0.85/conf/
sudo cp -r /opt/tomcat/webapps/* /opt/tomcat-9.0.85/webapps/
```

Stop existing Tomcat

```bash
sudo systemctl stop tomcat
```

Switch symbolic link to new version

```bash
sudo ln -sfn /opt/tomcat-9.0.85 /opt/tomcat
```

Start new Tomcat version

```bash
sudo systemctl start tomcat
```

Check new Tomcat version

```bash
sudo java -cp /opt/tomcat/lib/catalina.jar org.apache.catalina.util.ServerInfo
```

## Rollback Tomcat

Stop Tomcat

```bash
sudo systemctl stop tomcat
```

Point symbolic link back to previous version

```bash
sudo ln -sfn /opt/tomcat-9.0.82 /opt/tomcat
```

Start Tomcat again

```bash
sudo systemctl start tomcat
```

## Common Errors and Fixes

Cannot execute due to permission

```bash
sudo chmod +x /opt/tomcat/bin/*.sh
```

Inspect and adjust

```bash
sudo ls -ld /opt/tomcat/bin/
---
drwxr-x--- 2 tomcat tomcat 4096 Mar 22 20:15 /opt/tomcat/bin/
```

Fix permission by granting execute permissions to "others"

```bash
sudo chmod -R u+x,g+rx,o+rx /opt/tomcat/bin/
---
drwxr-xr-x 2 tomcat tomcat 4096 Mar 22 20:15 /opt/tomcat/bin/
```
