const {MongoClient} = require("mongodb")    
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
const database = 'test'

async function dbConnect(){
    let result = await client.connect();
    db= result.db(database)
    return db.collection('mobiles')
}
module.exports=dbConnect