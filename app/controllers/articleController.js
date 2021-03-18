const { request } = require('express');

const articleMapper = require('../models/articleMapper');

const articleController = {
    /**
     * @async
     * @function findAll - all articles
     * @param  {Express.Request } request - articleMapper.allArticles()
     * @param  { Express.Response } response - response.json(articles)
     */
    findAll: async (request, response) => {

        const articles = await articleMapper.allArticles();

        response.json(articles);
    },

    /**
     * @async
     * @function findOne - one article
     * @param  { Express.Request } request - articleMapper.oneArticle(id)
     * @param  { Express.Response } response - response.json(article)
     */
    findOne: async (request, response) => {

        const { id } = request.params;

        const article = await articleMapper.oneArticle(id);

        response.json(article);
    }
};

/**
 * A module representing a articleController
 * @export articleController
 */
module.exports = articleController;