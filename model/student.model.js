const mongoose = require('mongoose');


// rollno
// name
// section 
// department
// collageName,
// Address
// age
// email
// gender
// Course Name
// Contact Number
// father Name
// mother name
// FullTime 
// Onsite
// year

const studentSchema = new mongoose.Schema({
	rollno : {
		type: Number,
	},

	name : {
		type: String,
	},

	section : {
		type: String,
	},

	department : {
		type: String,
	},

	collageName : {
		type: String,
	},

	Address : {
		type: String,
	},

	age : {
		type: Number,
	},
	email : {
		type: String,
	},

	gender : {
		type: String,
	},
	CourseName : {
		type: String,
	},

	ContactNumber : {
		type: Number,
	},

	fatherName : {
		type: String,
	},

	mothername : {
		type: String,
	},

	FullTime : {
		type: Boolean,
	}, 

	Onsite : {
		type: String,
	},
	year : {
		type : String,
	},

	user : {
		type : mongoose.Schema.Types.ObjectId,
		ref : "user",
	}
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
