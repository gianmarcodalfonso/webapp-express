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

		const movies = results.map((movie) => {
			return {
				...movie,
				image: req.imagePath + movie.image,
			};
		});

		res.send(movies);
	});
};

//show
const show = (req, res) => {
	const { id } = req.params;

	const sqlMovie = "SELECT * FROM movies WHERE id = ?";

	const sqlReviews = "SELECT * FROM reviews WHERE movie_id = ?";

	connection.query(sqlMovie, [id], (err, resultMovie) => {
		if (err)
			return res
				.status(500)
				.json({ error: `Errore nell'esecuzione della query: ${err}` });

		if (resultMovie.length === 0 || resultMovie[0] === null)
			return res.status(404).json({ error: `Film non trovato` });

		const book = resultMovie[0];
		book.image = req.imagePath + book.image;

		connection.query(sqlReviews, [id], (err, resultReviews) => {
			if (err)
				return res
					.status(500)
					.json({ error: `Errore nell'esecuzione della query: ${err}` });

			const movieWithReviews = {
				...book,
				resultReviews,
			};
			res.send(movieWithReviews);
		});
	});
};

module.exports = {
	index,
	show,
};
