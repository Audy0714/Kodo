const jwt = require('jsonwebtoken');

require('dotenv').config();

function auth(req, res, next) {
	// je le reçois du coté front
	const authHeader = req.headers.authorization;
	// token d'authentification reçu lors de la connexion de l'utilisateur (sécurité)
	const token = authHeader && authHeader.split(' ')[1];

	if (!token) return res.status(401).json('Access denied. No token provided');

	try {

		const decodedPayload = jwt.verify(token, process.env.JWTPRIVATEKEY);

		req.user = decodedPayload;

		next();

	} catch (error) {

		res.status(400).json('Invalid token.');
	}
};

/**
 * A module representing a authentification (token)
 * @export auth
 */
module.exports = auth;
