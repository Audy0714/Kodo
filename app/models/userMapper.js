const  User  = require('./user');

const db = require('../database');

const userMapper = {

     
    /**
     * @async
     * @function oneUser - the user
     * @param  { Number } id - the id of the user
     * @return { Promise } the promise of a found user
     */
    oneUser: async (id) => {

        const { rows } = await db.query('SELECT * FROM "user" WHERE id = $1;', [id]);

        return new User(rows[0]);
    },

    
    /**
     * @async   
     * @function save - save the new user
     * @param  { Object } - theUser with userData
     * @return { Promise } - the promise insert new user in the BDD
     */
    save: async (theUser) => {

        try {

            await db.query(`
            INSERT INTO "user" (email, password, first_name, last_name, pseudo, img, date)
            VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id;`, [theUser.email, theUser.password, theUser.firstName, theUser.lastName, theUser.pseudo, theUser.img, theUser.date]);

        } catch (error) {

            throw new Error(error);
        };
    }

    /*findByEmail: async (email) => {
         const { rows } = await db.query('SELECT * FROM "user" WHERE email = $1;', [email]);

        return new User(rows[0]);
    }*/
};

module.exports = userMapper;
