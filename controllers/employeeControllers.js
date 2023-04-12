const Employee = require("./../Models/EmployeeModel");


//to get all the employees 
const getEmployees = async(req,res)=>{
    //by default the limit is set to 4;
    const limit = Number(req.query.limit)||4;
    
    //by default we're always on the first page
    const page = Number(req.query.page)||1;
    const skip = (page-1)* limit;

    const employees = await Employee.find().skip(skip).limit(limit);

    return res.status(200).json(employees);
}


// to get an employee by an id
const getEmployee = async(req,res)=>{
    const employee = await Employee.findById(req.params.id);
    if(!employee){
        const err = new Error("Employee not found");
        throw err;
    }

    return res.status(200).json(employee);
}

//to update an employee 
const updateEmployee = async(req,res)=>{
    const employee = await Employee.findById(req.params.id);

    if(!employee){
        throw new Error("Employee not found");
    }

    

    const updateEmployee = await Employee.findByIdAndUpdate(req.params.id,
        req.body,
        {new:true}
    );

    return res.status(201).json("updated successfully!");
}

//to create a new employee
const createEmployee = async(req, res) =>{
    const {fullName,jobTitle, email, address,city,state,emergencyContactName,emergencyContactNumber,relationshipWithFirstEmergencyContact,secondEmergencyContactName,secondEmergencyContactNumber,relationshipWithSecondtEmergencyContact} = req.body;
    
    //while creating a new employee every field is required 
    if(!fullName ||!jobTitle || !email || !address || !city || !state || !emergencyContactName || !emergencyContactNumber ||!relationshipWithFirstEmergencyContact||!relationshipWithSecondtEmergencyContact ||!secondEmergencyContactName||!secondEmergencyContactNumber){
        const err = new Error("please provide all the required fields");
        throw err;
    }

    await Employee.create({
        fullName,jobTitle, email, address,city,state,emergencyContactName,emergencyContactNumber,relationshipWithFirstEmergencyContact,secondEmergencyContactName,secondEmergencyContactNumber,relationshipWithSecondtEmergencyContact
    })

    return res.status(201).json("Employee created successfully!");
}

// to delete a employee with id 
const deleteEmployee = async(req,res)=>{
    const employee = await Employee.findById(req.params.id);
    if(!employee){
        throw new Error("Employee not found");
    }

    await Employee.findByIdAndDelete(req.params.id);
    return res.status(200).json("Employee deleted successfully");
}

module.exports = {
    getEmployee,getEmployees,updateEmployee,deleteEmployee,createEmployee
}