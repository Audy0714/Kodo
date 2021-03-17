const { request } = require('express');

const questionMapper = require('../models/questionMapper');

const userMapper = require('../models/userMapper');

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
    },


    /**
     * @async
     * @function handleQuestionForm - user answers questions
     * @param  { Express.Request } request - questionMapper.oneQuestion(id)
     * @param  { Express.Request } request - user responses
     * @param  { Express.Request } request - user level
     * @param  { Express.Response } response - response.json(question)
     * @param  { Express.Response } response - response.json(answers)
     * @param  { Express.Response } response - response.json(level)
     */
    handleQuestionForm: async (request, response) => {
    
        try {
           
            const user = await userMapper.oneUser(request.user.id);
            console.log(user);
            if (!user) return response.status(401).json("The user with given id does not exist");
            // On ajoute l'id de l'utilisateur contenu dans le token au payload (request.body)
            request.body.id = request.user.id
            // on envoie le payload au mapper pour mettre à jour le level_id de l'utilisateur
            // {level_id: 2,
            // id: 6}
            await userMapper.setLevel(request.body);
        
            // on envoie les informations de l'utilisateur avec le level_id et la date au client
            response.json(user);
            
        } catch (error) {
            response.status(403).json(error.message);
        }
    }
};

module.exports = questionController;