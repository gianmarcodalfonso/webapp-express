//import mysql2
const mysql2 = require("mysql2");

//creo la connessione
const connection = mysql2.createConnection({
	host: process.env.DB_HOST || "localhost",
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

//stabilisco la connessione al db
connection.connect((err) => {
	if (err) {
		console.log(`Errore di connesione al db: ${err}`);
	} else {
		console.log(`Connessione al db avvenuta correttamente`);
	}
});

module.exports = connection;
