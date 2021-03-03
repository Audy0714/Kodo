-- Verify kodo-ecolo:insert on pg

BEGIN;

SELECT * FROM "level";

SELECT * FROM answer;

SELECT * FROM question;

SELECT "day", level_id FROM challenge;

SELECT title, story, challenge_id FROM article;

SELECT email, pseudo FROM "user"

ROLLBACK;
