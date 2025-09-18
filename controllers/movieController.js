// importiamo la connessione al db
const connection = require("../data/db");

//index
const index = (req, res) => {
	console.log("index");
};

//show
const show = (req, res) => {
	console.log("show");
};

module.exports = {
	index,
	show,
};
