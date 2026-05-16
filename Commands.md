Docker Basic Commands
docker --version

➡ Docker version check

docker pull ubuntu

➡ Docker image download karna

docker images

➡ Saari downloaded images dekhna

docker run ubuntu

➡ Container start karna

docker run -it ubuntu bash

➡ Interactive terminal ke sath Ubuntu container open

docker ps

➡ Running containers dekhna

docker ps -a

➡ Sab containers dekhna (stopped bhi)

docker stop <container_id>

➡ Container stop karna

Example:

docker stop abcd1234
docker start <container_id>

➡ Stopped container restart

docker rm <container_id>

➡ Container delete

docker rmi <image_id>

➡ Image delete

Port Mapping
docker run -p 8000:8000 myapp

➡ Local port ko container port se connect karta hai

Format:

host_port:container_port
Name Dena Container Ko
docker run --name mycontainer ubuntu
Background Me Run Karna
docker run -d nginx

➡ -d = detached mode

Logs Dekhna
docker logs <container_id>

Live logs:

docker logs -f <container_id>
Container Ke Andar Jana
docker exec -it <container_id> bash
Dockerfile Build
docker build -t myapp .

➡ Current folder ka Dockerfile build karega

Docker Compose
docker compose up

➡ Saare services start

docker compose down

➡ Saare containers stop

Useful Cleanup Commands
docker system prune

➡ Unused data cleanup

docker container prune

➡ Stopped containers delete

AI/ML Me Useful
Jupyter Notebook Run
docker run -p 8888:8888 jupyter/base-notebook
Python Container
docker run -it python:3.12
FastAPI App Run
docker run -p 8000:8000 fastapi-app
Ek Simple Dockerfile
FROM python:3.12

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

CMD ["python", "app.py"]
Important Shortcuts
Command	Meaning
-it	interactive terminal
-d	background mode
-p	port mapping
--name	custom name
docker exec	container ke andar jana
docker logs	logs dekhna