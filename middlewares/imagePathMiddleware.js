const setImagePath = (req, res, next) => {
	console.log("✅ Middleware eseguito");

	req.imagePath = `${req.protocol}://${req.get("host")}/imgs/movie_covers/`;
	console.log(req.imagePath);
	next();
};

module.exports = setImagePath;
