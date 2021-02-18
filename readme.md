Run this to build the NGINX server image to serve static content
```sh
docker build -t nginx-server -f Dockerfile.nginx .
```

Run this to serve static content with the host volume mounted
```sh
docker run -it -p 3001:80 -v "$PWD":/www/data nginx-server
```

>NB: Changes made to the index.html file on the host reflects in the container. You can reload the browser to see this changes on the host port 3001

---

Run this to build the APACHE server image to serve static content
```sh
docker build -t apache-server -f Dockerfile.apache .
```

Run this to serve static content with the host volume mounted
```sh
docker run -it -p 3003:80 -v "$PWD":/www/data apache-server
```

>NB: Changes made to the index.html file on the host reflects in the container. You can reload the browser to see this changes on the host port 3003

---

Change directory to node-postgres-docker-compose-starter dir
```sh
cd node-postgres-docker-compose-starter
```
Run the docker-compose command to bootstrap the server
```sh
docker-compose up --build
```

This will start the server and postgres DB

>NB: You can visit the test route on localhost:3000/test_db
