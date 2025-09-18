//import express
const express = require("express");

//instanza app del metodo express
const app = express();

//numero porta
const port = 3000;

//rotta base
app.get(port, () => {
	res.send("Rotta base del mio Blog");
});

// Server in ascolto sulla porta designata
app.listen(port, () => {
	console.log(`Server in ascolto sulla porta ${port}`);
});
