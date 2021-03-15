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
           
            const { id } = request.params;

            const question = await questionMapper.oneQuestion(id);

            //on stocke les infos de chaque bonne réponse de l'utilisateur
            const answers = [];
            // chaque réponse correspond à un level que je stocke dans level
            const level = 0;
            // je boucle sur les réponses et on compare
            for (const answer of answers) {
                // on détermine si l'id de la réponse de la question correspond au level de la réponse
                // les infos reçues d'un formulaire sont toujours sous forme de string on utilise donc parseInt pour effectuer la comparaison                
                const goodAnswers = question.answer.id === parseInt(req.body.answer.level_id);

                if(goodAnswers) {
                    // l'user a répondu on lui augmente son level
                    level++;
                }
                // on ajoute pour chaque questions les infos dans le tableau answer
                answers.push({
                    //la réponse à la question
                    question_answer: question.answer.id,
                    answer_level: parseInt(req.body.answer.level_id),
                    goodAnswers
                });
                
            }

             // je récupère l'id et la date de l'user
            const { userId, userDate } = request.params;
            // j'attends que la requête de mon userMapper renvoie la date et l'id de l'user
            const user = await userMapper.setDate(userId, userDate);
            // le timestamps du moment
            const setDate = Math.round(Date.now());
        
             response.json({ user, question, answers, level, setDate });
            
        } catch (error) {
            response.status(403).json(error.message);
        }
    }
};

module.exports = questionController;