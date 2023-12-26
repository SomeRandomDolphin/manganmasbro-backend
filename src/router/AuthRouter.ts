import { Router } from "express"
import { loginUser, getUserProfile } from "../controller/AuthController"
import { userAuthMiddleware } from "../middleware/AuthMiddleware"

const authRouter = Router()

authRouter.post("/auth/login", loginUser)
authRouter.get("/auth/me", userAuthMiddleware, getUserProfile)

export default authRouter