const express = require("express");
const router = express.Router();

const news = require("../app/controllers/news.controller");

router.use("/:slug", news.show);
router.use("/", news.index);

module.exports = router;
