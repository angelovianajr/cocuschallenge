const express = require('express');
const triangleRoutes = require('./triangle.route');

const router = express.Router();

router.use('/triangle', triangleRoutes);

module.exports = router;
