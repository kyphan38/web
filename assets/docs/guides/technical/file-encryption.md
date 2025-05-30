# file encryption

## Requirements

- OpenSSL
- A Linux remote server

## Symmetric Encryption

Let's walk through the steps of implementing a simple symmetric encryption to better understand the process

- Server A is to encrypt
- Server B is to decrypt

### Step 1: Generate a Symmetric Key

**Sever: A**

We need to generate a random key for encryption. The key should be 256 bits (32 bytes) which is the standard size for AES-256 encryption

``` bash
openssl rand -out secret.key 32
```

### Step 2: Create a Simple File

**Sever: A**

Create a plain text file for encryption

``` bash
echo "This is a simple line of code" > text.txt
```

### Step 3: Encrypt the File

**Sever: A**

Use the above `secret.key` to encrypt the `text.txt`

``` bash
openssl enc -aes-256-cbc -pbkdf2 -in text.txt -out text_encrypted.dat -pass file:./secret.key
```

### Step 4: Transfer the Key to Server B

**Sever: B**

This step is optional as it depends on the specific circumstances

:::tip
For better security, transfer files using SSH rather than manually entering passwords
:::

Assuming

- The IP address of Server B is `52.221.181.100`
- The username on Server B is `abc`

Use scp (secure copy) to transfer the encrypted file and key

``` bash
scp ./text_encrypted.dat ./secret.key abc@52.221.181.100:/home/abc/
```

### Step 5: Decrypt the File

**Sever: B**

Use the secret key to decrypt the file

``` bash
openssl enc -d -aes-256-cbc -pbkdf2 -in text_encrypted.dat -out text_decrypted.txt -pass file:./secret.key
```

### Drawbacks

While symmetric encryption is fast and efficient, it does have some drawbacks, especially when it comes to key distribution and security

- In large system, securely sharing symmetric keys between many different users can be a logistical nightmare
- Both the sender and receiver must securely exchange the key beforehand. If the key is intercepted, any can decrypt the data

## Asymmetric Encryption

Asymmetric encryption is commonly used in communication between multiple users and a sever to ensure data confidentiality, integrity, and authenticity

- It is typically implemented in the context of protocols like SSL/TLS (used in HTTPS) or for secure communication

Server

- Generate a private key and a public key
- Share the public key with all users
- Use the user's public key to encrypt and the server's private key to decrypt

Each User

- Generates their own private and public key
- Sends their own public key to the server
- Use the server's public key to encrypt and their own private key to decrypt

### Step 1: Generate a Private and a Public Key

**Server**

Generate the private key using the following command. You will be prompted to enter a passphrase to protect the private key, which will be required for decryption later

``` bash
openssl genpkey -algorithm RSA -aes256 -out server_private_key.pem
```

Generate the public key from the private key

``` bash
openssl rsa -pubout -in server_private_key.pem -out server_public_key.pem
```

**User**

The process is the same for User

``` bash
openssl genpkey -algorithm RSA -aes256 -out user_private_key.pem
```

``` bash
openssl rsa -pubout -in user_private_key.pem -out user_public_key.pem
```

### Step 2: Transfer Public Keys

Assuming

- The IP address of Server is `52.221.181.100`
- The username on Server is `abc`

User sends their `user_public_key.pem` to Server

``` bash
scp ./user_public_key.pem abc@52.221.181.100:/home/abc/user_public_key.pem
```

Sever sends their `server_public_key.pem` to User

``` bash
scp abc@52.221.181.100:/home/abc/server_public_key.pem ./server_public_key.pem
```

### Step 3: User Creates and Encrypts File

Create a plain text file for encryption

``` bash
echo "Is this correct?" > user_text.txt
```

Use `server_public_key.pem` to encrypt the file

``` bash
openssl pkeyutl -encrypt -inkey server_public_key.pem -pubin -in text.txt -out user_text_encrypted.dat
```

### Step 4: User Transfers File to Server

Transfer the encrypted file to Server

``` bash
scp ./user_text_encrypted.dat abc@58.222.188.111:/home/abc/user_text_encrypted.dat
```

### Step 5: Server Decrypts File

Use `server_private_key.pem` to decrypt the file

``` bash
openssl pkeyutl -decrypt -inkey server_private_key.pem -in user_text_encrypted.dat -out user_text_decrypted.txt
```

### Step 6: Sever Creates and Encrypts File

Create a plain text file for a response

``` bash
echo "This is correct!" > text.txt
```

Use `user_public_key.pem` to encrypt the file

``` bash
openssl pkeyutl -encrypt -inkey user_public_key.pem -pubin -in text.txt -out server_text_encrypted.dat
```

### Step 7: Server Transfers File to User

Transfer the encrypted file to User

``` bash
scp abc@58.222.188.111:/home/abc/server_text_encrypted.dat ./server_text_encrypted.dat
```

### Step 8: User Decrypts File

Use `user_private_key.pem` to decrypt the file

``` bash
openssl pkeyutl -decrypt -inkey user_private_key.pem -in server_text_encrypted.dat -out server_text_decrypted.txt
```
