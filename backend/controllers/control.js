import {Signup} from "../models/signup.js"

const reqBody = (req,res)=>{
    // console.log("hello, got a get request")
    const error = new Error("Something went wrong")
    res.status(404)
    error.stack = null
    next(error)
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