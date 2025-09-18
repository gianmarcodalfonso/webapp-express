// importiamo la connessione al db
const connection = require("../data/db");

//index
const index = (req, res) => {
	const sql = "SELECT * FROM movies";

	connection.query(sql, (err, results) => {
		if (err)
			return res
				.status(500)
				.json({ error: `Errore nell'esecuzione della query: ${err}` });

		res.send(results);
	});
};

//show
const show = (req, res) => {
	const { id } = req.params;

	const sqlMovie = "SELECT * FROM movies WHERE id = ?";

	connection.query(sqlMovie, [id], (err, resultMovie) => {
		if (err)
			return res
				.status(500)
				.json({ error: `Errore nell'esecuzione della query: ${err}` });

		res.send(resultMovie[0]);
	});
};

module.exports = {
	index,
	show,
};
