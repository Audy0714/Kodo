## Project

La transition écologique kodo-ecologie

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
sqitch init kodo-ecologie --engine pg
sqitch config --user engine.pg.client psql
createdb kodo-ecologie
sqitch deploy
sqitch revert db:pg:kodo-ecologie
sqitch verify db:pg:kodo-ecologie

npm start for node index.js
npm test for TU (mocha/chai)


### Deployment method

https://kodo-ecologie.herokuapp.com/v1