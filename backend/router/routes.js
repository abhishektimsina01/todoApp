import express from "express";
import { reqBody, signup, login} from "../controllers/control.js";
const users = express.Router();

//api
users.get("/", reqBody);
users.post("/signup", signup)
users.post("/login", login)

export {users};