## Project

La transition écologique kodo-ecolo

## Stack

- Node 10+
- dotenv
- Express
- pg
- cors
- jwt (token)
- PostgreSQL 11+
- Sqitch
- dataMapper
- JSDOC
  
## configuration

npm init -y
sqitch init kodo-ecolo --engine pg
sqitch config --user engine.pg.client psql
createdb kodo-ecolo
sqitch deploy
sqitch revert db:pg:kodo-ecolo
sqitch verify db:pg:kodo-ecolo

npm start for node index.js
(npm test for TU)


### Deployment method

https://kodo-ecolo.herokuapp.com/v1