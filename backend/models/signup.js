import express from "express"
import mongoose from "mongoose"

const SignupSchema = new mongoose.Schema({
    name : {
        type : String,
        unique : true,
        required : true
    },
    email : {
        type : String,
        unique : true, 
        required : true
    },
    password : {
        type : String,
        required : true
    }
},{
    versionKey : false,
    timestamps : true
})

const Signup = mongoose.model("signup", SignupSchema)

export {Signup}