var express = require("express");
var cors = require("cors");
var mongoCliient = require("mongodb").MongoClient

var conStr="mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json())
app.get('/customer',(req,res)=>{
    mongoCliient.connect(conStr)
    .then(obj=>{
        var database=obj.db("tutorial");
        database.collection("customers").find({}) .toArray().then(document=>{
            res.send(document);
            res.end();
        })
    })
    .catch(err=>{
        console.log(err)
    })
});
app.post("/register",(req,res)=>{
    var customerDetails={
        User_id :req.body.User_id,
        UserName :req.body.UserName,
        Password :req.body.Password,
        Age :parseInt(req.body.Age,),
        Email :req.body.Email,
        Mobile :req.body.Mobile,
    };
    mongoCliient.connect(conStr)
    .then(obj=>{
        var database =obj.db("tutorial");
        database.collection("customers").insertOne(customerDetails)
        .then(()=>{
            console.log("Record Inserted");
            res.redirect('/customer')
        })
    })


});
app.listen("18000")
console.log(`sever started:http://127.0.0.1:1800`);