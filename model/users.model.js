const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
	name : {
		type : String,
		required : true
	},

	email: {
		type : String,
		unique : true,
		required : true
	},

	phoneNumber : {
		type : Number,
		unique : true
	},

	password : {
		type : String,
		required : true
	},

	account : {
		type : mongoose.Schema.Types.ObjectId,
		ref : "account",
	}
});


const User = mongoose.model('user', userSchema);

export default User;

// module.export = {
// 	User

// }