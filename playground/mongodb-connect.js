// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=> {
	if(err){
		return console.log('Unable to connect to Mongodb');
	}

	console.log('Connected to Mongodb successfully');
// db.collection('Todos').insertOne({
// 	text:'To take shower',
// 	completed:false
// },(err,result) => {
// 	if(err){
// 		return console.log('Unable to insert data to Mongodb server.',err);
// 	}
// 	console.log(JSON.stringify(result.ops,undefined,2));
// })

// db.collection('Items').insertOne({
// 	name:'Junior',
// 	age:25,
// 	location:'Kolanya'
// },(err,result) => {
// 	if(err){ 
// 		return console.log('Unable to insert into Users',err);
// 	}

// 	console.log(result.ops[0]._id.getTimestamp());
// })
db.close();
})