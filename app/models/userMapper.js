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

        const { rows } = await db.query('SELECT *, 	NOW()-date AS interval_date FROM "user" WHERE id = $1;', [id]);
        return new User(rows[0]);
    },

    /**
     * @async   
     * @function save - save the new user
     * @param  { String } email - the email of the user
     * @param { String } password - the password of the user
     * @param  { String } first_name - the firstName of the user
     * @param { String } last_name - the lastName of the user
     * @param  { String } pseudo - the pseudo of the user
     * @param { String } img - the img of the user
     * @return { Promise } - the promise insert new user in the BDD
     */
    save: async (theUser) => {

        try {

            await db.query(`
            INSERT INTO "user" (email, password, first_name, last_name, pseudo, img)
            VALUES($1, $2, $3, $4, $5, $6) RETURNING id;`,
            [theUser.email, theUser.password, theUser.firstName, theUser.lastName, theUser.pseudo, theUser.img]);

        } catch (error) {

            throw new Error(error);
        };
    },

    /**
     * @async
     * @function findByEmail - find user with her email
     * @param  { String } email - the email of the user
     * @return { Promise } the promise of a found user
     */
    findByEmail: async (email) => {
        const { rows } = await db.query(`SELECT *, 	NOW()-date AS interval_date FROM "user" WHERE email = $1;`, [email]);

        return new User(rows[0]);
    },

     /**
     * @async
     * @function updateUser - modify data user 
     * @param  { String } email - the email of the user
     * @param { String } password - the password of the user
    *  @param  { String } first_name - the firstName of the user
     * @param { String } last_name - the lastName of the user
    *  @param  { String } pseudo - the pseudo of the user
     * @param { String } img - the img of the user
     * @return { Promise } the promise of modify data user
     */
    updateUser: async (theUser) => {
        const { id, email, password, firstName, lastName, pseudo, img } = theUser;

        const { rows } = await db.query(`
            UPDATE "user" 
                SET email = $1,
                    password = $2,
                    first_name = $3,
                    last_name = $4,
                    pseudo = $5,
                    img = $6
                WHERE id = $7 RETURNING *`,
        [email, password, firstName, lastName, pseudo, img, id]);

        return new User(rows[0]);
       
    },
    /**
     * @function setLevel - the level_id of the user
     * @param  { Number } id - id user
     * @param  { Number } level_id - level_id user
     * @returns { Promise } the promise of level_id 
     */
    setLevel: async (user) => {
        const {id, level_id} = user;

        const { rows } = await db.query('UPDATE "user" SET level_id = $1, date = NOW()::timestamp with time zone WHERE id = $2', [level_id, id]);

        return new User(rows[0]);
    }
};

/**
 * A module representing a userMapper
 * @export userMapper
 */
module.exports = userMapper;
