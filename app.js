//import express
const express = require("express");

//instanza app del metodo express
const app = express();

//numero porta
const port = process.env.PORT;

//router
const movieRouter = require("./routers/movieRouter");

//static middleware
app.use(express.static("public"));

//rotta base
app.get("/", (req, res) => {
	res.send("Rotta base del mio Blog");
});

//rotte per i film
app.use("/api/movies", movieRouter);

// Server in ascolto sulla porta designata
app.listen(port, () => {
	console.log(`Server in ascolto sulla porta ${port}`);
});
