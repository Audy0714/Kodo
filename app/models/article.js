// Articles Models

class Article {
    id;
    title;
    slug;
    description;
    story;
    how;
    why;
    challenge_id;

    // mise en place d'un constructeur
    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }
}

module.exports = Article;