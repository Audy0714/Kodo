-- Revert kodo-ecologie:init from pg

BEGIN;

DROP TABLE "user", article, challenge, answer, question, "level";

DROP DOMAIN posint;

COMMIT;
