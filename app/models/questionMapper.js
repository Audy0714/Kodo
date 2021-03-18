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
        SELECT question.id, "statement", answer.description, answer.level_id, answer.question_id
        FROM question JOIN answer ON question.id = answer.question_id
		JOIN "level" ON answer.level_id = "level".id
        WHERE question.id = $1
		ORDER BY description;`, [id]);

        return rows.map(row => new Question(row));

    }
};

/**
 * A module representing a questionMapper
 * @export questionMapper
 */
module.exports = questionMapper;