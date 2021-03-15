-- Revert kodo-ecologie:data from pg

BEGIN;

    TRUNCATE "user", article, challenge, question, answer, "level";

COMMIT;
