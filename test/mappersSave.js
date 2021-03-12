require('dotenv').config();

const db = require('../app/database');

const { expect } = require('chai');

const userMapper = require('../app/models/userMapper');

const User = require('../app/models/user');

let theIds = {};

describe('userMapper', function() {
    // insertion de fake data
   /* before(async function() {
        {
        const { rows } = await db.query('INSERT INTO "user" (email, password, first_name, last_name, pseudo, img) VALUES($1, $2, $3, $4, $5, $6) RETURNING id;', ['mock email', 'mock password','mock lastName', 'mock firstName', 'mock pseudo', 'mock img']);

        theIds.user = rows[0].id;
        }
    });*/

      mockUser = {
            email: "hgdggdfuh3@gmail.com",
            password: "kopuyjiuy",
            firstName: "Martines",
            lastName: "Sanchez",
            pseudo: "Nat4",
            img: "https://fherughre/"
        };
    


    describe('#updateUser()', function() {

        it('should fetch an instance of User', async function() {
            const emailUser = await userMapper.findByEmail(mockUser.email);
            const theUser = await userMapper.updateUser(theIds.mockUser);

            expect(theUser).to.be.an.instanceOf(User);
        });
    });

    // delete fake data
    after(async function() {
        await db.query('DELETE FROM "user" WHERE id = $1;', [theIds.mockUser]);
    });
});