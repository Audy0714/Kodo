const { Router} = require('express');

const router = Router();

const articleController = require('./controllers/articleController');

const userController = require('./controllers/userController');

const userSchema = require('./schemas/userSchema');

const { validateBody } = require('./services/validator');

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

/**
*  @route POST /registration
 * @group User - management of the collection of user
 * @return { JSON } - the new user
 */
router.post('/registration', validateBody(userSchema), userController.signupAction);

/**
*  @route POST /login
 * @group User - management of the collection of user
 * @return { JSON } - the user connected
 */
router.post('/login', userController.loginAction);

// here, a 404 for the API
router.use((request, response, next) => {
    response.status(404).json('No such endpoint');

    next();
});

module.exports = router;