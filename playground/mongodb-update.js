// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=> {
	if(err){
		return console.log('Unable to connect to Mongodb');
	}

	console.log('Connected to Mongodb successfully');

// db.collection('Todos').findOneAndUpdate({
// 	_id:new ObjectID('5c5bdc9fa25c171f7341a919')
// },{
// 	$set :{
// 		completed:true
// 	}
// },
// {
//  returnOriginal:false
// }).then((result) => {
// 	console.log(result);
// })

db.collection('Users').findOneAndUpdate({
	_id:new ObjectID('5c5707ab57439e5c5c51a5f0')
},{
	$set :{
		name:'Patience'
	},
	$inc : {
		age:3
	}
},
{
 returnOriginal:false
}).then((result) => {
	console.log(result);
})

//db.close();
})