#!/bin/bash

# Unzip packages
sudo unzip /tmp/webapp.zip -d /opt/csye6225/

# Go to Webapp Dir
cd /opt/csye6225/webapp/

# Logging env file
cat .env

# Load environment variables
# source .env || { echo "Failed to load environment variables from .env file."; exit 1; }

# Set up db & user
# sudo -u postgres psql -c "CREATE DATABASE $DATABASE_NAME;"
# sudo -u postgres psql -c "CREATE USER $DATABASE_USERNAME WITH PASSWORD '$DATABASE_PASSWORD';"
# sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE $DATABASE_NAME TO $DATABASE_USERNAME;"
# sudo sed -i.bak 's/ident/md5/g' /var/lib/pgsql/data/pg_hba.conf || { echo "Failed to update pg_hba.conf."; exit 1; }
# sudo systemctl restart postgresql || { echo "Failed to restart PostgreSQL service."; exit 1; }

# Install node packages
sudo npm install