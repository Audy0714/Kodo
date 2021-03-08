const { request } = require('express');

const { response } = require('express');

const bcrypt = require('bcrypt');

const validator = require("email-validator");

const userMapper = require('../models/userMapper');

const User = require('../models/user');

const userController = {
 
    /**
     * @async   
     * @function signupAction - registering a new user
     * @param  { Express.Request } request - userMapper.save(theUser)
     * @param  { Express.Response } response - response.json(theUser)
     */
    signupAction: async (request, response) => {

        // generate salt
        const salt = await bcrypt.genSalt(10);
        // hash password
        const hashPassword = await bcrypt.hash(request.body.password, salt);
        // data the new user
        /*const userData = {
            email: request.body.email,
            password: hashPassword,
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            pseudo: request.body.pseudo,
            img: request.body.img,
            date: request.body.date
        };*/
        
        const theUser = new User(request.body);

        try {

            await userMapper.save(theUser);
            console.log(hashPassword);
            console.log(theUser);

            response.json(theUser);
            console.log("The new user was well created");

        } catch (error) {
            response.status(403).json(error.message);
        }
    }

    /*loginUser: async (request, response) => {
        console.log(request.body);
        // on vérifie si l'utilisateur existe
        const userEmail = request.body.email;

        const userInDB  = await userMapper.findByEmail(email);
    }*/
};

module.exports = userController;