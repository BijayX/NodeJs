const express = require("express") // alter const express =require("express") const app=express()
const app=express();
const mongoose=require("mongoose")
const Blog = require ("./model/blogmodel")



// nodejs lai form bata ako data lai parse gar bhneko
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))
const { connectdatabase } = require("./database/database")
// database  connection function
connectdatabase()
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

app.post("/createblog",async(req,res)=>{
     const title =req.body.title;
     const subtitle =req.body.subtitle;
     const Description =req.body.Description


     await Blog.create({
       title:  title,
       subtitle: subtitle,
       Description : Description
    })
    res.json({
        status:200,
        message:"Blog Created Successfully!"
    })
})
app.listen(3000,(req,res)=>{
    console.log("Node Js has been started");
})