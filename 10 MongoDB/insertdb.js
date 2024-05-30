const { MongoClient, ObjectId } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'egci427';

async function main() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('students');
    var obj = [
      {
          "_id" : new ObjectId("5e6caaf17822cf7b5b1b6416"),
          "id" : 1,
          "firstname" : "Bob",
          "lastname" : "Cat",
          "age" : 21,
          "major" : "Math"
      },
      {
          "_id" : new ObjectId("5e6caaf17822cf7b5b1b6418"),
          "id" : 2,
          "firstname" : "Tom",
          "lastname" : "Cat",
          "age" : 18,
          "major" : "Science"
      },
      {
          "_id" : new ObjectId("5e6caaf17822cf7b5b1b641a"),
          "id" : 3,
          "firstname" : "Marry",
          "lastname" : "Lamb",
          "age" : 19,
          "major" : "Social Study"
      },
      {
          "_id" : new ObjectId("5e6caaf17822cf7b5b1b641c"),
          "id" : 4,
          "firstname" : "Linda",
          "lastname" : "Lamb",
          "age" : 21,
          "major" : "IT"
      },
      {
          "_id" : new ObjectId("5e6f7d0fafffa036fa37b892"),
          "id" : 5,
          "firstname" : "Adam",
          "lastname" : "Zoo",
          "age" : 22,
          "major" : "Math"
      }
      
        
        
      ]
    const insertResult = await collection.insertMany(obj);
    console.log(insertResult);
      return 'Done!'
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());