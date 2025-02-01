import express from "express";
import { reqBody, data} from "../controllers/control.js";
const users = express.Router();

//api
users.get("/", reqBody);
users.post("/signup", data)

export {users};