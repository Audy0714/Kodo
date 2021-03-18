/** Class representing article */
class Article {
    id;
    title;
    slug;
    description;
    story;
    how;
    why;
    challenge_id;

    /**
     * Create a article (data)
     * @param { Number } id - the id article
     * @param { String } title - title article
     * @param { String } slug - slug article
     * @param { String } description - description article
     * @param { String } story - story article
     * @param { String } how - description article
     * @param { String } why - why article
     * @param { Number } challenge_id - challenge_id 
     */

    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }
}

module.exports = Article;