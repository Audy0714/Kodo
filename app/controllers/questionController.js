const { request } = require('express');

const questionMapper = require('../models/questionMapper');

const questionController = {

    /**
     * @async
     * @function findOne - one question
     * @param  { Express.Request } request - questionMapper.oneQuestion(id)
     * @param  { Express.Response } response - response.json(question)
     */
    findOne: async (request, response) => {
        const { id } = request.params;

        const question = await questionMapper.oneQuestion(id);

        response.json(question);
    }
};

module.exports = questionController;