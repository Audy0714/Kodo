// UNIT TESTING USER

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
            pseudo: "Mat5",
            img: "https://fherughre/"
        };
    });

    it('should create an instance of User from an object litteral', function() {
        const theUser = new User(mockUser);

        expect(theUser).to.have.property('email').to.equal('hgugfuh2@gmail.com');
    });
});

// UNIT TESTING ARTICLE
//const Article = require('../app/models/article');
// UNIT TESTING QUESTION
//const Question = require('../app/models/question');
// UNIT TESTING CHALLENGE
//const Challenge = require('../app/models/challenge');