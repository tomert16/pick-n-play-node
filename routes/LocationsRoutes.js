const express = require('express');
const router = express.Router();
const { getAllLocations } = require('../controllers/LocationsController')

router.get('/', getAllLocations);

module.exports = router;