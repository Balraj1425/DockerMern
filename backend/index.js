const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors")

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://mongo:27017/DockerTest")
  .then(() => {
    console.log("DataBase connected");
  })
  .catch((err) => {
    console.log("Failed to connect to DataBase");
  });

//Establishing a connection
const connection = mongoose.connection;

//Creating a Schema for database

//User Registration Details
const UserDetails = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
});

const USERDETAILS = connection.model("usersdetail", UserDetails);

app.get("/hello", (req, res) => {
  res.send("hello");
});

app.get("/getdetails", (req,res)=>{
    USERDETAILS.find({}, (err,result)=>{
        if (err){
            res.send("something went wrong")
        } else {
            res.send(result)
        }
    });
})

app.post("/addDetails", (req,res)=>{
    const user = new USERDETAILS({username:req.body.username, email:req.body.email})
    user.save((err, result)=>{
        if (err){
            res.send("something went wrong")
        } else {
            res.send("data added")
        }
    })
})

app.listen(3001, () => {
  console.log("server started");
});
