/** Class representing a user */
class User {
   
    id;
    email;
    password;
    firstName;
    lastName;
    pseudo;
    img;
    date;
    level_id;
    challenge_id;
    article_id;
    question_id;

    /** 
    * Set the first_name value
    * @returns { String } The firstName value    
    */
    set first_name(val) {
    this.firstName = val;
    }

     /** 
    * Set the last_name value
    * @returns { String } The lastName value    
    */
    set last_name(val) {
    this.lastName = val;
    }

     /**
    * Create a user (data)
    * @param { Number } id - the id user
    * @param { String } email - email user
    * @param { String } password - password user
    * @param { String } first_name - firstName user
    * @param { String } last_name - lastName user
    * @param { String } pseudo - pseudo user
    * @param { String } img - img user
    * @param { Date } date -date user
    * @param { Number } level_id - level_id 
    * @param { Number } challenge_id - challenge_id 
    * @param { Number } article_id - article_id 
    * @param { Number } question_id - question_id 
    */
   
    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }
}

module.exports = User;
