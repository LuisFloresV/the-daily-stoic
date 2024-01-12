const express = require('express');

const router = express.Router();
const { getReflections } = require('../controllers/reflections');

router.get('/api/reflection', getReflections);

module.exports = router;
