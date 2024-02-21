#!/bin/bash

# Install zip
sudo yum install -y unzip

# Install node.js
sudo yum install -y gcc-c++ make
curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -
sudo yum install -y nodejs
node -v
npm -v

# Install postgres
sudo yum install -y postgresql-server postgresql-contrib
sudo postgresql-setup --initdb
sudo systemctl start postgresql.service
sudo systemctl enable postgresql.service

# Set up db & user
sudo -u postgres psql -c "CREATE DATABASE nagalekha;"
sudo -u postgres psql -c "CREATE USER postgres WITH PASSWORD '12345678';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE nagalekha TO postgres;"
sudo sed -i.bak 's/ident/md5/g' /var/lib/pgsql/data/pg_hba.conf
sudo systemctl restart postgresql
