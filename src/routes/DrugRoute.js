const express = require("express");
const postDrug = require("../controllers/drugController");
const router = express.Router();

router.post("/post-drug", postDrug);

module.exports = router;
