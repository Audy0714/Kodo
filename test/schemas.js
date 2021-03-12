// UNIT TESTING USER SCHEMAS

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

    // 2 cas

    it('should validate a valid User', function() {
        // valider un schéma valide, ça fonctionne
        // validate sur un schema Joi retourne un objet avec systématiquement une propriété value
        // et, en cas d'erreur, une propriété error
        expect(userSchema.validate(mockUser)).not.to.have.property('error');
    });

    it('should not validate a User with an existing email', function() {

        // valider un schema invalide retourne une erreur
        mockUser.email = "hgugfuh3@gmail.com";

        const validation2 = userSchema.validate(userSchema);

        // pas de not car il doit y avoir une erreur
        expect(validation2).to.have.property('error');
        
        // tous les tests intermédiaires sur le format d'erreurs sont inutiles
        // car ils sont déjà testé par JOI, qui fournit cet objet error
        expect(validation2.error.details[0].path[0]).to.equal('email');
       
    });

});