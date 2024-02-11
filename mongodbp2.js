const {MongoClient}=require('mongodb')
const uri="mongodb+srv://admin:admin@cluster0.jqfyjjm.mongodb.net/?retryWrites=true&w=majority";
const client=new MongoClient(uri)
async function run()
{
    try{
         await client.connect();
         const db=client.db('employee')
         const collection=db.collection('mycollection')
         //Update
         let res=await collection.updateOne({name:"azar1"},{$set:{age:100}})
         console.log(`${res.modifiedCount} document was updated`)
    }
    finally
    {
        await client.close();
    }
}
run().catch(console.err);