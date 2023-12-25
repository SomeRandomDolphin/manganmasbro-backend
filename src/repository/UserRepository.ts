import db from "../config/connectDb"
import bcrypt from "bcrypt";
import env from "../config/LoacEnv";

export const createUser = async (
    idInput: number,
    usernameInput: string, 
    emailInput: string, 
    passwordInput: string,
) => {
    return await db.user.create({
        data: {
            id: idInput,
            username: usernameInput,
            email: emailInput,
            password: bcrypt.hashSync(passwordInput, env.HASH_SALT),
        }
    })
}

export const queryUserDetailbyID = async (idInput: number) => {
    const data = await db.user.findUnique({
        where: {
            id: idInput
        },
        select: {
            id: true,
            username: true,
            email: true,
            createdAt: true,
            updatedAt: true,
            deletedAt: true
        },
    })

    return data
}