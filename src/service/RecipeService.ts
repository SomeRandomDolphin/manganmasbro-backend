 import { StatusCodes } from "http-status-codes";
import { CustomError } from "../Utils/ErrorHandling";
import { RecipeRequest } from "../model/RecipeModel";
import { createRecipe, createIngredient, createMeasure, createStep, queryRecipebyID, queryRecipebyUser, queryAllRecipe, editRecipe, removeRecipe } from "../repository/RecipeRepository";
import { queryUserDetailbyID } from "../repository/UserRepository";

export const registerRecipe = async (data: RecipeRequest) => {    
    const isRegistedUser = await queryUserDetailbyID(data.userId)
    if(!isRegistedUser){
        throw new CustomError(StatusCodes.BAD_REQUEST, "User tidak terdaftar")
    }

    const ingredient = await createIngredient(
        data.ingredient1,
        data.ingredient2,
        data.ingredient3,
        data.ingredient4,
        data.ingredient5,
        data.ingredient6,
        data.ingredient7,
        data.ingredient8,
        data.ingredient9,
        data.ingredient10,
        data.ingredient11,
        data.ingredient12,
        data.ingredient13,
        data.ingredient14,
        data.ingredient15,
        data.ingredient16,
        data.ingredient17,
        data.ingredient18,
        data.ingredient19,
        data.ingredient20
    )

    const measure = await createMeasure(
        data.measure1,
        data.measure2,
        data.measure3,
        data.measure4,
        data.measure5,
        data.measure6,
        data.measure7,
        data.measure8,
        data.measure9,
        data.measure10,
        data.measure11,
        data.measure12,
        data.measure13,
        data.measure14,
        data.measure15,
        data.measure16,
        data.measure17,
        data.measure18,
        data.measure19,
        data.measure20
    )

    const step = await createStep(
        data.step1,
        data.step2,
        data.step3,
        data.step4,
        data.step5,
        data.step6,
        data.step7,
        data.step8,
        data.step9,
        data.step10,
        data.step11,
        data.step12,
        data.step13,
        data.step14,
        data.step15,
        data.step16,
        data.step17,
        data.step18,
        data.step19,
        data.step20
    )

    const recipe = await createRecipe(
        data.name,
        data.description,
        data.category,
        data.vegan,
        data.cookTime,
        data.thumbnail,
        data.origin,
        data.userId
    )

    if(!ingredient){
        throw new CustomError(StatusCodes.BAD_REQUEST, "Invalid Ingredient")
    }

    if(!measure){
        throw new CustomError(StatusCodes.BAD_REQUEST, "Invalid Measure")
    }

    if(!step){
        throw new CustomError(StatusCodes.BAD_REQUEST, "Invalid Step")
    }

    if(!recipe){
        throw new CustomError(StatusCodes.BAD_REQUEST, "Invalid Recipe")
    }

    const recipeCombined = await queryRecipebyID(recipe.id)
    if(!recipeCombined){
        throw new CustomError(StatusCodes.BAD_REQUEST, "Invalid Recipe")
    }

    return recipeCombined
}

export const retrieveRecipe = async (data: number) => {    
    const recipe = await queryRecipebyID(data)
    if(!recipe){
        throw new CustomError(StatusCodes.BAD_REQUEST, "Invalid ID")
    }

    return recipe
}

export const retrieveAllRecipe = async () => {
    return await queryAllRecipe()
}

export const retrieveUserRecipe = async (userId: number) => {
    const user = await queryRecipebyUser(userId)

    if(!user){
        throw new CustomError(StatusCodes.NOT_FOUND, "User not found")
    }

    return user
}

export const updateRecipe = async (recipeId: number, data: RecipeRequest) => {
    const isRegistered = await queryRecipebyID(recipeId);
  
    if (!isRegistered) {
        throw new CustomError(StatusCodes.NOT_FOUND, "Recipe Not Found")
    }
  
    const updatedRecipe = await editRecipe(recipeId, data)
  
    if (!updatedRecipe) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Invalid Data")
    }
  
    return updatedRecipe;
}
  
export const deleteRecipe = async (recipeId: number) => {
    const isRegistered = await removeRecipe(recipeId);
  
    if (!isRegistered) {
        throw new CustomError(StatusCodes.NOT_FOUND, "Recipe Not Found")
    }
  
    await removeRecipe(recipeId)
    return isRegistered
}