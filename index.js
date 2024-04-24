const express = require('express'); // importing the modules 
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();

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
		await mongoose.connect(process.env.DATABASE_URL);
		console.log("Connected to db");
	}catch(err){
		console.log("getting error while connect to db ", err);
	}
}


connectionToDb();
//  Api start 


function middlewareFunction(req, res, next){
	console.log("i am a middleware ");
	next();
}

function middlewareFunction2(req, res, next){
	console.log("i am a middleware 2 ");
	// return res.send("asdajd");
	next();
}

function callbackResponse(req, res){
	return res.send(`
		Home page
		use /insertData fro insertion data \n
		use /getAlldata for query all data \n
		use /getDataById \n
	`)
}

server.get('/', middlewareFunction, middlewareFunction2, callbackResponse);


server.post('/insertData', async(req , res)=>{

	try{
		const { name , email, phoneNumber, password } = req.body;

		const  hashPassword  = await bcrypt.hash(password, 10);
		console.log(hashPassword);

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

		return res.send("User have sucessfully inserted");
	}catch(err){
		console.log(err);
		return res.json({message : err.message});
	}
});


// const passwordMatch = await bcrypt.compare(password, hashPassword);


server.get('/getAllData', async function (req, res){
	const allData = await User.find({});
	return res.send({message: "fetch sucessfully", data : allData});
});


server.get('/getIdData',async function (req, res){ 

})


server.get('/getIdData/:id',async function (req, res){ 
	console.log(req.params);
	const userData = await User.findById(req.params.id);
	return res.send({message:"data fetch sucessfully", data : userData});
})



server.put('/updateName/:id', async (req, res)=>{
	try{
		const {newName}  = req.body;
		const id = req.params.id;
		const result = await User.updateOne(
			{_id : id},
			{
				$set : {name : newName}
			}
		)

		return res.json({message : "update sucessfully", result});
	}catch(err){
		console.log("getting error on ther update frunction ", err);
		return res.json({message  : err.message, error : err});
	}
});



server.post('/updateUser/:id', async (req, res)=>{
	try{
		const {newName , newPhoneno, newEmail } = req.body
		const id = req.params.id;
		const result = await User.findOneAndUpdate(
			{_id : id}, // filter 
			{
				$set:{name : newName ,email  : newEmail, phoneNumber  : newPhoneno} 
			},
			{new : true}
		);
		return res.json({message : "User update sucessfully", result : result })
	}catch(err){
		console.log("error from update User ", err);
		return res.json({message : err.message, error : err});
	}
});


server.delete('/deleteUser/:id', async (req, res)=>{
	try{
		const id = req.params.id;
		const deleteResult =  await User.deleteOne({_id : id});
		return res.json({message : "user is sucessfully deleted ", result : deleteResult});
	}catch(err){
		console.log("This is from the delete function error: ", err);
		return res.json({message : err.message, error : err});
	}
});


// location of the server running
server.listen(8000, ()=>{
	console.log("server is running on the port 8000");
})
