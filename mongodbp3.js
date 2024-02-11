const {MongoClient}=require('mongodb')
const uri="mongodb+srv://admin:admin@cluster0.jqfyjjm.mongodb.net/?retryWrites=true&w=majority";
const client=new MongoClient(uri)
async function run()
{
    try{
         await client.connect();
         const db=client.db('employee')
         const collection=db.collection('mycollection')
         //Delete
        let deleteData={name:"azar1",age:100}
        let res=await collection.deleteOne(deleteData);
        console.log(`Deleted ${res.deletedCount} document`)
    }
    finally
    {
        await client.close();
    }
}
run().catch(console.err);