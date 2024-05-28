var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;

var url="mongodb://127.0.0.1:27017";

var app =express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/videos", (req,res)=>{
    mongoClient.connect(url).then((clientObject)=>{
        var database = clientObject.db("tutorial");
        database.collection("vediolibrary").find({}).toArray().then((document)=>{
            res.send(document)
        })
    })
});

app.get("/videos/:id",(req,res)=>{
    var video_id=parseInt(req,params.id);
    mongoClient.connect(url).then((clientObject)=>{
        var database =clientObject.db("tutorial");
        database.collection("vediolibrary").find({id:video_id}).toArray().then((document)=>{
            res.send(document)
        })

    })
})
app.post("addvideo",(req,res)=>{
    var video ={
        "id":parseInt(req.body.id),
        "title":req.body.title,
        "url":req.body.url,
        "view":parseInt(req.body.view),
        "likes":parseInt(req.body.likes),
        "subscribed":(req.body.subscribed=="true")?true:false
    }
    mongoClient.connect(url).then(clientObject=>{
        var database = clientObject.db("tutorial");
        database.collection("vediolibrary").insertOne(video).then((result)=>{
            console.log(`vedio Inserted`);
            res.redirect("/videos");
        }
        )
    })
})
app.put("updatevideo/:id",(req,res)=>{
    var video_id=parseInt(req,params.id);
    var video ={
        "id":parseInt(req.body.id),
        "title":req.body.title,
        "url":req.body.url,
        "view":parseInt(req.body.view),
        "likes":parseInt(req.body.likes),
        "subscribed":(req.body.subscribed=="true")?true:false
    }
    mongoClient.connect(url).then(clientObject=>{
        var database = clientObject.db("tutorial");
        database.collection("vediolibrary").updateOne({id:video_id},{$set:video}).then((result)=>{
            console.log(`video Updated`)
            res.redirect("/videos")
        })
    })
})
app.delete("/deletevideo/:id",(req,res)=>{
    var video_id=parseInt(req,params.id);
    mongoClient.connect(url).then(clientObject=>{
        var database = clientObject.db("tutorial");
        database.collection("vediolibrary").deleteOne({id:video_id}).then((result)=>{
            console.log(`video Delete`)
            res.redirect("/videos")
        })
    })

})
app.listen(5566);
console.log(`sever started:http://127.0.0.1:5566`);