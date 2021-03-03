-- Deploy kodo-ecolo:init to pg

BEGIN;

-- CREATE DOMAIN
CREATE DOMAIN posint AS int CHECK (VALUE > 0);

CREATE TABLE "level" (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL 
);

CREATE TABLE answer (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "description" text NOT NULL,
    level_id posint REFERENCES "level"(id)
);

CREATE TABLE question (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "statement" text NOT NULL,
    answer_id posint REFERENCES answer(id)
);

CREATE TABLE challenge (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "day" text NOT NULL,
    "description" text NOT NULL,
    level_id posint REFERENCES "level"(id)
);

CREATE TABLE article (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title text NOT NULL,
    slug text NOT NULL,
    "description" text NOT NULL,
    story text NOT NULL,
    how text NOT NULL,
    why text NOT NULL,
    challenge_id posint REFERENCES challenge(id)
);

CREATE TABLE "user" (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email text NOT NULL UNIQUE,
    "password" text NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    pseudo text NOT NULL UNIQUE,
    "img" text,
    "date" timestamptz,
    level_id posint REFERENCES "level"(id),
    challenge_id posint REFERENCES challenge(id),
    article_id posint REFERENCES article(id),
    question_id posint REFERENCES question(id)
);

COMMIT;
