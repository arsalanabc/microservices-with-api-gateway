# Microservices Architect
##### Uses the following technologies:
Docker (and Docker Compose)
Node.js
MySQL
Sequelize
Graphql with apollo-server

## To provision the cluster
first `npm install` package dependencies for both services
run `docker-compose up` 
ssh into service containers with `docker exec -it {containerID} bash`
run db migration with `npm run db:migrate`

### listing service
running at `http://localhost:7100/`
to create dummy listings hit `/create-dummy-listings` endpoint 

### users service
running at `http://localhost:7101/`
to create users via curl `curl -d '{"email":"test@example.com", "password":"password"}' -H 'Content-Type: application/json' http://localhost:7101/users`

### API-gateway
running at `http://localhost:7000/graphql`
    mutations
        CreateUser(email: string, password: string)
        CreateUserSession(email: string, password: string)

### Classified App
in the project dir run `npm run watch`
running at `http://localhost:7001`

