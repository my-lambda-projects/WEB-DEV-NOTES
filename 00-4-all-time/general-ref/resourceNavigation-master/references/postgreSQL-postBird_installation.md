# Post Sql

## Installing PostgreSql and Postboard
### Install PostgreSQL 12
[Download link](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)


You don't want pgAdmin nor the Stack Builder things. Uncheck. Uncheck. Next


## This is specific to wsl -v 1 and windows running ubuntu

### Installing PostgreSQL Client Tools on Ubuntu
	wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
	echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" | sudo tee  /etc/apt/sources.list.d/pgdg.list
	
	
	sudo apt update
	sudo apt install postgresql-client-12 postgresql-common
	echo 'to see version psql--version"
```
add alias
alias psql="psql -h localhost"

create user
```console
	psql -U postgres -c "CREATE USER `whoami` WITH PASSWORD 'password' SUPERUSER"
	echo "to see who"
	psql -U postgres postgres
	echo " replace with password"
	psql -U postgres -c "CREATE USER `whoami` WITH PASSWORD 'password' SUPERUSER"
	echo "create password"
	code ~/.pgpass
	echo "set replacing variables"
	echo" PLACE IN FILE 
localhost:5432:*:«your Ubuntu user name»:«the password you just used»"

	echo"change permissions so only you can read it"
	chmod go-rw ~/.pgpass
	echo " to confirm"
	ls -al ~/.pgpass

## Installin Postbird 

[link to Postbird gh](https://github.com/Paxa/postbird/releases)

Install

When it's done installing, it will launch itself. Test it out by typing the "postgres" into the "Username" field and the password from your installation in the "Password" field. Click the Connect button. It should properly connect to the running

