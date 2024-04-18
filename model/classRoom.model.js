const mongoose = required('mongoose');

const classRoomSchema = new mongoose.Schema({
	className : {
		type : String
	},
	mentor : {
		type : String
	},
	studentCount : {
		type : String
	},
	crName : {
		type : String
	},
	courseName : {type : String},
	section : {type : String},
	roomNumber : {type : Number},
});


const ClassRoom = mongoose.model('ClassRoom', classRoomSchema); 

export default ClassRoom;