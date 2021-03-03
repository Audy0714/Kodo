## Project

La transition écologique

## Stack

- Node 10+
- dotenv
- Express
- pg
- cors
- PostgreSQL 11+
- Sqitch
- dataMapper
- JSDOC
  
## configuration

npm init -y
sqitch init kodo-ecolo --engine pg
sqitch config --user engine.pg.client psql
createdb kodo-ecolo
sqitch deploy db:pg:kodo-ecolo
sqitch revert db:pg:kodo-ecolo
sqitch verify db:pg:kodo-ecolo

node index.js
npm start


### Deployment method

https://kodo-ecolo.herokuapp.com/v1