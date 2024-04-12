const express = require('express'); // importing the modules 
const path = require('path');

// creating server
const server = express();


// to formate req, res in json
server.use(express.json());

// this is waiter or api / REST Api
server.get('/', (request, response)=>{
	// const location = path.join(__dirname, '/index.html');
	return response.json(
		{
			name : 'asd',
			email : 'asdasd',
			asdjklas : "i890809"
		}
	);
});


server.get('/other', (req, res)=>{
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