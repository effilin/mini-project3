const express = require('express');
const router = express.Router();
const Controllers = require('../controllers');


router.get('/', (req, res) => {
    Controllers.forecastController.getForecast(req, res)
});

router.post('/create', (req, res) => {
    Controllers.forecastController.createForecast(req.body, res)
});

module.exports = router