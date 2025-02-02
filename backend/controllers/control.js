import {Signup} from "../models/signup.js"

const reqBody = (req,res)=>{
    // console.log("hello, got a get request")
    const error = new Error("Something went wrong")
    res.status(404)
    error.stack = null
    next(error)
}

const signup = async(req,res)=>{
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

const login = async(req,res)=>{
    const {name, password} = req.body
    console.log(name)
    const user = await Signup.findOne({name});
    if(user){
        console.log("user already exist")
        res.json({message : "already exist"})
    }
    else{
        console.log("user doesnt exist")
        res.json({error : "user doesnt exist"})
    }
}

const logout = (req,res)=>{
    console.log("logged out")
    res.json({message : "logged out"})
}



export {reqBody, signup, login, logout}