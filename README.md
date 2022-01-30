# FOR DEVELOPMENT MODE

# Getting started

## Starting app

1. Install docker

2. Running app

   ### i. Both server and client

   -  Run command outside the files(root directory of project)

   ```bash
       docker-compose up --build
   ```

   ### ii. running only client

   -  Run this command inside /client

   ```bash
       docker-compose up --build
   ```

   ### iii. running only server

   -  Run this command inside /server

   ```bash
       docker-compose up --build
   ```

### Note: You only need " --build " flag if you are running app for the first time or if you install new packages.

# FOR PRODUCTION MODE

1. Remove all volumes inside docker-compose.yml
2. Rename Dockerfile.dev to Dockerfile inside docker-compose.yml
3. 
