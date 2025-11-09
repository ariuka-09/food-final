import { Router } from "express";
import { getUserById, getUsers, logIn, signUp, updateUser } from "../controller/user.js";
import { verifyToken } from "../middleware/auth.js";

export const userRouter = Router();
userRouter
.post('/signUp', signUp)
.get('/', getUsers)
.post('/logIn',logIn )
.patch('/:id', updateUser)
.get('/:id',verifyToken, getUserById )