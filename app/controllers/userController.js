const { request } = require('express');

const { response } = require('express');

const bcrypt = require('bcrypt');

const validator = require("email-validator");

const userMapper = require('../models/userMapper');

const User = require('../models/user');

const userController = {
    signupAction: async (request, response) => {

        let errors = [];

        // 1. check the empty fields (vérifie les champs vides)
        if (
            request.body.email.length === 0
            || request.body.password.length === 0
            || request.body.passwordConfirm.length === 0
            || request.body.firstName.length === 0
            || request.body.lastName.length === 0
            || request.body.pseudo.length === 0
            || request.body.img.length === 0
            || request.body.date.length === 0
        ) {
            errors.push('At least one field of the form is empty');
        }

        // 2. compare passwords
        if (request.body.password !== request.body.passwordConfirm) {
            errors.push("Passwords don't match");
        }

        //3. check if the email is in the right format
        if (!validator.validate(request.body.email)) {
            errors.push('Email address is not valid'); 
        }

        //4. group the checks and interrupt if errors
        if (errors.length) {
            response.send({
                data: request.body,
                errors
            });
            // this function is interrupted
            return;
        }

        // 5. a. check if email exists
        const user = await userMapper.oneUser({
            where: {
                email: request.body.email
        }
        });
        // 5. b. if the user exists we don't use this email
        if (user) {
            response.send({
                data: request.body,
                errors: [`You already have an account`]
            });
            // this function is interrupted
            return;
        }

        // 6. hasher the password
        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(request.body.password, 8);
        } catch (error) {
            console.log(error);

            response.send({
                data: request.body,
                errors: [`processing error. Please trying again`]
            });
            // this function is interrupted
            return;
        }

        // 6. adding to the BDD

        const newUser = new User(request.body);

        // 6. a. change the password for the hashed version
        newUser.password = hashedPassword;

        // 6. b. save to the BDD
        try {
            await newUser.save();

            response.json(newUser);
        } catch (error) {
            response.status(403).json(error.message);
        }

    }
};

module.exports = userController;