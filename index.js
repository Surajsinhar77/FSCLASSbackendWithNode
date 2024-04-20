const express = require('express'); // importing the modules 
const path = require('path');
const mongoose = require('mongoose');
// creating server
const server = express();
const {User}  = require('./model/users.model');

// to formate req, res in json
server.use(express.json());

// this is waiter or api / REST Api
// server.get('/', (request, response)=>{
// 	// const location = path.join(__dirname, '/index.html');
// 	return response.json(
// 		{
// 			name : 'asd',
// 			email : 'asdasd',
// 			asdjklas : "i890809"
// 		}
// 	);
// });

async function connectionToDb(){
	try{
		await mongoose.connect('mongodb+srv://Suraj:bOQaQQZNeEqyl6jH@atlascluster.aai2jhm.mongodb.net/ClassBackend');
		// mongodb+srv://Suraj:bOQaQQZNeEqyl6jH@atlascluster.aai2jhm.mongodb.net/
		console.log("Connected to db");
	}catch(err){
		console.log("getting error while connect to db ", err);
	}
}


connectionToDb();
//  Api start 

server.get('/', (req, res)=>{
	return res.send(`
		Home page

		use /insertData fro insertion data \n
		use /getAlldata for query all data \n
		use /getDataById \n
	`)
});


server.post('/insertData', (req , res)=>{

	const { name , email, phoneNumber, password } = req.body;
	console.log(req.body);
	// console.log(req);

	// creating new Object
	User.create({
		name,
		email,
		phoneNumber,
		password,
	})

	// other way to do the same
	// const newUser = new User({
	// 	name,
	// 	email,
	// 	phoneNumber,
	// 	password
	// })

	//newuser.save(); // saving the object in to database

	return res.send("User have sucessfully inserted");
});




server.get('/getAllData', async function (req, res){
	const allData = await User.find({});
	return res.send({message: "fetch sucessfully", data : allData});
});


server.get('/getIdData',async function (req, res){ 

})


server.get('/getIdData/:id',async function (req, res){ 
	// const id = req.body.id;
	console.log(req.params);
	const userData = await User.findById(req.params.id);
	return res.send({message:"data fetch sucessfully", data : userData});
})





// 
const result = await User.updateOne({
	{_id : id},
	{
		{$set:{name : newName } }
	}
});





















// api End 


// location of the server running
server.listen(8000, ()=>{
	console.log("server is running on the port 8000");
})






// {
// 	name : 'asd',
// 	email : 'asdasd',
// 	asdjklas
// }