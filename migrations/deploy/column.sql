-- Deploy kodo-ecolo:column to pg

BEGIN;

ALTER TABLE answer ADD COLUMN question_id posint;

ALTER TABLE answer
    ADD FOREIGN KEY (question_id) REFERENCES question(id);

COMMIT;
