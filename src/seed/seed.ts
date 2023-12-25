import db from "../config/connectDb"
import { ingredients } from "./IngredientSeed"
import { measures } from "./MeasureSeed"
import { recipes } from "./RecipeSeed"
import { steps } from "./StepSeed"
import { users } from "./UserSeed"

async function seedIngredients() {
    ingredients.forEach(async (ingredient) => {
        await db.ingredient.upsert({
            where: {
                id: ingredient.id
            },
            update: {
                id: ingredient.id,
                ingredient1: ingredient.ingredient_1,
                ingredient2: ingredient.ingredient_2,
                ingredient3: ingredient.ingredient_3,
                ingredient4: ingredient.ingredient_4,
                ingredient5: ingredient.ingredient_5,
                ingredient6: ingredient.ingredient_6,
                ingredient7: ingredient.ingredient_7,
                ingredient8: ingredient.ingredient_8,
                ingredient9: ingredient.ingredient_9,
                ingredient10: ingredient.ingredient_10,
                ingredient11: ingredient.ingredient_11,
                ingredient12: ingredient.ingredient_12,
                ingredient13: ingredient.ingredient_13,
                ingredient14: ingredient.ingredient_14,
                ingredient15: ingredient.ingredient_15,
                ingredient16: ingredient.ingredient_16,
                ingredient17: ingredient.ingredient_17,
                ingredient18: ingredient.ingredient_18,
                ingredient19: ingredient.ingredient_19,
                ingredient20: ingredient.ingredient_20
            },
            create: {
                id: ingredient.id,
                ingredient1: ingredient.ingredient_1,
                ingredient2: ingredient.ingredient_2,
                ingredient3: ingredient.ingredient_3,
                ingredient4: ingredient.ingredient_4,
                ingredient5: ingredient.ingredient_5,
                ingredient6: ingredient.ingredient_6,
                ingredient7: ingredient.ingredient_7,
                ingredient8: ingredient.ingredient_8,
                ingredient9: ingredient.ingredient_9,
                ingredient10: ingredient.ingredient_10,
                ingredient11: ingredient.ingredient_11,
                ingredient12: ingredient.ingredient_12,
                ingredient13: ingredient.ingredient_13,
                ingredient14: ingredient.ingredient_14,
                ingredient15: ingredient.ingredient_15,
                ingredient16: ingredient.ingredient_16,
                ingredient17: ingredient.ingredient_17,
                ingredient18: ingredient.ingredient_18,
                ingredient19: ingredient.ingredient_19,
                ingredient20: ingredient.ingredient_20
            }
        })
    })
}

async function seedMeasures() {
    measures.forEach(async (measure) => {
        await db.measure.upsert({
            where: {
                id: measure.id
            },
            update: {
                id: measure.id,
                measure1: measure.measure_1,
                measure2: measure.measure_2,
                measure3: measure.measure_3,
                measure4: measure.measure_4,
                measure5: measure.measure_5,
                measure6: measure.measure_6,
                measure7: measure.measure_7,
                measure8: measure.measure_8,
                measure9: measure.measure_9,
                measure10: measure.measure_10,
                measure11: measure.measure_11,
                measure12: measure.measure_12,
                measure13: measure.measure_13,
                measure14: measure.measure_14,
                measure15: measure.measure_15,
                measure16: measure.measure_16,
                measure17: measure.measure_17,
                measure18: measure.measure_18,
                measure19: measure.measure_19,
                measure20: measure.measure_20
            },
            create: {
                id: measure.id,
                measure1: measure.measure_1,
                measure2: measure.measure_2,
                measure3: measure.measure_3,
                measure4: measure.measure_4,
                measure5: measure.measure_5,
                measure6: measure.measure_6,
                measure7: measure.measure_7,
                measure8: measure.measure_8,
                measure9: measure.measure_9,
                measure10: measure.measure_10,
                measure11: measure.measure_11,
                measure12: measure.measure_12,
                measure13: measure.measure_13,
                measure14: measure.measure_14,
                measure15: measure.measure_15,
                measure16: measure.measure_16,
                measure17: measure.measure_17,
                measure18: measure.measure_18,
                measure19: measure.measure_19,
                measure20: measure.measure_20
            }
        })
    })
}

async function seedSteps() {
    steps.forEach(async (step) => {
        await db.step.upsert({
            where: {
                id: step.id
            },
            update: {
                id: step.id,
                step1: step.step_1,
                step2: step.step_2,
                step3: step.step_3,
                step4: step.step_4,
                step5: step.step_5,
                step6: step.step_6,
                step7: step.step_7,
                step8: step.step_8,
                step9: step.step_9,
                step10: step.step_10,
                step11: step.step_11,
                step12: step.step_12,
                step13: step.step_13,
                step14: step.step_14,
                step15: step.step_15,
                step16: step.step_16,
                step17: step.step_17,
                step18: step.step_18,
                step19: step.step_19,
                step20: step.step_20
            },
            create: {
                id: step.id,
                step1: step.step_1,
                step2: step.step_2,
                step3: step.step_3,
                step4: step.step_4,
                step5: step.step_5,
                step6: step.step_6,
                step7: step.step_7,
                step8: step.step_8,
                step9: step.step_9,
                step10: step.step_10,
                step11: step.step_11,
                step12: step.step_12,
                step13: step.step_13,
                step14: step.step_14,
                step15: step.step_15,
                step16: step.step_16,
                step17: step.step_17,
                step18: step.step_18,
                step19: step.step_19,
                step20: step.step_20
            }
        })
    })
}

async function seedRecipes() {
    recipes.forEach(async (recipe) => {
        await db.recipe.upsert({
            where: {
                id: recipe.id
            },
            update: {
                id: recipe.id,
                name: recipe.name,
                description: recipe.description,
                category: recipe.category,
                vegan: recipe.vegan,
                cookTime: recipe.cook_time,
                thumbnail: recipe.thumbnail,
                origin: recipe.origin,
                ingredientId: recipe.ingredient_id,
                measureId: recipe.measure_id,
                stepId: recipe.step_id,
                userId: recipe.user_id
            },
            create: {
                id: recipe.id,
                name: recipe.name,
                description: recipe.description,
                category: recipe.category,
                vegan: recipe.vegan,
                cookTime: recipe.cook_time,
                thumbnail: recipe.thumbnail,
                origin: recipe.origin,
                ingredientId: recipe.ingredient_id,
                measureId: recipe.measure_id,
                stepId: recipe.step_id,
                userId: recipe.user_id
            }
        })
    })
}

async function seedUsers() {
    users.forEach(async (user) => {
        await db.user.upsert({
            where: {
                id: user.id
            },
            update: {
                id: user.id,
                username: user.username,
                email: user.email,
                password: user.password
            },
            create: {
                id: user.id,
                username: user.username,
                email: user.email,
                password: user.password
            }
        })
    })
}

async function main() {
    try{
        seedIngredients()        
        seedMeasures()
        seedRecipes()
        seedSteps()
        seedUsers()
    } catch(err) {
        console.log(err)
        process.exit(1)
    }
}

main()