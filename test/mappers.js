// UNIT TESTING USER

require('dotenv').config();

const db = require('../app/database');

const { expect } = require('chai');

const userMapper = require('../app/models/userMapper');

const User = require('../app/models/user');

let theIds = {};
//let theUser = {};

describe('userMapper', function() {
    // insertion de fake data
    before(async function() {
        
        const { rows } = await db.query('INSERT INTO "user" (email, password, first_name, last_name, pseudo, img) VALUES($1,$2, $3, $4, $5, $6) RETURNING id;', ['mock', 'mock','mock', 'mock', 'mock', 'mock']);

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

/*describe('userMapper', function() {
    // insertion de fake data
    before(async function() {
        
        const { rows } = await db.query('INSERT INTO "user" (email, password, first_name, last_name, pseudo, img) VALUES($1,$2, $3, $4, $5, $6) WHERE email = $1 AND pseudo = $5 RETURNING id;', ['mock1 email', 'mock1 password','mock1 first_name', 'mock1 last_name', 'mock1 pseudo', 'mock1 img']);

        theIds.user = rows[0].id;
    });

    // delete fake data
    after(async function() {
        await db.query('DELETE FROM "user" WHERE id = $1;', [theIds.user]);
    });
    describe('#save()', function() {

        it('should fetch an instance of User', async function() {
            const theUser = await userMapper.save(theIds.user);

            expect(theUser).to.be.an.instanceOf(User);
        });
    });
});*/
    

   


// UNIT TESTING ARTICLE
// UNIT TESTING QUESTION
// UNIT TESTING CHALLENGE