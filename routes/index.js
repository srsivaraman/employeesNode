const express  = require('express');
let router   = express.Router();

// -- Module Routings

const employeesRoute = require('./employees.route');


// -- Module Routings

router.use('/employees', employeesRoute);

module.exports = router;