import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema.middleware.js"
import { signInSchema, signUpSchema } from "../schemas/users.schemas.js"
import { signIn, signUp } from "../controllers/users.controller.js"


const userRouter = Router()

userRouter.post("/sign-up",validateSchema(signUpSchema), signUp)

userRouter.post("/sign-in",validateSchema(signInSchema), signIn)

export default userRouter