-- Revert kodo-ecolo:insert from pg

BEGIN;

TRUNCATE "user", article, challenge, question, answer, "level";

COMMIT;
