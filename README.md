# Versions

node: 14

# Global install

- preact cli

```sh
npm install -g preact-cli
```

- Install Docker

# Docker commands

```sh
docker-compose up --build --remove-orphans
```

```sh
docker-compose down
```

```sh
docker ds
```

```sh
docker-compose exec client sh
```

```sh
docker-compose exec server sh
```

```sh
docker-compose exec db sh
```

# preact App

http://localhost:3000

# node server

http://localhost:3001

# Mysql user for Docker machine

    MYSQL_DATABASE: -
    MYSQL_USER: root
    MYSQL_PASSWORD: root

    External connection on: localhost:3306

    MYSQL_DATABASE: "whatsapp_statistics"
    MYSQL_USER: "whatsapp_user"
    MYSQL_PASSWORD: "whatsapp_user00"

# get Mysql host

```sh
docker exec db cat /etc/hosts
```

# IPs

preact client: 10.5.0.4

node server: 10.5.0.5

db mysql: 10.5.0.6
