const express = require('express'); // importing the modules 
const path = require('path');
const mongoose = require('mongoose');
// creating server
const server = express();


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
		await mongoose.connect('');
		// mongodb+srv://Suraj:bOQaQQZNeEqyl6jH@atlascluster.aai2jhm.mongodb.net/
		console.log("Connected to db");
	}catch(err){
		console.log("getting error while connect to db ", err);
	}
}

connectionToDb();

server.get('/home', (req, res)=>{
	return res.json({data : "asdjkasjdkasdjakdjaksdjaks"})
})


// location of the server running
server.listen(8000, ()=>{
	console.log("server is running on the port 8000");
})






// {
// 	name : 'asd',
// 	email : 'asdasd',
// 	asdjklas
// }