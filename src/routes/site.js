const express = require('express');
const router = express.Router();

const site = require('../app/controllers/site.controller');

router.use('/:slug', site.search);
router.use('/', site.home);

module.exports = router;
