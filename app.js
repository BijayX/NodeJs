const app = require("express")() // alter const express =require("express") const app=express()

// req => request , res=> response
app.get("/",(req,res)=>{
    // res.send("<h1>Hello I am From Home Page </h1>")
    res.json({
        message:"Home Page",
        status:"success"
    })
    
})

app.get("/contact",(req,res)=>{
    // res.send("This is Contact Page")
    res.json({
        message:"This is contact Page",
        status:"Success"
    })
})

app.get("/about",(req,res)=>{
    res.send("This is About Page")
})

app.get("/login",(req,res)=>{
    res.send("This is login page")
})
app.listen(3000,(req,res)=>{
    console.log("Node Js has been started");
})