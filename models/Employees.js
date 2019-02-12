const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Employees
let Employees = new Schema({
  employee_name: {
    type: String
  },
  company_name: {
    type: String
  },
  employee_id: {
    type: Number
  }
},{
    collection: 'employees'
});

module.exports = mongoose.model('Employees', Employees);