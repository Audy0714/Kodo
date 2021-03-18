/** Class representing a question */
class Question {
	id;
	statement;

	 /**
    * Create a question (data)
    * @param { Number } id - the id question
    * @param { String } statement - statement question
	*/

	constructor(data) {
		for (const prop in data) {
			this[prop] = data[prop];
		}
	}
}

module.exports = Question;
