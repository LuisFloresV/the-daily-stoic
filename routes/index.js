const express = require('express');

const router = express.Router();
const { getReflections } = require('../controllers/reflections');

router.route('/api');

router.get('/api/reflection', getReflections);

module.exports = router;
