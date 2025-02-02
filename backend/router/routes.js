import express from "express";
import { reqBody, signup, login, logout} from "../controllers/control.js";
const users = express.Router();

//api
users.get("/", reqBody);
users.post("/signup", signup)
users.post("/login", login)
users.post("/logout", logout)
export {users};