const responseCreator = (message, data) => {
	return { success: true, message, data };
};

// Just Creating & Throwing Error
const errorCreator = (message, status = 400) => {
	const err = new Error(message);
	err.status = status;
	throw err;
};

module.exports = { responseCreator, errorCreator };
