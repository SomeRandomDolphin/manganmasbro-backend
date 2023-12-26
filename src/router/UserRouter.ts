import { Router } from "express"
import { registerUser, retrieveUser, updateUser, deleteUser } from "../controller/UserController"

const userRouter = Router()

userRouter.post("/register", registerUser)
userRouter.get("/:user_id", retrieveUser)
userRouter.put("/update/:user_id", updateUser) 
userRouter.delete("/delete/:user_id", deleteUser)

export default userRouter