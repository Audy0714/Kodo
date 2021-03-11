const { request } = require('express');

const User = require('../models/user');

const Challenge = require('../models/challenge');

const challengeMapper = require('../models/challengeMapper');

const userMapper = require('../models/userMapper');

const challengeController = {
     /**
     * @async
     * @function findOne - one challenge
     * @param  { Express.Request } request - challengeMapper.oneChallenge(id)
     * @param  { Express.Response } response - response.json(challenge)
     */
    findOne: async (request, response) => {

        /*try {
            const user = await userMapper.save(user.date);
            
            request.session.user = [];

            response.json(user);

        } catch (error) {

            response.status(404).json(error.message);

        }*/


        const { id } = request.params;

        const challenge = await challengeMapper.oneChallenge(id);

        response.json(challenge);
    }
};

module.exports = challengeController;