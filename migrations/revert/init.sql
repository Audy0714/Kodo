-- Revert kodo-ecolo:init from pg

BEGIN;

DROP TABLE "user", article, challenge, question, answer, "level";

DROP DOMAIN posint;

COMMIT;
