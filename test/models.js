// UNIT TESTING USER MODELS

require('dotenv').config();

const { expect } = require('chai');

const User = require('../app/models/user');

describe('User Model', function() {
    // préparer un contexte favorable à l'exécution des TU
    before(function() {
        // l'objet user à valider
        mockUser = {
            email: "hgugfuh2@gmail.com",
            password: "kopuyjiuy",
            firstName: "Martines",
            lastName: "Sanchez",
            pseudo: "Mat6",
            img: "https://fherughre/"
        };
    });

    it('should create an instance of User from an object litteral', function() {
        const theUser = new User(mockUser);

        expect(theUser).to.have.property('email').to.equal('hgugfuh2@gmail.com');
    });

});
