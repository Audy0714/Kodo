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

        const { id } = request.params;

        const challenge = await challengeMapper.oneChallenge(id);

        response.json(challenge);
    },

     /**
     * @async
     * @function findAll - all challenges
     * @param  { Express.Request } request - challengeMapper.allChallenge()
     * @param  { Express.Response } response - response.json(challenges)
     */
    findAll: async (request, response) => {

        const challenges = await challengeMapper.allChallenges();

        response.json(challenges);
    }
};

module.exports = challengeController;