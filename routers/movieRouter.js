//express
const express = require("express");

//router
const router = express.Router();

//controller
const movieController = require("../controllers/movieController");

//rotte

//index
router.get("/", movieController.index);

//show
router.get("/:id", movieController.show);

module.exports = router;
