import express from "express";
import {Signup} from "../models/signup.js"

const reqBody = (req,res)=>{
    console.log("hello, got a get request")
    res.send("requested")
}

const data = async(req,res)=>{
    try{
        const {_id, name, email} = req.body;
        console.log(_id, name , email)
        const user = await Signup.create({
            _id,
            name,
            email
        })
        console.log("Registered", user)
        res.status(202).json({"message" : "registered"})
    }
    catch(err){
        res.json({"message" : `${err}`})
    }
}

export {reqBody, data}