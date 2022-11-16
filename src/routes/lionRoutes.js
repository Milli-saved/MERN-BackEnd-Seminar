const express = require("express");
const LionController = require("../db/controller/lionController");

const router = express.Router();

router.param("id", LionController.params)

router.post("/addlion", LionController.addLion);

module.exports = router;
