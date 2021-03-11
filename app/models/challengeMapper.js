const Challenge = require('./challenge');

const db = require('../database');

const challengeMapper = {

     /**
     * @async
     * @function allChallenges - all challenges
     * @return { Promise } the promise of all found challenges
     */
    allChallenges: async () => {
        const result = await db.query('SELECT * FROM challenge');

         return result.rows.map(challenge => new Challenge(challenge));
    },
    /**
     * @async
     * @function oneChallenge - the challenge
     * @param  { Number } id - the id of the challenge
     * @return { Promise } the promise of a found challenge
     */
    oneChallenge: async (id) => {

        const { rows } = await db.query('SELECT * FROM challenge WHERE id = $1;', [id]);

        return new Challenge(rows[0]);
    }
};

module.exports = challengeMapper;