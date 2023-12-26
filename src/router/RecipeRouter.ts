import { Router } from "express"
import { createRecipe, retrieveRecipe, retrieveAllRecipe, retrieveUserRecipe, updateRecipe, deleteRecipe } from "../controller/RecipeController"
import { userAuthMiddleware } from "../middleware/AuthMiddleware"

const recipeRouter = Router()

recipeRouter.post("/create", createRecipe)
recipeRouter.get("", retrieveAllRecipe)
recipeRouter.get("/me", userAuthMiddleware,  retrieveUserRecipe)
recipeRouter.put("/update/:recipe_id", updateRecipe)
recipeRouter.delete("/delete/:recipe_id", deleteRecipe)
recipeRouter.get("/:recipe_id", retrieveRecipe)

export default recipeRouter