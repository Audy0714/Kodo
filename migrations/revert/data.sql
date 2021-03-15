-- Revert kodo-ecologie:data from pg

BEGIN;

    TRUNCATE "user", article, challenge, answer, question, "level";

COMMIT;
