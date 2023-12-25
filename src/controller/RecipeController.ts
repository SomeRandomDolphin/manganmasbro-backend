import { Request, Response } from "express";
import { recipeSchema } from "../Utils/Validation";
import Joi from "joi"
import { RecipeRequest } from "../model/RecipeModel";
import { responseData, responseError } from "../Utils/API-Response";
import { StatusCodes } from "http-status-codes";
import * as RecipeService from "../service/RecipeService" 

export const createRecipe = async (req: Request, res: Response) => {    
    const { 
        error,
        value
    } : {
        error: Joi.ValidationError,
        value: RecipeRequest
    } = recipeSchema.validate(req.body, {abortEarly: false})

    if(error){
        responseError(res, error)
        return
    }

    try{
        const recipe = await RecipeService.createRecipe(value)
        responseData(res, StatusCodes.OK, "Recipe Created", recipe)
    } catch(err){
        responseError(res, err)
    }
}

export const retrieveRecipe = async (req: Request, res: Response) => {    
    try{
        const value = Number(req.params.recipe_id)
        const url = await RecipeService.retrieveRecipe(value)
        responseData(res, StatusCodes.OK, "Recipe Retrieved", url)
    } catch(err){
        responseError(res, err)
    }
}

export const retrieveAllRecipe = async (req: Request, res: Response) => {
    try{
        const urls = await RecipeService.retrieveAllRecipe()
        responseData(res, StatusCodes.OK, "All Recipe Retrieved", urls)
    } catch(err){
        responseError(res, err)
    }
}