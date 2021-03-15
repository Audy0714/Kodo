-- Deploy kodo-ecolo:values to pg

BEGIN;

UPDATE answer SET question_id = 1 WHERE id = 1;
UPDATE answer SET question_id = 1 WHERE id = 2;
UPDATE answer SET question_id = 1 WHERE id = 3;

UPDATE answer SET question_id = 2 WHERE id = 4;
UPDATE answer SET question_id = 2 WHERE id = 5;
UPDATE answer SET question_id = 2 WHERE id = 6;

UPDATE answer SET question_id = 3 WHERE id = 7;
UPDATE answer SET question_id = 3 WHERE id = 8;
UPDATE answer SET question_id = 3 WHERE id = 9;

UPDATE answer SET question_id = 4 WHERE id = 10;
UPDATE answer SET question_id = 4 WHERE id = 11;
UPDATE answer SET question_id = 4 WHERE id = 12;

UPDATE answer SET question_id = 5 WHERE id = 13;
UPDATE answer SET question_id = 5 WHERE id = 14;
UPDATE answer SET question_id = 5 WHERE id = 15;

UPDATE answer SET question_id = 6 WHERE id = 16;
UPDATE answer SET question_id = 6 WHERE id = 17;
UPDATE answer SET question_id = 6 WHERE id = 18;

UPDATE answer SET question_id = 7 WHERE id = 19;
UPDATE answer SET question_id = 7 WHERE id = 20;
UPDATE answer SET question_id = 7 WHERE id = 22;

UPDATE answer SET question_id = 8 WHERE id = 23;
UPDATE answer SET question_id = 8 WHERE id = 24;
UPDATE answer SET question_id = 8 WHERE id = 25;

UPDATE answer SET question_id = 9 WHERE id = 26;
UPDATE answer SET question_id = 9 WHERE id = 27;
UPDATE answer SET question_id = 9 WHERE id = 28;

UPDATE answer SET question_id = 10 WHERE id = 29;
UPDATE answer SET question_id = 10 WHERE id = 20;
UPDATE answer SET question_id = 10 WHERE id = 21;

COMMIT;