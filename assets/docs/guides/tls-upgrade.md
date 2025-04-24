# tls upgrade

## Prerequisites

- System: Ubuntu Server with root or sudo access and network connectivity
- Tools: Nginx, OpenSSL
- Server IP: 192.168.64.9
- Firewall: ensure port 443 (HTTPS) is allowed

## Setup TLS 1.0

Update system packages

```bash
sudo apt update && sudo apt upgrade -y
```

Install, enable, and start Nginx

```bash
sudo apt install nginx -y

sudo systemctl enable nginx
sudo systemctl start nginx
sudo systemctl status nginx
```

Configure firewall

```bash
sudo ufw allow 'Nginx Full'
sudo ufw status
```

Create SSL directory

```bash
sudo mkdir -p /etc/nginx/ssl
```

Generate the certificate and private key

```bash
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout /etc/nginx/ssl/nginx-selfsigned.key \
  -out /etc/nginx/ssl/nginx-selfsigned.crt \
  -subj "/C=US/ST=California/L=SanFrancisco/O=MyCompany/OU=IT/CN=192.168.64.9"
```

Generate Diffie-Hellman parameters

```bash
sudo openssl dhparam -out /etc/nginx/ssl/dhparam.pem 2048
```

Modify the default Nginx site configuration file

```bash
sudo rm -f /etc/nginx/sites-enabled/default

sudo vim /etc/nginx/sites-available/default
---
server {
  listen 80 default_server;
  listen [::]:80 default_server;
    server_name _;

  root /var/www/html;
  index index.html index.htm index.nginx-debian.html;
  location / {
    try_files $uri $uri/ =404;
  }
}

server {
  listen 443 ssl default_server;
  listen [::]:443 ssl default_server;
  server_name 192.168.64.9;
  
  ssl_certificate /etc/nginx/ssl/nginx-selfsigned.crt;
  ssl_certificate_key /etc/nginx/ssl/nginx-selfsigned.key;
  ssl_dhparam /etc/nginx/ssl/dhparam.pem;
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;
  ssl_prefer_server_ciphers off;

  root /var/www/html;
  index index.html index.htm index.nginx-debian.html;
  
  location / {
    try_files $uri $uri/ =404;
  }
}
```

Link the configure files

```bash
sudo ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default
```

Test Nginx configuration syntax

```bash
sudo nginx -t
```

Modify OpenSSL configuration file to enable lower TLS version

```bash
openssl version -d

sudo vim /etc/ssl/openssl.cnf
```

- At the very top of the file, adding

```bash
openssl_conf = default_conf
```

- At the very bottom of the file, adding

```bash
[ default_conf ]

ssl_conf = ssl_sect

[ssl_sect]

system_default = system_default_sect

[system_default_sect]
MinProtocol = TLSv1
CipherString = DEFAULT:@SECLEVEL=1
```

Restart Nginx to apply OpenSSL changes

```bash
sudo systemctl restart nginx
```

Verify TLS 1.0

```bash
openssl s_client -connect 192.168.64.9:443 -tls1
```

## Backup TLS

Create a timestamped backup directory

```bash
TIMESTAMP=$(date +%Y%m%d%H%M%S)
BACKUP_DIR="/home/ubuntu/config_backups/tls1_setup_$TIMESTAMP"
mkdir -p "$BACKUP_DIR/nginx"
mkdir -p "$BACKUP_DIR/ssl_configs"
mkdir -p "$BACKUP_DIR/nginx_certs"
```

- Backup Nginx site configuration

```bash
sudo cp /etc/nginx/sites-available/default "$BACKUP_DIR/nginx/"
```

- Backup OpenSSL configuration file

```bash
sudo cp /etc/ssl/openssl.cnf "$BACKUP_DIR/ssl_configs/"
```

- Backup Nginx SSL certificates files

```bash
sudo cp -a /etc/nginx/ssl/* "$BACKUP_DIR/nginx_certs/"
```

## Disable TLS 1.0 and Enable TLS 1.2

Modify OpenSSL configuration

```bash
sudo vim /etc/ssl/openssl.cnf
---
MinProtocol = TLSv1.2
```

Modify Nginx site configuration

```bash
sudo vim /etc/nginx/sites-available/default
---
ssl_protocols TLSv1.2 TLSv1.3;
ssl_prefer_server_ciphers on;
```

Test Nginx configuration syntax

```bash
sudo nginx -t
```

Restart Nginx to apply all changes

```bash
sudo systemctl restart nginx
```

Verify TLS 1.0 and 1.2

```bash
openssl s_client -connect 192.168.64.9:443 -tls1    # Not working

openssl s_client -connect 192.168.64.9:443 -tls1_2  # Working
```

## Rollback TLS

Identify backup directory path

```bash
export BACKUP_DIR_PATH="/home/ubuntu/config_backups/tls1_setup_20250415223857"
```

Stop Nginx service

```bash
sudo systemctl stop nginx
```

Restore configurations from backup

- Restore Nginx site configuration

```bash
sudo cp "$BACKUP_DIR_PATH/nginx/default" /etc/nginx/sites-available/default
```

- Restore OpenSSL configuration

```bash
sudo cp "$BACKUP_DIR_PATH/ssl_configs/openssl.cnf" /etc/ssl/openssl.cnf
```

Test Nginx configuration syntax

```bash
sudo nginx -t
```

Restart Nginx to apply all changes

```bash
sudo systemctl restart nginx
```

Verify TLS 1.0 and 1.2

```bash
openssl s_client -connect 192.168.64.9:443 -tls1    # Working

openssl s_client -connect 192.168.64.9:443 -tls1_2  # Working
