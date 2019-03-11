# Docker/Docker Compose Excercise
A small exercise that exercise that teaches the basic of Docker/Docker Compose as development tools.
The repository contains an API that has one endpoint (`/`), that returns all the document from a MongoDB instance. 
The code for the API is under `src`.
The repository also contains integration tests (under `test`). The test calls the single endpoint and makes sure it returns an empty array.

This guide was tested on:
* Windows - Docker version Version 2.0.0.0-win81 (29211)
* Mac - Docker version Version 2.0.0.3 (31259)

In case something is misbehave, make sure you have this version or above.

## Step 0 - Running locally
Run the tests manually. To run the tests, we first need a MongoDB instance.
* Use `docker` to run a MongoDB instance on your machine. Make sure you use an official image. Hint: Mongo is running on port 27017, make sure you publish this port. To test connection use one of the following:
    * `nc -vz localhost 27017` (Linux/OSX)
    * `Test-NetConnection -Computer localhost -Port 27017` (Windows)
* Try to run the tests:
`yarn install && yarn test`
* If you did everything correctly, the test will run successfully.

## Step 1 - Adding a docker container
Local running is nice, but how can we run this in the CI? Let's start with writing a docker file for the API.
* Write a docker file for the API, and build it.
* Try to run the tests inside the docker file. Did it fail? How can we solve it?
* Change something in the code (for example, the server port), and re-build the docker image. Did `yarn install` command run? How can we make it more efficient?

## Step 2 - Adding docker compose
Now that we have an image, let's add docker compose!
* Start with writing a basic `docker-compose.yml` file that builds the API image. 
* Now add another service - with the MongoDB image.
* Now try to connect the API to the database, and make the tests to pass.

## Need a hint?
Take a look at the `solution` folder!
