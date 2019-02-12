const express = require('express');
const app = express();
const employeesRoutes = express.Router();
const responseHandler = require('../resources/responseHandler');
const labels = require('../resources/labels.json');

// Require Employees model in our routes module
let Employees = require('../models/Employees');

// Defined store route
employeesRoutes.route('/add').post(function (req, res) {
	let employees = new Employees(req.body);
	employees.save()
		.then(employees => {
			responseHandler.getSuccessResult( {'employees': labels.successMessages.employeeAdd}, res);
		})
		.catch(err => {
			responseHandler.getErrorResult(labels.errorMessages.employeeAdd, res)
		});
});

// Defined get data(index or listing) route
employeesRoutes.route('/').get(function (req, res) {
	Employees.find(function (err, allEmployees){
		if(err){
			console.log(err);
		}
		else {
			responseHandler.getSuccessResult(allEmployees, res);
		}
	});
});
// Defined delete | remove | destroy route
employeesRoutes.route('/delete/:id').delete(function (req, res) {
	Employees.findByIdAndRemove({_id: req.params.id}, function(err, employees){
		if(err){
			responseHandler.getDeleteError( labels.errorMessages.employeeDelete, res); 
		} 
		else{
			responseHandler.getDeleteResult( labels.successMessages.employeeDelete, res);
		} 
	});
});

module.exports = employeesRoutes;