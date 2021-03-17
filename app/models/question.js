// Question Models
class Question {
	id;
	statement;

	// mise en place d'un constructeur
	constructor(data) {
		for (const prop in data) {
			this[prop] = data[prop];
		}
	}
}

module.exports = Question;
