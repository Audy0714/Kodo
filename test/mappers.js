// UNIT TESTING ARTICLE QUESTION CHALLENGE USER

require('dotenv').config();

const { expect } = require('chai');

const db = require('../app/database');


// UNIT TESTING ARTICLE MAPPER AND MODEL

const articleMapper = require('../app/models/articleMapper');

const Article = require('../app/models/article');

let theIds = {};

describe('Article Mapper and Model', function() {

    // insert fake data
    before(async function() {

        const { rows } = await db.query('INSERT INTO article (title, slug, description, story, how, why) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;', ['mock title', '/mock slug', 'mock description', 'mock story', 'mock how', 'mock why']);
        
        theIds.article = rows[0].id;
    });

    // delete fake data
    after(async function() {

        await db.query('DELETE FROM article WHERE id = $1;', [theIds.article]);

    });

    // test fake data
    describe('#oneArticle()', function() {
        it('Should fetch an instance of Article', async function() {
            const theArticle = await articleMapper.oneArticle(theIds.article);

            expect(theArticle).to.be.an.instanceOf(Article);
        });
    });
});


// UNIT TESTING QUESTION MAPPER AND MODEL

const questionMapper = require('../app/models/questionMapper');

const Question = require('../app/models/question');

describe('Question Mapper and Model', function() {

    // insert fake data
    before(async function() {

        const { rows } = await db.query('INSERT INTO question (statement) VALUES ($1) RETURNING id;', ['mock statement']);
        
        theIds.question = rows[0].id;
    });

    // delete fake data
    after(async function() {

        await db.query('DELETE FROM question WHERE id = $1;', [theIds.question]);

    });

    // test fake data
    describe('#oneQuestion()', function() {
        it('Should fetch an instance of Question', async function() {
            const theQuestion = await questionMapper.oneQuestion(theIds.question);

            expect(theQuestion).to.be.an.instanceOf(Question);
        });
    });
});


// UNIT TESTING CHALLENGE MAPPER AND MODEL

const challengeMapper = require('../app/models/challengeMapper');

const Challenge = require('../app/models/challenge');

describe('Challenge Mapper and Model', function() {

    // insert fake data
    before(async function() {

        const { rows } = await db.query('INSERT INTO challenge (day, description) VALUES ($1, $2) RETURNING id;', ['mock day', 'mock description']);
        
        theIds.question = rows[0].id;
    });

    // delete fake data
    after(async function() {

        await db.query('DELETE FROM challenge WHERE id = $1;', [theIds.challenge]);

    });

    // test fake data
    describe('#oneChallenge()', function() {
        it('Should fetch an instance of Question', async function() {
            const theChallenge = await challengeMapper.oneChallenge(theIds.challenge);

            expect(theChallenge).to.be.an.instanceOf(Challenge);
        });
    });
});


// UNIT TESTING USER MAPPER

const userMapper = require('../app/models/userMapper');

const User = require('../app/models/user');

describe('User Mapper', function() {
    // insert fake data
    before(async function() {
        
        const { rows } = await db.query('INSERT INTO "user" (password, email, first_name, last_name, img, pseudo, date) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id;', ['mock email', 'mock password','mock firstName', 'mock lastName', 'mock pseudo', 'mock img', 2021030]);

        theIds.user = rows[0].id;
    });

    // delete fake data
    after(async function() {
        await db.query('DELETE FROM "user" WHERE id = $1;', [theIds.user]);
    });

    // test fake data
    describe('#oneUser()', function() {

        it('should fetch an instance of User', async function() {
            const theUser = await userMapper.oneUser(theIds.user);

            expect(theUser).to.be.an.instanceOf(User);
        });
    });
});