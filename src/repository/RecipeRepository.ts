import { Category, Origin } from "@prisma/client";
import db from "../config/connectDb"
import { RecipeRequest } from "../model/RecipeModel";

export const createIngredient = async (
    idInput: number,
    ingredient1Input: string,
    ingredient2Input: string,
    ingredient3Input: string,
    ingredient4Input: string,
    ingredient5Input: string,
    ingredient6Input: string,
    ingredient7Input: string,
    ingredient8Input: string,
    ingredient9Input: string,
    ingredient10Input: string,
    ingredient11Input: string,
    ingredient12Input: string,
    ingredient13Input: string,
    ingredient14Input: string,
    ingredient15Input: string,
    ingredient16Input: string,
    ingredient17Input: string,
    ingredient18Input: string,
    ingredient19Input: string,
    ingredient20Input: string
) => {
    return await db.ingredient.create({
        data: {
            id: idInput,
            ingredient1: ingredient1Input,
            ingredient2: ingredient2Input,
            ingredient3: ingredient3Input,
            ingredient4: ingredient4Input,
            ingredient5: ingredient5Input,
            ingredient6: ingredient6Input,
            ingredient7: ingredient7Input,
            ingredient8: ingredient8Input,
            ingredient9: ingredient9Input,
            ingredient10: ingredient10Input,
            ingredient11: ingredient11Input,
            ingredient12: ingredient12Input,
            ingredient13: ingredient13Input,
            ingredient14: ingredient14Input,
            ingredient15: ingredient15Input,
            ingredient16: ingredient16Input,
            ingredient17: ingredient17Input,
            ingredient18: ingredient18Input,
            ingredient19: ingredient19Input,
            ingredient20: ingredient20Input
        },
    })
}

export const createMeasure = async (
    idInput: number,
    measure1Input: string,
    measure2Input: string,
    measure3Input: string,
    measure4Input: string,
    measure5Input: string,
    measure6Input: string,
    measure7Input: string,
    measure8Input: string,
    measure9Input: string,
    measure10Input: string,
    measure11Input: string,
    measure12Input: string,
    measure13Input: string,
    measure14Input: string,
    measure15Input: string,
    measure16Input: string,
    measure17Input: string,
    measure18Input: string,
    measure19Input: string,
    measure20Input: string,
) => {
    return await db.measure.create({
        data: {
            id: idInput,
            measure1: measure1Input,
            measure2: measure2Input,
            measure3: measure3Input,
            measure4: measure4Input,
            measure5: measure5Input,
            measure6: measure6Input,
            measure7: measure7Input,
            measure8: measure8Input,
            measure9: measure9Input,
            measure10: measure10Input,
            measure11: measure11Input,
            measure12: measure12Input,
            measure13: measure13Input,
            measure14: measure14Input,
            measure15: measure15Input,
            measure16: measure16Input,
            measure17: measure17Input,
            measure18: measure18Input,
            measure19: measure19Input,
            measure20: measure20Input
        },
    })
}

export const createStep = async (
    idInput: number,
    step1Input: string,
    step2Input: string,
    step3Input: string,
    step4Input: string,
    step5Input: string,
    step6Input: string,
    step7Input: string,
    step8Input: string,
    step9Input: string,
    step10Input: string,
    step11Input: string,
    step12Input: string,
    step13Input: string,
    step14Input: string,
    step15Input: string,
    step16Input: string,
    step17Input: string,
    step18Input: string,
    step19Input: string,
    step20Input: string
) => {
    return await db.step.create({
        data: {
            id: idInput,
            step1: step1Input,
            step2: step2Input,
            step3: step3Input,
            step4: step4Input,
            step5: step5Input,
            step6: step6Input,
            step7: step7Input,
            step8: step8Input,
            step9: step9Input,
            step10: step10Input,
            step11: step11Input,
            step12: step12Input,
            step13: step13Input,
            step14: step14Input,
            step15: step15Input,
            step16: step16Input,
            step17: step17Input,
            step18: step18Input,
            step19: step19Input,
            step20: step20Input
        },
    })
}

export const createRecipe = async (
    idInput: number,
    nameInput: string,
    descriptionInput: string,
    categoryInput: Category,
    veganInput: boolean,
    cookTimeInput: number,
    thumbnailInput: string,
    originInput: Origin,
    userIdInput: number
) => {
    return await db.recipe.create({
        data: {
            id: idInput,
            name: nameInput,
            description: descriptionInput,
            category: categoryInput,
            vegan: veganInput,
            cookTime: cookTimeInput,
            thumbnail: thumbnailInput,
            origin: originInput,
            ingredientId: idInput,
            measureId: idInput,
            stepId: idInput,
            userId: userIdInput
        },
    })
}

export const queryRecipebyID = async (idInput: number) => {
    return await db.recipe.findUnique({
        where: {
            id: idInput
        },
        include: {
            recipeFromIngredient: true,
            recipeFromMeasure: true,
            recipeFromStep: true
        },
    })
}


export const queryAllRecipe = async () => {
    return await db.recipe.findMany({
        include: {
            recipeFromIngredient: true,
            recipeFromMeasure: true,
            recipeFromStep: true
        },
    })
}


export const editRecipe = async (recipeId: number, data: RecipeRequest) => {
    const updatedRecipe = await db.recipe.update({
        where: { id: recipeId },
        data: {
            name: data.name,
            description: data.description,
            category: data.category,
            vegan: data.vegan,
            cookTime: data.cookTime,
            thumbnail: data.thumbnail,
            origin: data.origin,
            // userId: data.userId // Uncomment if needed
        },
    })
  
    await db.ingredient.update({
        where: { id: recipeId },
        data: {
            ingredient1: data.ingredient1,
            ingredient2: data.ingredient2,
            ingredient3: data.ingredient3,
            ingredient4: data.ingredient4,
            ingredient5: data.ingredient5,
            ingredient6: data.ingredient6,
            ingredient7: data.ingredient7,
            ingredient8: data.ingredient8,
            ingredient9: data.ingredient9,
            ingredient10: data.ingredient10,
            ingredient11: data.ingredient11,
            ingredient12: data.ingredient12,
            ingredient13: data.ingredient13,
            ingredient14: data.ingredient14,
            ingredient15: data.ingredient15,
            ingredient16: data.ingredient16,
            ingredient17: data.ingredient17,
            ingredient18: data.ingredient18,
            ingredient19: data.ingredient19,
            ingredient20: data.ingredient20
        },
    })
  
    await db.measure.update({
        where: { id: recipeId },
        data: {
            measure1: data.measure1,
            measure2: data.measure2,
            measure3: data.measure3,
            measure4: data.measure4,
            measure5: data.measure5,
            measure6: data.measure6,
            measure7: data.measure7,
            measure8: data.measure8,
            measure9: data.measure9,
            measure10: data.measure10,
            measure11: data.measure11,
            measure12: data.measure12,
            measure13: data.measure13,
            measure14: data.measure14,
            measure15: data.measure15,
            measure16: data.measure16,
            measure17: data.measure17,
            measure18: data.measure18,
            measure19: data.measure19,
            measure20: data.measure20
        },
    })
  
    await db.step.update({
        where: { id: recipeId },
        data: {
            step1: data.step1,
            step2: data.step2,
            step3: data.step3,
            step4: data.step4,
            step5: data.step5,
            step6: data.step6,
            step7: data.step7,
            step8: data.step8,
            step9: data.step9,
            step10: data.step10,
            step11: data.step11,
            step12: data.step12,
            step13: data.step13,
            step14: data.step14,
            step15: data.step15,
            step16: data.step16,
            step17: data.step17,
            step18: data.step18,
            step19: data.step19,
            step20: data.step20
        },
    })
  
    return updatedRecipe
}
  
export const removeRecipe = async (recipeId: number) => {
    await db.ingredient.delete({ where: { id: recipeId } })
    await db.measure.delete({ where: { id: recipeId } })
    await db.step.delete({ where: { id: recipeId } })
    await db.recipe.delete({ where: { id: recipeId } })
}