class Challenge {
    id;
    day;
    description;
    level_id;
    

    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }
}

module.exports = Challenge;