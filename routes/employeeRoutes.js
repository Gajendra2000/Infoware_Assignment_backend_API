const express = require('express');

const router = express.Router();
const {createEmployee,getEmployees,updateEmployee,getEmployee,deleteEmployee} = require("./../controllers/employeeControllers");

//get all employees(with pagination) and create a new employee
router.route('/').get(getEmployees).post(createEmployee);

// Update Employee
// Delete Employee
// Get Employee
router.route('/:id').get(getEmployee).put(updateEmployee).delete(deleteEmployee);

module.exports = router;

