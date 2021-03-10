const { Router} = require('express');

const router = Router();

const articleController = require('./controllers/articleController');

const userController = require('./controllers/userController');

const questionController = require('./controllers/questionController');

const challengeController = require('./controllers/challengeController');

const userSchema = require('./schemas/userSchema');

const { validateBody } = require('./services/validator');

//const { validateQuery } = require('./services/validator');


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
 * @route GET /profil/:id
 * @group User - management of the collection of users
 * @param { Number } id.path.required - id of the user
 * @return { JSON } - the user
*/
router.get('/profil/:id', userController.findOne);

/**
 * @route GET /questions/:id
 * @group Question - management of the collection of questions
 * @param { Number } id.path.required - id of the question
 * @return { JSON } - the question
*/
router.get('/questions/:id', questionController.findOne);


/**
 * @route GET /challenges/:id
 * @group Challenge - management of the collection of challenges
 * @param { Number } id.path.required - id of the challenge
 * @return { JSON } - the challenge
*/
router.get('/challenges/:id', challengeController.findOne);


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

/**
 * @route PATCH /settings/profil/:id
 * @group User - management of the collection of user
 * @param { Number } id.path.required - id of the user
 * @return { JSON } - the user modify
*/
router.patch('/settings/profil/:id', userController.modifyUser);

// here, a 404 for the API
router.use((request, response, next) => {
    response.status(404).json('No such endpoint');

    next();
});

module.exports = router;