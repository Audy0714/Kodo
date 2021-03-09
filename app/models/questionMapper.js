const Question = require('./question');

const db = require('../database');

const questionMapper = {
    /**
     * @async
     * @function oneQuestion - the question
     * @param  { Number } id - the id of the question
     * @return { Promise } the promise of a found question
     */
    oneQuestion: async (id) => {
        const { rows } = await db.query(`
        SELECT statement, answer_id, answer.description, answer.level_id, "level".name 
        FROM question JOIN answer ON question.answer_id = answer.id
		JOIN "level" ON answer.level_id = level.id
        WHERE question.id = $1;`, [id]);

        return new Question(rows[0]);
    }
};

module.exports = questionMapper;