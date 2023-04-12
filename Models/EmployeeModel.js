const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
     fullName:{
        type: String,
        required:[true, "Employee full name is required"]
    },
    jobTitle:{
        type: String,
        required:[true, "Job title is required"]
    },
    email:{
        type: String,
        required:[true, "Email is required"]
    },
    address:{
        type: String,
        required:[true, "Address is required"]
    },
    city:{
        type: String,
        required:[true, "City Name is required"]
    },
    state:{
        type: String,
        required:[true, "State name is required"]
    },
    emergencyContactName:{
        type:String,
        required:[true, "Emergency Contact Name is required"]
    },
    emergencyContactNumber:{
        type:Number,
        required:[true, "Emergency Contact Number is required"]
    },

    relationshipWithFirstEmergencyContact:{
        type:String,
        required:[true, "Relationship Info with first emergency contact is required"]
    },
    secondEmergencyContactName:{
        type:String,
        required:[true, "Secondary Contact Name is required"]
    },

    secondEmergencyContactNumber:{
        type:Number,
        required:[true, "Emergency Contact Number is required"]
    },
    relationshipWithSecondtEmergencyContact:{
        type:String,
        required:[true, "Relationship Info with second emergency contact is required"]
    }
})

module.exports = mongoose.model("Employee", employeeSchema);