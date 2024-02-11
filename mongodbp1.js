const {MongoClient}=require('mongodb')
const uri="mongodb+srv://admin:admin@cluster0.jqfyjjm.mongodb.net/?retryWrites=true&w=majority";
const client=new MongoClient(uri)
async function run()
{
    try{
         await client.connect();
         const db=client.db('employee')
         const collection=db.collection('mycollection')
         //Insert data into the database
         //let res=await collection.insertOne({name:"azar1",age:34,gender:"male"}) 
         let res=await collection.insertMany([{name:"azar2",age:35,gender:"male"},
         {name:"azar3",age:36,gender:"male"}]) 
         console.log(`data inserted with id ${res.insertedId}`)
    }
    finally
    {
        await client.close();
    }
}
run().catch(console.err);