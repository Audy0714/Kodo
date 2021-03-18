/** Class representing a challenge*/
class Challenge {
    id;
    day;
    description;
    level_id;
    
    /**
     * Create a challenge (data)
     * @param { Number } id - the id challenge
     * @param { String } day - day challenge
     * @param { String } description - description challenge
     * @param { Number } level_id - level_id
     */

    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }
}

module.exports = Challenge;