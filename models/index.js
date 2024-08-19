'use strict'

const User = require('./user')
const Forecast = require('./forecast')

async function init() {
    await User.sync();
    await Forecast.sync();
};

init();

module.exports = { User , Forecast}