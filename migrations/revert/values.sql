-- Revert kodo-ecolo:values from pg

BEGIN;

DELETE FROM answer WHERE id = 1;

COMMIT;
