import { Request, Response } from "express";
import { recipeSchema } from "../Utils/Validation";
import Joi from "joi";
import { RecipeRequest } from "../model/RecipeModel";
import { responseData, responseError } from "../Utils/API-Response";
import { StatusCodes } from "http-status-codes";
import * as RecipeService from "../service/RecipeService";
import { UserToken } from "../middleware/AuthMiddleware";

export const createRecipe = async (req: Request, res: Response) => {
  const {
    error,
    value,
  }: {
    error: Joi.ValidationError;
    value: RecipeRequest;
  } = recipeSchema.validate(req.body, { abortEarly: false });

  if (error) {
    responseError(res, error);
    return;
  }

  try {
    const { username } = (req as UserToken).user;
    const recipe = await RecipeService.registerRecipe(value, username);
    responseData(res, StatusCodes.OK, "Recipe Created", recipe);
  } catch (err) {
    responseError(res, err);
  }
};

export const retrieveRecipe = async (req: Request, res: Response) => {
  try {
    const value = Number(req.params.recipe_id);
    const url = await RecipeService.retrieveRecipe(value);
    responseData(res, StatusCodes.OK, "Recipe Retrieved", url);
  } catch (err) {
    responseError(res, err);
  }
};

export const retrieveAllRecipe = async (req: Request, res: Response) => {
  try {
    const urls = await RecipeService.retrieveAllRecipe();
    responseData(res, StatusCodes.OK, "All Recipe Retrieved", urls);
  } catch (err) {
    responseError(res, err);
  }
};

export const retrieveUserRecipe = async (req: Request, res: Response) => {
  const { username } = (req as UserToken).user;

  try {
    const data = await RecipeService.retrieveUserRecipe(username);
    responseData(res, StatusCodes.OK, "User Recipe Retrieved", data);
  } catch (err) {
    responseError(res, err);
  }
};

export const updateRecipe = async (req: Request, res: Response) => {
  const {
    error,
    value,
  }: {
    error: Joi.ValidationError;
    value: RecipeRequest;
  } = recipeSchema.validate(req.body, { abortEarly: false });

  if (error) {
    responseError(res, error);
    return;
  }

  try {
    const { username } = (req as UserToken).user;
    const recipeId = Number(req.params.recipe_id);
    const updatedRecipe = await RecipeService.updateRecipe(
      recipeId,
      value,
      username,
    );
    responseData(res, StatusCodes.OK, "Recipe Updated", updatedRecipe);
  } catch (err) {
    responseError(res, err);
  }
};

export const deleteRecipe = async (req: Request, res: Response) => {
  try {
    const { username } = (req as UserToken).user;
    const recipeId = Number(req.params.recipe_id);
    const url = await RecipeService.deleteRecipe(recipeId, username);
    responseData(res, StatusCodes.OK, "Recipe Deleted", url);
  } catch (err) {
    responseError(res, err);
  }
};
