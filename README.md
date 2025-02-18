# Setup Guide for Transparental Solutions Application

This guide provides step-by-step instructions to set up a Rails application with Ruby, PostgreSQL, and environment credentials.

## Prerequisites

Ensure that you have the following installed on your system:

- Ubuntu (or any Linux-based OS)
- Git
- cURL
- Nano Editor

## 1. Install Ruby 3.1.2

To install Ruby version 3.1.2, follow these steps:

```sh
sudo apt update
sudo apt install -y curl gpg

gpg --keyserver hkp://keys.openpgp.org --recv-keys 886DDD89

git clone https://github.com/rbenv/rbenv.git ~/.rbenv
cd ~/.rbenv && src/configure && make -C src
~/.rbenv/bin/rbenv init

echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
source ~/.bashrc

git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build

echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

rbenv install 3.1.2
rbenv global 3.1.2
ruby -v  # Verify installation
```

## 2. Install PostgreSQL

Install PostgreSQL and configure the default username and password:

```sh
sudo apt update
sudo apt install -y postgresql postgresql-contrib
```

### Configure PostgreSQL

1. Switch to the PostgreSQL user:
   ```sh
   sudo -i -u postgres
   ```
2. Open the PostgreSQL prompt:
   ```sh
   psql
   ```
3. Set the password for the `postgres` user:
   ```sql
   ALTER USER postgres PASSWORD 'postgres';
   ```
4. Exit the PostgreSQL prompt:
   ```sh
   \q
   exit
   ```

> **Note:** If you change the username or password, you must update it in the credentials file.

## 3. Configure Rails Credentials

Create a credentials file for the development environment:

```sh
EDITOR=nano rails credentials:edit --environment development
```

Add the following lines to the file:

```yaml
development:
  database: transparental_soluations_development
  username: postgres
  password: postgres
```

Save and exit the editor.

## 4. Start the Rails Server

After setting up the database and credentials, start the Rails server:

```sh
rails server
```

Your application should now be running!

## Troubleshooting

- If you encounter database connection issues, ensure PostgreSQL is running:
  ```sh
  sudo systemctl start postgresql
  ```
- If the Rails server doesn't start, check logs and dependencies.

For further assistance, refer to the official [Rails documentation](https://guides.rubyonrails.org/).