const express = require("express");
const dbConnect = require("./index");
const mongodb = require('mongodb')

const app = express();

app.use(express.json());

app.get("/", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.find().toArray();
  console.log("data", result);
  resp.send(result);
});

app.post("/add", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.insertOne(req.body);
  resp.send(result);
});

app.put("/update", async (req, resp) => {
  let data = await dbConnect();
  let result = data.updateOne({ name: req.body.name }, { $set: req.body });
  console.log(req.body);
  resp.send({ result: "update method" });
});

app.delete("/delete/:id",async(req,resp)=>{
    let data = await dbConnect()
    let result =await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    resp.send(result)
})
app.listen(5000);
