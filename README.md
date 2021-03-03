## Project

La transition écologique

## Stack

- Node 10+
- dotenv
- Express
- pg
- PostgreSQL 11+
- Sqitch
  
## configuration

sqitch init kodo-ecolo --engine pg
sqitch config --user engine.pg.client psql
sqitch deploy db:pg:kodo-ecolo
sqitch revert db:pg:kodo-ecolo
sqitch verify db:pg:kodo-ecolo

nodemon index.js

### Deployment method

https://kodo-ecolo.herokuapp.com/v1