// UNIT TESTING

require('dotenv').config();

const { expect } = require('chai');

const userSchema = require('../app/schemas/userSchema');

// on déclare mockUser dans le contexte global (sinon erreur des tests), mais il sera initialisé dans le before
let mockUser;

describe('User Schema', function() {
    // préparer un contexte favorable à l'exécution des TU
    before(function() {
        // l'objet user à valider
        mockUser = {
            email: "hgugfuh3@gmail.com",
            password: "kopuyjiuy",
            firstName: "Martines",
            lastName: "Sanchez",
            pseudo: "Mat4",
            img: "https://fherughre/"
        };
    });

    it('should validate a valid User', function() {
        // valider un schéma valide, ça fonctionne
        // validate sur un schema Joi retourne un objet avec systématiquement une propriété value
        // et, en cas d'erreur, une propriété error
        expect(userSchema.validate(mockUser)).not.to.have.property('error');
    });
});