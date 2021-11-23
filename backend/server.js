const express = require('express');
const path = require("path");
require("./db/conn");
const app = express();
// import React from 'react'
// import ReactDOMServer from 'react-dom/server'
// import App from "./src/index";
const fs = require("fs");
const hbs = require("hbs");
const port = process.env.PORT||5000
const Register = require("./models/registers");

const template_path = path.join(__dirname,"../src/login_register/views")
const partial_path = path.join(__dirname,"../src/login_register/partials")

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static('./src/login_register/views'))

// app.set("view engine","js")
// app.set("views",template_path)

// app.get("/",(req,res)=>{
//     res.render("./src/index")
// })

// const indexfile = path.resolve('./src/public.index.html');
// fs.readFile(indexFile,'utf8',(err,data)=>{
//     if(err){
//         console.error('Something went wrong:',err);
//         return res.status(500).send('Oops,better luck next time!')
//     }
// })

app.set("view engine","hbs")
app.set("views",template_path)
hbs.registerPartials(partial_path)
app.get("/register",(req,res)=>{
    // res.render("./login_register/views/register");
    // res.send("HELLO!")
    res.render("register");
})

app.get("/",(req,res)=>{
    res.render("index1");
})

app.post("/register",async(req,res)=>{
    try{
        const password = req.body.password
        const confirmPassword = req.body.confirmPassword
        if(password===confirmPassword){
            const user_register = new Register({
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                phone:req.body.phone,
                email:req.body.email,
                gender:req.body.gender,
                password:req.body.password,
                confirmPassword:req.body.confirmPassword 
            })
            const registered = await user_register.save();
            res.status(201).render("login")
        }else{
            res.send("Password doesnot match!")
        }
    }catch(error){
        res.status(400).send(error);
        }
    
})

app.get('/login',(req,res)=>{
    res.render("login");
})

app.post('/login',async(req,res)=>{
    
    try
    {
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Register.findOne({email:email})
        if(useremail.password === password)
        {
            res.status(201).render("index");
        }
        else
        {
            res.send("Invalid user registration!");
        }
    }catch(error)
    {
        res.status(400).send(`error ${error}`);
    }
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})