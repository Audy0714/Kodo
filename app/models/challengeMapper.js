const Challenge = require('./challenge');

const db = require('../database');

const challengeMapper = {

     /**
     * @async
     * @function allChallenges - all challenges
     * @return { Promise } the promise of all found challenges
     */
    allChallenges: async () => {
        const result = await db.query(`
            SELECT challenge.id, "day", challenge.description AS challenge_description, article.title, article.slug, article.description AS article_description, article.story, article.how, article.why FROM challenge 
            JOIN article ON challenge.id = article.challenge_id;`);

         return result.rows.map(challenge => new Challenge(challenge));
    },
    /**
     * @async
     * @function oneChallenge - the challenge
     * @param  { Number } id - the id of the challenge
     * @return { Promise } the promise of a found challenge
     */
    oneChallenge: async (id) => {

        const { rows } = await db.query(`
            SELECT challenge.id, "day", challenge.description AS challenge_description, article.title, article.slug, article.description AS article_description, article.story, article.how, article.why FROM challenge 
            JOIN article ON challenge.id = article.challenge_id 
            WHERE challenge.id = $1;`, [id]);

        return new Challenge(rows[0]);
    }
};

/**
 * A module representing a challengeMapper
 * @export challengeMapper
 */
module.exports = challengeMapper;