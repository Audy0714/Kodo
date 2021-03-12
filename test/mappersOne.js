// UNIT TESTING USER

require('dotenv').config();

const db = require('../app/database');

const { expect } = require('chai');

const userMapper = require('../app/models/userMapper');

const User = require('../app/models/user');

let theIds = {};
let theId = {};


describe('userMapper', function() {
    // insertion de fake data
    before(async function() {
        /*{
        const { rows } = await db.query('INSERT INTO "user" (email, password, first_name, last_name, pseudo, img) VALUES($1, $2, $3, $4, $5, $6) RETURNING id;', ['mock email1', 'mock password1','mock firstName1', 'mock lastName1', 'mock pseudo1', 'mock img1']);

        theIds.user = rows[0].id;
        }*/
          mockUser = {
            email: "juugfuh3@gmail.com",
            password: "kopuyjiuy",
            firstName: "Martiness",
            lastName: "Sanchezz",
            pseudo: "Mat54",
            img: "https://fherughre/"
        };
    });

   

    // test fake data
   
    describe('#oneUser()', function() {

        it('should fetch an instance of User', async function() {
            const theUser = await userMapper.oneUser(theIds.mockUser);

            expect(theUser).to.be.an.instanceOf(User);
        });
    });

     // delete fake data
    after(async function() {
        await db.query('DELETE FROM "user" WHERE id = $1;', [theIds.mockUser]);
    });
});



    

   


// UNIT TESTING ARTICLE
// UNIT TESTING QUESTION
// UNIT TESTING CHALLENGE