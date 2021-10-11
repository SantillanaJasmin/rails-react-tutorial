# README

Improved rails-react app with basic CRUD based on https://www.honeybadger.io/blog/react-rails/

Prerequisites:
* Docker: https://docs.docker.com/engine/install/ubuntu/
  ** After installing docker engine, user must be added to docker group to avoid running docker with root user: https://docs.docker.com/engine/install/linux-postinstall/
* Docker Compose: https://docs.docker.com/compose/install/
* Git
* Ruby 2.7.0: this can be installed using rbenv (https://github.com/rbenv/rbenv#installation)

Setup note:
`DOCKER_UID` and `DOCKER_GID` arguments in docker-compose.yml must be changed based on the result of running `id -u` and `id -g` in terminal respectively

To build docker container:
```
/rails-react$ docker-compose build web
```

To run docker container:
```
/rails-react$ docker-compose up
```

To run docker container in background (detached mode):
```
/rails-react$ docker-compose up -d
```

To enter container bash (as root):
```
/rails-react$ docker-compose run --rm web bash
```

To enter container bash (as non-root user):
```
/rails-react$ docker-compose run --rm --user="app" web bash
```

 