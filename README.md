# WebApp-Frontend

## Project Setup

```sh
cd WebApp-Frontend
```

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### No build, everything with docker as fine :sunglasses:

#### docker-compose.yml

In main folder -> :

* CESI_PROJECT
    * WebApp-Frontend
    * WebApp-Backend
    * docker-compose.yml
 
Put it here and write this inside : (Only the front for the moment, backend will be added)

```sh
version: '3'

services:
  frontend:
    build:
      context: ./WebApp-Frontend
      dockerfile: Dockerfile.frontend
    ports:
      - "3000:80"
    networks:
      - my-network
    restart: no

networks:
  my-network:
```

```sh
docker compose up --build
```

-> [Local docker address created](http://localhost:3000/)
