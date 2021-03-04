const { Router} = require('express');

const router = Router();


const articleController = require('./controllers/articleController');


// ROUTES
/**
 * @route GET /articles
 * @group Article - management of the collection of articles
 * @return { JSON } - all articles
 */
router.get('/articles', articleController.findAll);

/**
 * @route GET /articles/:id
 * @group Article - management of the collection of articles
 * @param { Number } id.path.required - id of the article
 * @return { JSON } - the article
*/
router.get('/articles/:id', articleController.findOne);

// ROUTE POST/registration
//router.post('/registration', userController.signupAction);


// here, a 404 for the API
router.use((request, response) => {
    response.status(404).json('No such endpoint');
});

module.exports = router;