import express from "express"
import dotenv from "dotenv"
import {users} from "./router/routes.js"
import { check } from "./middleware/middleware.js"
import { connectDatabase} from "./config.js"
dotenv.config()

const app = express()

connectDatabase("mongodb://127.0.0.1:27017/signups")
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use("/api/user/signup",check)

//routes
app.use("/api/users", users)

app.listen(process.env.port, ()=>{
    console.log("the server has been successfully connected")
})