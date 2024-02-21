#!/bin/bash

# Unzip packages
sudo unzip /tmp/webapp.zip -d /opt/csye6225/

# Go to Webapp Dir
cd /opt/csye6225/webapp/

# Logging env file
cat .env

# Install node packages
sudo npm install