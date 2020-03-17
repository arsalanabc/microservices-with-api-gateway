# Microservices Architect
##### Uses the following technologies:
Docker (and Docker Compose)
Node.js
MySQL
Sequelize

## to run
first `npm install` package dependencies for both services
run `docker-compose up` 
ssh into service containers with `docker exec -it {containerID} bash`
run db migration with `npm run db:migrate`