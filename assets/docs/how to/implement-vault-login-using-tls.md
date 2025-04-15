# implement vault login using tls - pending

```bash
mkdir -p ~/vault-certs/read/.key
```

Generate a self-signed CA certificate

Create a CA private key and certificate:

```bash
openssl genrsa -out ~/vault-certs/read/ca.key 2048
openssl req -x509 -new -nodes -key ~/vault-certs/read/ca.key -sha256 -days 365 -out ~/vault-certs/read/ca.pem -subj "/CN=LocalVaultCA"
```

Generate a client certificate and key

Create a client private key and certificate signing request (CSR):

```bash
openssl genrsa -out ~/vault-certs/read/.key/client.key 2048
openssl req -new -key ~/vault-certs/read/.key/client.key -out ~/vault-certs/read/client.csr -subj "/CN=vault-client"
```

Sign the client certificate with the CA:

```bash
openssl x509 -req -in ~/vault-certs/read/client.csr -CA ~/vault-certs/read/ca.pem -CAkey ~/vault-certs/read/ca.key -CAcreateserial -out ~/vault-certs/read/client.crt -days 365 -sha256
```

---

Set env

```bash
export VAULT_CERT_ROOT_FOLDER="$HOME/vault-certs/read"
export VAULT_CERT_KEY_FOLDER="${VAULT_CERT_ROOT_FOLDER}/.key"
export VAULT_CACERT="${VAULT_CERT_ROOT_FOLDER}/ca.pem"
export VAULT_CLIENT_CERT="${VAULT_CERT_ROOT_FOLDER}/client.crt"
export VAULT_CLIENT_KEY="${VAULT_CERT_KEY_FOLDER}/client.key"
export VAULT_CERT_NAME="vault-client"
export VAULT_CERT_DB_NAME="vault-client-auth"
```
