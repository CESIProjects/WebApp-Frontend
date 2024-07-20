# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
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
