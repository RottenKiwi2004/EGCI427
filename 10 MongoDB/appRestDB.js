const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

const express = require('express');
const app = express();

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

const dbName = 'egci427';

// var result = [];

async function main() {
  // Use connect method to connect to the server


  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

app.get('/showMajor/:major', async (req, res) => {
    

  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('students');
  var query = {major: req.params.major}; 
  const result = await collection.find(query).toArray()
  console.log('Found documents => ', result)
  res.end(JSON.stringify(result, '', 2));
})

app.get('/showAgeless/:age', async (req, res) => {

  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('students');
  const age = praseInt(req.params.age);
  var query = {age: {$lt: age}}; 
  const result = await (await collection.find(query).toArray()).sort((a, b)=>a.age > b.age);
  console.log('Found documents => ', result)
  res.end(JSON.stringify(result, '', 2));
})

app.post('/updateLastname/:lastname', async (req, res) => {

  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('students');
  const result = await (await collection.find(query).toArray()).sort((a, b)=>a.age > b.age);
  console.log('Found documents => ', result)
  res.end(JSON.stringify(result, '', 2));
})

app.listen(8081);