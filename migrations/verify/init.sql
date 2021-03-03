-- Verify kodo-ecolo:init on pg

BEGIN;

SELECT * FROM "level";

SELECT "description" FROM answer;

SELECT * FROM question;

SELECT "day", level_id FROM challenge;

SELECT title, story, challenge_id FROM article;

SELECT email, pseudo FROM "user"

ROLLBACK;
