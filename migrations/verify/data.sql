-- Verify kodo-ecologie:data on pg

BEGIN;

SELECT "name" FROM "level";

SELECT "statement" FROM question;

SELECT "description" FROM answer;

SELECT "day", level_id FROM challenge;

SELECT title, story, challenge_id FROM article;

SELECT email, pseudo FROM "user";

ROLLBACK;