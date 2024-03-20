#!/bin/bash

# Create User & Group
sudo groupadd -f csye6225
sudo useradd -s /usr/sbin/nologin -g csye6225 -d /opt/csye6225 -m csye6225

# Provide Access
sudo chown -R csye6225:csye6225 /opt/csye6225/
sudo chmod -R 775 /opt/csye6225/

# Create directory webapp under /var/log
sudo mkdir -p /var/log/webapp
sudo chown -R csye6225:csye6225 /var/log/webapp
sudo chmod -R 775 /var/log/webapp
