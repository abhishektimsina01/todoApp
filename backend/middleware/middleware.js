import express from "express";
import { Signup } from "../models/signup.js";

const check = async(req,res,next)=>{
    try{
        const user = await Signup.findOne({email});
            if(user){
                res.json({"message" : "already exist"})
            }
            else{
                next()   
            }
    }
    catch(err){
        res.end();
        console.log(err);
    }
}

export {check}