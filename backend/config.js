import mongoose from "mongoose";
import express from "express";

const connectDatabase = async(url) =>{
    try{
        await mongoose.connect(url)
        console.log("connected to the databse")
    }
    catch(err){

    }
}

export {connectDatabase}