const express = require("express");
const router = express.Router();
const moviesController = require("./../controller/moviesController");

router.get("/", moviesController.index);
router.get("/:id", moviesController.show);
router.get("/movie/:id", moviesController.showAll);
module.exports = router;
