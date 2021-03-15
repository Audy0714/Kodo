-- Revert kodo-ecolo:column from pg

BEGIN;

ALTER TABLE answer DROP question_id;

COMMIT;
