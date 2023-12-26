import { Router } from "express"
import { createRecipe, retrieveRecipe, retrieveAllRecipe, updateRecipe, deleteRecipe, getUserRecipe } from "../controller/RecipeController"
import { userAuthMiddleware } from "../middleware/AuthMiddleware"

const recipeRouter = Router()

recipeRouter.post("/create", createRecipe)
recipeRouter.get("/:recipe_id", retrieveRecipe)
recipeRouter.get("", retrieveAllRecipe)
recipeRouter.put("/update/:recipe_id", updateRecipe)
recipeRouter.delete("/delete/:recipe_id", deleteRecipe)
recipeRouter.get('/me', userAuthMiddleware, getUserRecipe)

export default recipeRouter