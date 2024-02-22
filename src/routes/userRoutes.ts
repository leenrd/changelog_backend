import { Router } from "express";
import { createUser, signInUser } from "../controllers/userController";

const user_router = Router();

user_router.get("/user", createUser);
user_router.get("/signup", signInUser);

export default user_router;
