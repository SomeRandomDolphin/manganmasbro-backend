import { Router } from "express"
import { createRecipe, retrieveRecipe, retrieveAllRecipe } from "../controller/RecipeController"

const recipeRouter = Router()

recipeRouter.post("/create", createRecipe)
recipeRouter.get("/:recipe_id", retrieveRecipe)
recipeRouter.get("", retrieveAllRecipe)

export default recipeRouter