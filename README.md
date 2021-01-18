# Versions

node: 14

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

    connection on: localhost:3306

    MYSQL_DATABASE: whatsapp_statistics
    MYSQL_USER: root
    MYSQL_PASSWORD: root
    MYSQL_ROOT_PASSWORD: root

# get Mysql host

```sh
docker exec db cat /etc/hosts
```

# IPs

preact client: 10.5.0.4

node server: 10.5.0.5

db mysql: 10.5.0.6
