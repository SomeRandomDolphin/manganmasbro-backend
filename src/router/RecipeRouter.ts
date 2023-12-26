import { Router } from "express"
import { createRecipe, retrieveRecipe, retrieveAllRecipe, updateRecipe, deleteRecipe } from "../controller/RecipeController"

const recipeRouter = Router()

recipeRouter.post("/create", createRecipe)
recipeRouter.get("/:recipe_id", retrieveRecipe)
recipeRouter.get("", retrieveAllRecipe)
recipeRouter.put("/update/:recipe_id", updateRecipe)
recipeRouter.delete("/delete/:recipe_id", deleteRecipe)

export default recipeRouter