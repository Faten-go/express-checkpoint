const express = require("express");

const app=express();

//app.get("/",(req,res)=>{
//res.send ("hello");
//});


const port= process.env.PORT || 5000; 
app.listen(port,err=>{
    err?console.log(err) : console.log(`server is running on ${port}`)
});


app.use(express.static("public"))

function getTheCurrentTimeString() {
    return new Date ().toString();
}
app.get("/now",(req,res,next)=> {
    req.time = getTheCurrentTimeString();
    next();
    },(req,res)=> {
    res.json({ time: req.time });
    });