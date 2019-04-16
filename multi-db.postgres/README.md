docker run \
    --name postgres \
    -e POSTGRES_USER=lucas2502 \
    -e POSTGRES_PASSWORD=2502119513 \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres

docker ps
docker exec -it postgres /bin/bash

docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin \
    -d \
    mongo:4

docker run \
    --name mongoclient \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient