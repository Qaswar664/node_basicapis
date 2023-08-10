const express = require("express");
const dbConnect = require("./index");
const app = express();
app.use(express.json())

app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
  resp.send(data);
});

app.post("/", async (req,resp)=>{
    let data = await dbConnect();
   let  result = await data.insertOne(req.body);
    resp.send(result)
    console.log('resulttttttt',result);
})

app.put("/", async(req,resp)=>{
    let data = await dbConnect()
    let result = data.updateOne({
        
    })

    resp.send({result:"updated"})

})
app.listen(5000);
