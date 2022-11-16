const express = require("express");
const LionController = require("../db/controller/lionController");
const Lion = require("../db/model/lions");

const router = express.Router();

router.param("id", LionController.params);

router.post("/addlion", LionController.addLion);

router.route("/:id").get(LionController.getOneLion);

module.exports = router;
