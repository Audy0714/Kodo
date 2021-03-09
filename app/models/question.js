// Question Models

class Question {
    id;
    statement;
    level_id;

     // mise en place d'un constructeur
    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }
}

module.exports = Question;