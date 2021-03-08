const { request } = require('express');

const { response } = require('express');

const bcrypt = require('bcrypt');


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
        const userData = {
            email: request.body.email,
            password: hashPassword,
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            pseudo: request.body.pseudo,
            img: request.body.img,
            date: request.body.date
        };
        
        const theUser = new User(userData);

        try {

            await userMapper.save(theUser);
            console.log(hashPassword);
            console.log(theUser);

            response.json(theUser);
            console.log("The new user was well created");

        } catch (error) {
            response.status(403).json(error.message);
        }
    },

    /**
     * @async   
     * @function loginAction - connected a user
     * @param  { Express.Request } request - userMapper.findByEmail(userEmail)
     * @param  { Express.Response } response - response.json(theUser)
     */
    loginAction: async (request, response) => {
        
          try {
            const userEmail = request.body.email;
            console.log(userEmail);

            const theUser = await userMapper.findByEmail(userEmail);

            // if user not exists
            if (!theUser) {
                return response.status(400).json('Invalid email or password');
            }

            // verify passwords
            const validPassword = await  bcrypt.compare(request.body.password, theUser.password);

            // if password not match
            if (!validPassword) {
                return response.status(400).json('Invalid email or password');
            }

            response.json(theUser);

            console.log(validPassword);

        } catch (error) {
            response.status(403).json(error.message);
        }
    }
};

module.exports = userController;