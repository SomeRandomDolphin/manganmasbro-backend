import { Router } from "express"
import { registerUser, retrieveUser } from "../controller/UserController"

const userRouter = Router()

userRouter.post("/register", registerUser)
userRouter.get("/:user_id", retrieveUser)

export default userRouter