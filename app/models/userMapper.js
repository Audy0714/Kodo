const { User } = require('./user');

const db = require('../database');

const userMapper = {
    oneUser: async (id) => {

        const { rows } = await db.query('SELECT * FROM user WHERE id = $1;', [id]);

        return new User(rows[0]);
    }
};

module.exports = userMapper;