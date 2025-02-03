import {Signup} from "../models/signup.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import dotenv from "dotenv"
dotenv.config()

const reqBody = (req,res)=>{
    // console.log("hello, got a get request")
    const error = new Error("Something went wrong")
    res.status(404)
    error.stack = null
    next(error)
}

const signup = async(req,res)=>{
    try{
        const { name, email, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10)
        console.log(name , hashedPassword, email)
        const user = await Signup.create({
            name,
            email,
            password : hashedPassword
        })
        console.log(user.name,"registered")
        res.status(202).json({"message" : "registered"})
    }
    catch(err){
        res.json({"message" : `${err}`})
    }
}

const login = async(req,res)=>{
    const {name, email, password} = req.body
    console.log(name)
    const user = await Signup.findOne({name});
    if(user && bcrypt.compare(password, user.password)){
        console.log("Logged in")
        const token = jwt.sign({name : user.name}, process.env.MY_SECRET_KEY, {expiresIn : "1h"})
        res.json({"token" : token})
    }
    else{
        console.log("name or password wrong")
        const error = new Error("name or password wrong")
        next(error)
    }
}

const logout = (req,res)=>{
    console.log("logged out")
    res.json({message : "logged out"})
}

export {reqBody, signup, login, logout}