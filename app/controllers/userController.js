const bcrypt = require('bcrypt');

const validator = require("email-validator");



const userController = {
    signupAction: async (request, response) => {

       // étape 4. vérifier si l'email est déjà pris
        const user = await userMapper.oneUser({
            where: {
                email: req.body.email
        }
        });
    }
};

module.exports = userController;