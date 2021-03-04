const Article = require('./article');

const db = require('../database');

const articleMapper = {
    /**
     * @async
     * @function allArticles - all articles
     * @return { Promise }  the promise of all found articles
     */
    allArticles: async () => {
        const result = await db.query(`SELECT * FROM article;`);
   
        return result.rows.map(article => new Article(article));
    },
    
    /**
     * @async
     * @function oneArticle - the article
     * @param  { Number } id - the id of the article
     * @return { Promise } the promise of a found article
     */
    oneArticle: async (id) => {
    
        const { rows } = await db.query('SELECT * FROM article WHERE id = $1;', [id]);

        return new Article(rows[0]);
    }
};

module.exports = articleMapper;