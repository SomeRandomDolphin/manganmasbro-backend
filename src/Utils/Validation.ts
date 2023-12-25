import Joi from "joi"

// export const loginSchema = Joi.object({
//     email: Joi.string().email().required(),
//     password: Joi.string().required()
// })

// export const changeStatusSchema = Joi.object({
//     nrp: Joi.string().required(),
//     statusDiterima: Joi.boolean().required()
// })

// export const shortenerSchema = Joi.object({
//     originalURL: Joi.string().required(),
//     shortURL: Joi.string().required()
// })

// export const staffRecruitSchema = Joi.object({
//     nama: Joi.string().required(),
//     email: Joi.string().email().required(),
//     nrp: Joi.string().required(),
//     fakultasId: Joi.number().integer().min(1).max(8).required(),
//     asalDepartemen: Joi.string().required(),
//     ketahui: Joi.string().required(),
//     motivasi: Joi.string().required(),
//     inovasi: Joi.string().required(),
//     pilihanPertama: Joi.number().integer().min(1).max(18).required(),
//     pilihanKedua: Joi.number().integer().min(1).max(18).required(),
//     pilihanKetiga: Joi.number().integer().min(1).max(18).required(),
//     prioritas: Joi.string().required(),
//     linkBuktiFollow: Joi.string().required(),
//     linkCVKreatif: Joi.string().required(),
//     linkKRSM: Joi.string().required(),
//     pertanyaan: Joi.array().items({     
//         id: Joi.number().required(),
//         divisiId: Joi.number().required(),
//         pertanyaan: Joi.string().required(),
//         jawaban: Joi.string().required()
//     }).required()
// })

export const userSchema = Joi.object({
    id: Joi.number().integer().required(),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
})

export const recipeSchema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.string().required().valid('Beef', 'Chicken', 'Seafood', 'Vegetarian', 'Pork', 'Lamb', 'Turkey', 'Pasta', 'Rice', 'Soup', 'Sandwiches', 'Salads', 'Pizza', 'Desserts'),
    vegan: Joi.boolean().required(),
    cookTime: Joi.number().integer().required(),
    thumbnail: Joi.string().required(),
    origin: Joi.string().required().valid('Asian', 'MiddleEastern', 'Indian', 'African', 'LatinAmerican', 'Mediterranean', 'Western', 'SoutheastAsian', 'EasternEuropean', 'Scandinavian'),
    ingredient1: Joi.string().required(),
    ingredient2: Joi.string(),
    ingredient3: Joi.string(),
    ingredient4: Joi.string(),
    ingredient5: Joi.string(),
    ingredient6: Joi.string(),
    ingredient7: Joi.string(),
    ingredient8: Joi.string(),
    ingredient9: Joi.string(),
    ingredient10: Joi.string(),
    ingredient11: Joi.string(),
    ingredient12: Joi.string(),
    ingredient13: Joi.string(),
    ingredient14: Joi.string(),
    ingredient15: Joi.string(),
    ingredient16: Joi.string(),
    ingredient17: Joi.string(),
    ingredient18: Joi.string(),
    ingredient19: Joi.string(),
    ingredient20: Joi.string(),
    measure1: Joi.string().required(),
    measure2: Joi.string(),
    measure3: Joi.string(),
    measure4: Joi.string(),
    measure5: Joi.string(),
    measure6: Joi.string(),
    measure7: Joi.string(),
    measure8: Joi.string(),
    measure9: Joi.string(),
    measure10: Joi.string(),
    measure11: Joi.string(),
    measure12: Joi.string(),
    measure13: Joi.string(),
    measure14: Joi.string(),
    measure15: Joi.string(),
    measure16: Joi.string(),
    measure17: Joi.string(),
    measure18: Joi.string(),
    measure19: Joi.string(),
    measure20: Joi.string(),
    step1: Joi.string().required(),
    step2: Joi.string(),
    step3: Joi.string(),
    step4: Joi.string(),
    step5: Joi.string(),
    step6: Joi.string(),
    step7: Joi.string(),
    step8: Joi.string(),
    step9: Joi.string(),
    step10: Joi.string(),
    step11: Joi.string(),
    step12: Joi.string(),
    step13: Joi.string(),
    step14: Joi.string(),
    step15: Joi.string(),
    step16: Joi.string(),
    step17: Joi.string(),
    step18: Joi.string(),
    step19: Joi.string(),
    step20: Joi.string(),
    userId: Joi.number().integer().required(),
})
