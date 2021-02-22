const MongoClient=require('mongodb').MongoClient;
const assert=require('assert');

const url='mongodb://localhost:27017/';
const dbname='conFusion';

MongoClient.connect(url,(err,client)=>
{
    assert.equal(err,null); //it helps toperform check if err is null or not
    console.log('connected correctly to server');
    const db=client.db(dbname);
    const collection=db.collection('dishes');
    collection.insertOne({"name":"pizza","description":"healthy"},(err,result)=>{
        assert.equal(err,null);
        console.log('after insert:\n');
        console.log(result.ops); // ops--how many operations are carried out successfully
        collection.find({}).toArray((err,docs)=>{
            assert.equal(err,null);
            console.log('found\n');
            console.log(docs);
           //drop means it will remove collection named dishes
            db.dropCollection('dishes',(err,result)=>
            {
                assert.equal(err,null);
                client.close();
            });
         });
     });
  });