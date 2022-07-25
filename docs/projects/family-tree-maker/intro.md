---
sidebar_position: 1
---

# Introduction

Open source family tree maker built with React. Currently under development. Will add design docs, etc. later.

Consists of 3 parts:

1. Web app
1. Backend
1. Deployment

This app is built to run with Firebase and Kubernetes

# How to run?

See https://gitlab.com/familytreemaker/family-tree-maker-deployment

# Legacy Notes below

## How to run

First, checkout the backend and run it:

```bash
git clone git@gitlab.com:sureshgururajan/family-tree-maker-backend.git
cd family-tree-maker-backend
npm install
npm start
```

```bash
git clone https://gitlab.com/sureshgururajan/family-tree-maker.git
cd family-tree-maker
npm install
npm start
```

## If using Docker

Referred https://mherman.org/blog/dockerizing-a-react-app/

### Development

```bash
docker build -t familytreemaker-frontend:alpha .

docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    familytreemaker-frontend:alpha
```

Use `-itd` to run the container detached

### Production

```bash
docker build -f Dockerfile.prod -t familytreemaker-frontend:prod .

docker run -it --rm -p 3001:80 sample:prod

docker push familytreemaker-webapp:latest
```

## Screenshots

### Release v0.0.2 - Current

![](https://gitlab.com/familytreemaker/family-tree-maker/-/raw/main/docs/images/screenshot-v0.0.2.png)

### Older release images

See https://gitlab.com/sureshgururajan/family-tree-maker/-/tree/main/docs/images
