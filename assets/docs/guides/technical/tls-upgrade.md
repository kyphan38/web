# tls upgrade

## Prerequisites

--

- Ubuntu server with sudo, network
- Tools: Nginx, OpenSSL
- IP: 192.168.64.9
- Firewall: Allow port 443

## Setup TLS 1.0

Update packages

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

Generate cert and key

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

Config /etc/nginx/sites-available/default

```bash
sudo rm -f /etc/nginx/sites-enabled/default
sudo vim /etc/nginx/sites-available/default
```

Content

```bash
server {
  listen 80 default_server;
  listen [::]:80 default_server;
  server_name _;
  root /var/www/html;
  index index.html index.htm index.nginx-debian.html;
  location / { try_files $uri $uri/ =404; }
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
  location / { try_files $uri $uri/ =404; }
}
```

Link

```bash
sudo ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/
```

Test

```bash
sudo nginx -t
```

Modify OpenSSL (/etc/ssl/openssl.cnf)

- Add at top

```bash
openssl_conf = default_conf
```

- At bottom

```bash
[default_conf]
ssl_conf = ssl_sect

[ssl_sect]
system_default = system_default_sect

[system_default_sect]
MinProtocol = TLSv1
CipherString = DEFAULT:@SECLEVEL=1
```

Restart

```bash
sudo systemctl restart nginx
```

Verify

```bash
openssl s_client -connect 192.168.64.9:443 -tls1
```

## Backup

Create a timestamped backup directory

```bash
TIMESTAMP=$(date +%Y%m%d%H%M%S)
BACKUP_DIR="/home/ubuntu/config_backups/tls1_setup_$TIMESTAMP"
mkdir -p "$BACKUP_DIR/nginx" "$BACKUP_DIR/ssl_configs" "$BACKUP_DIR/nginx_certs"
```

- Backup

```bash
sudo cp /etc/nginx/sites-available/default "$BACKUP_DIR/nginx/"
sudo cp /etc/ssl/openssl.cnf "$BACKUP_DIR/ssl_configs/"
sudo cp -a /etc/nginx/ssl/* "$BACKUP_DIR/nginx_certs/"
```

## Disable TLS 1.0 and Enable TLS 1.2

OpenSSL (/etc/ssl/openssl.cnf)

```bash
MinProtocol = TLSv1.2
```

Nginx config

```bash
ssl_protocols TLSv1.2 TLSv1.3;
ssl_prefer_server_ciphers on;
```

Test

```bash
sudo nginx -t
```

Restart

```bash
sudo systemctl restart nginx
```

Verify

```bash
openssl s_client -connect 192.168.64.9:443 -tls1    # Fails
openssl s_client -connect 192.168.64.9:443 -tls1_2  # Works
```

## Rollback TLS

Set directory

```bash
export BACKUP_DIR_PATH="/home/ubuntu/config_backups/tls1_setup_20250415223857"
```

Stop Nginx service

```bash
sudo systemctl stop nginx
```

Restore configurations from backup

- Restore

```bash
sudo cp "$BACKUP_DIR_PATH/nginx/default" /etc/nginx/sites-available/default
sudo cp "$BACKUP_DIR_PATH/ssl_configs/openssl.cnf" /etc/ssl/openssl.cnf
```

Test

```bash
sudo nginx -t
```

Restart

```bash
sudo systemctl restart nginx
```

Verify

```bash
openssl s_client -connect 192.168.64.9:443 -tls1    # Works
openssl s_client -connect 192.168.64.9:443 -tls1_2  # Works
```
