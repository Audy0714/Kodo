// User Models

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


    // mise en place de setters
    set first_name(val) {
    this.firstName = val;
    }

    set last_name(val) {
    this.lastName = val;
    }

    // mise en place d'un constructeur
    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }
}

<<<<<<< HEAD
module.exports = Article;
=======
module.exports = User;
>>>>>>> dev
