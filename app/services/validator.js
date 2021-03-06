/**
 * valide le payload d'une requête à partir du schéma passé en argument
 * @param {Joi.schema} schema 
 * @returns {Function} middleware Express prêt à l'emploi
 */
const validateBody = (schema) => (request, response, next) => {
    // on regarde ce qu'il y a dans req.body et on le valide par rapport au schema Joi
    const { error } = schema.validate(request.body);

    if (error) {
        response.status(400).json(error.message);
    } else {
        next();
    }
};

/**
 * A module representing a validateBody
 * @export validateBody
 */
module.exports = { validateBody };