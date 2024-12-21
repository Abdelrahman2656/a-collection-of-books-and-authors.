import { Router } from "express";
import { signIn, signUp } from "./user.controller.js";
import { checkEmail } from "../../middleware/checkEmail.js";
import { catchError } from "../../middleware/catchError.js";
import { validate } from "../../middleware/validate.js";
import { signInVal, signUpVal } from "./user.validation.js";


const userRouter=Router()

userRouter.post('/signup',validate(signUpVal),checkEmail,catchError(signUp))
userRouter.post('/signin',validate(signInVal),catchError(signIn))

export default userRouter;