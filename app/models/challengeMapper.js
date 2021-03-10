const Challenge = require('./challenge');

const db = require('../database');

const challengeMapper = {
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