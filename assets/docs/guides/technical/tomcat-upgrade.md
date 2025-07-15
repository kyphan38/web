# tomcat upgrade

## Prerequisites

- Ubuntu server with sudo, network

## Install

Update system

```bash
sudo apt update && sudo apt upgrade -y
```

Install Java

```bash
sudo apt install default-jdk -y
```

Create Tomcat user

```bash
sudo useradd -m -U -s /bin/false tomcat
```

Download Tomcat 9.0.82

```bash
cd /tmp
wget https://archive.apache.org/dist/tomcat/tomcat-9/v9.0.82/bin/apache-tomcat-9.0.82.tar.gz
```

Extract

```bash
sudo mkdir /opt/tomcat-9.0.82
sudo tar -xzvf apache-tomcat-9.0.82.tar.gz -C /opt/tomcat-9.0.82 --strip-components=1
```

Symbolic link

```bash
sudo ln -sfn /opt/tomcat-9.0.82 /opt/tomcat
```

Set permissions

```bash
sudo chown -R tomcat:tomcat /opt/tomcat-9.0.82 /opt/tomcat
sudo chmod -R u+x,g+rx,o+rx /opt/tomcat-9.0.82/bin/
sudo chmod +x /opt/tomcat-9.0.82/bin/*.sh
```

Systemd service (/etc/systemd/system/tomcat.service)

```bash
[Unit]
Description=Apache Tomcat
After=network.target

[Service]
Type=forking
User=tomcat
Group=tomcat
Environment="JAVA_HOME=/usr/lib/jvm/default-java"
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

Start service

```bash
sudo systemctl daemon-reload
sudo systemctl start tomcat
sudo systemctl enable tomcat
```

Allow port

```bash
sudo ufw allow 8080
```

Check version

```bash
sudo java -cp /opt/tomcat/lib/catalina.jar org.apache.catalina.util.ServerInfo
```

## Backup

```bash
sudo mkdir -p /backups/tomcat
sudo tar -czvf /backups/tomcat/tomcat-9.0.82-backup-$(date +%Y%m%d).tar.gz /opt/tomcat-9.0.82
sudo cp -r /opt/tomcat/conf /backups/tomcat/tomcat-9.0.82-conf-backup-$(date +%Y%m%d)
sudo cp -r /opt/tomcat/webapps /backups/tomcat/tomcat-9.0.82-webapps-backup-$(date +%Y%m%d)
sudo cp /etc/systemd/system/tomcat.service /backups/tomcat/tomcat-9.0.82-tomcat.service-backup-$(date +%Y%m%d)
```

## Upgrade

Download 9.0.85

```bash
cd /tmp
wget https://archive.apache.org/dist/tomcat/tomcat-9/v9.0.85/bin/apache-tomcat-9.0.85.tar.gz
```

Extract

```bash
sudo mkdir /opt/tomcat-9.0.85
sudo tar -xzvf apache-tomcat-9.0.85.tar.gz -C /opt/tomcat-9.0.85 --strip-components=1
```

Set permissions

```bash
sudo chown -R tomcat:tomcat /opt/tomcat-9.0.85
sudo chmod -R u+x,g+rx,o+rx /opt/tomcat-9.0.85/bin/
sudo chmod +x /opt/tomcat-9.0.85/bin/*.sh
```

Copy config, webapps from the current installation

```bash
sudo chown -R tomcat:tomcat /opt/tomcat-9.0.85
sudo chmod -R u+x,g+rx,o+rx /opt/tomcat-9.0.85/bin/
sudo chmod +x /opt/tomcat-9.0.85/bin/*.sh
```

Copy configs/webapps

```bash
sudo cp -r /opt/tomcat/conf/* /opt/tomcat-9.0.85/conf/
sudo cp -r /opt/tomcat/webapps/* /opt/tomcat-9.0.85/webapps/
```

Stop service

```bash
sudo systemctl stop tomcat
```

Update link

```bash
sudo ln -sfn /opt/tomcat-9.0.85 /opt/tomcat
```

Start service

```bash
sudo systemctl start tomcat
```

Check version

```bash
sudo java -cp /opt/tomcat/lib/catalina.jar org.apache.catalina.util.ServerInfo
```

## Rollback

Stop service

```bash
sudo systemctl stop tomcat
```

Revert link

```bash
sudo ln -sfn /opt/tomcat-9.0.82 /opt/tomcat
```

Start service

```bash
sudo systemctl start tomcat
```

## Common Errors and Fixes

Permission denied on bin/

```bash
sudo chmod -R u+x,g+rx,o+rx /opt/tomcat/bin/
ls -ld /opt/tomcat/bin/  # Verify drwxr-xr-x
```
