// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=> {
	if(err){
		return console.log('Unable to connect to Mongodb');
	}

	console.log('Connected to Mongodb successfully');

//deleteMany
	// db.collection('Todos').deleteMany({text:'to eat lunch'}).then((result) => {
 //  console.log(result);
	// });

//deleteOne
// db.collection('Todos').deleteOne({text:'to eat lunch'}).then((result) => {
// console.log(result);
// });

//findOneAndDelete

// db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
// console.log(result);
// });

//deleteMany

// db.collection('Users').deleteMany({name:'David'}).then((result) => {
// 	console.log(result);
// })

//deleteOne

// db.collection('Users').deleteOne({name:'John'}).then((result)=>{
// console.log(result);
// });
//findOneAndDelete
 db.collection('Users').findOneAndDelete({name:'Jeniffer'}).then((result) => {
 console.log(result);
 });

//db.close();
})