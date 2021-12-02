import { Router } from "express";
const userController = require('../controllers/userController')
const emailValidation  = require("../middlewares/validateEmail");

export const userRouter = Router();

userRouter.post('/', emailValidation, userController.createUser);
userRouter.get('/', userController.getAllUsers);
userRouter.get('/counts/:userId', userController.getUserCounts )