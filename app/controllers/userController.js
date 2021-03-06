require('dotenv').config();

const { request } = require('express');

const { response } = require('express');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const _ = require('lodash');

const userMapper = require('../models/userMapper');

const User = require('../models/user');

const userController = {

    /**
     * @async
     * @function findOne - one user
     * @param  { Express.Request } request - userMapper.oneUser(id)
     * @param  { Express.Response } response - response.json(user)
     */
    findOne: async (request, response) => {
        const { id } = request.params;

        const user = await userMapper.oneUser(id);

        response.json(user);
    },
 
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
            // token
            const newUser = _.pick(theUser, [
                'id',
                'email',
                'pseudo',
                'interval_date',
                'level_id',
                'img',
                'firstName',
                'lastName'
            ]);

            const token = jwt.sign(newUser, process.env.JWTPRIVATEKEY);

            newUser.token = token;

            response.json(newUser);

            console.log(validPassword);

        } catch (error) {

            response.status(403).json(error.message);
        }
    },

    /**
     * @async   
     * @function modifyUser - modify data user
     * @param  { Express.Request } request - userMapper.oneUser(id)
     * @param  { Express.Request } request - userMapper.updateUser(body)
     * @param  { Express.Response } response - response.json(updateUser)
     */
    modifyUser: async (request, response) => {

        // generate salt
        const salt = await bcrypt.genSalt(10);
        // hash password
        const hashPassword = await bcrypt.hash(request.body.password, salt);

        request.body.password = hashPassword;

        request.body.id = request.user.id;
        
        const user = await userMapper.oneUser(request.user.id);
         // if the user not exists
        if (!user) return response.status(400).json(`The user don't exist with id ${id}`);

        try {

            const updatedUser = await userMapper.updateUser(request.body);

            // token
            const newUser = _.pick(updatedUser, [
                'id',
                'email',
                'pseudo',
                'level_id',
                'img',
                'firstName',
                'lastName'
            ]);

            //const token = jwt.sign(newUser, process.env.JWTPRIVATEKEY);

            //newUser.token = token;

            response.status(200).json(newUser);

        } catch (error) {

            response.status(403).json(error.message);
        }
           
    }

};

/**
 * A module representing a userController
 * @export userController
 */
module.exports = userController;