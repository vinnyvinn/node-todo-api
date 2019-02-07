// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=> {
	if(err){
		return console.log('Unable to connect to Mongodb');
	}

	console.log('Connected to Mongodb successfully');

	db.collection('Users').find({name:'David'}).count().then((count) => {
		//console.log(`Todos: ${count}`);
		console.log(`Users: ${count}`);
		//console.log(JSON.stringify(data,undefined,2));
	},(err) =>{
		console.log('Unable to fetch todos',err);
	})

//db.close();
})