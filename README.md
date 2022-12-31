# laail-networks

## Problem Statement

<img width="517" alt="image" src="https://user-images.githubusercontent.com/63374020/209855150-cff3a276-7e3c-4bbb-bd07-56475ae6936f.png">


- Pre-requisites
  - Node.js
  - NPM
  - Git


## Description

- Clone the project
  ```bash
  git clone git@github.com:fellow-developers/assignment-laail-network.git
  ```

- Change directory to project
  ```bash
  cd assignment-laail-network
  ```

- Open project in VS Code
  ```bash
  code .
  ```

- Install dependencies
  ```bash
  npm install
  ```

- [Create mongodb database user]((https://www.mongodb.com/docs/manual/reference/method/db.createUser/#mongodb-method-db.createUser))

open terminal and run the following commands

- Open to mongo shell
  ```bash
  mongosh
  ```

- Change to admin database
  ```bash
  use admin
  ```

- Create user for laaildb database

  ```bash
  db.createUser({user: "developer", pwd: "password", roles: [{role: "dbAdmin", db: "laaildb" }]})
  ```

- Exit mongo shell
  ```bash
  exit
  ```

- Enable authorization in mongod configuration file (mongod.cfg)
  
  ```text
  security:
  authorization: enabled
  ```

- Restart mongodb service

  ```cmd
  net stop MongoDB && net start MongoDB
  ```

  Note- 
  - location of mongod.cfg file is different for different OS. For more details refer [here](https://docs.mongodb.com/manual/reference/configuration-options/#security-options)

  - [We can login to mongo shell with authentication](https://www.mongodb.com/community/forums/t/how-to-connect-using-user-id-and-password/8234)
    ```bash
    mongosh --authenticationDatabase 'admin' -u 'developer' -p 'password'
    ```

- Create .env file
  ```bash
  touch .env
  ```

- Add environment variables in .env file
  ```text
  DATABASE_NAME=laaildb
  DATABASE_USER=developer
  DATABASE_PASSWORD=password
  DATABASE_AUTH_SOURCE=admin
  ```

- Build project
  ```bash
  npm run build
  ```

- Run project
  ```bash
  npm start
  ```

- Open browser and go to http://localhost:3000
