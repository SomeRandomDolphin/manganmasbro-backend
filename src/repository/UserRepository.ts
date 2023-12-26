import db from "../config/connectDb"
import bcrypt from "bcrypt";
import env from "../config/LoacEnv";
import { UserRequest } from "../model/UserModel"; 

export const createUser = async (
    idInput: number,
    usernameInput: string, 
    emailInput: string, 
    passwordInput: string,
) => {
    const user = await db.user.create({
        data: {
            id: idInput,
            username: usernameInput,
            email: emailInput,
            password: bcrypt.hashSync(passwordInput, env.HASH_SALT),
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

    return user
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

export const editUser = async (userId: number, data: UserRequest) => {
    const user = await db.user.update({
        where: { id: userId },
        data: {
            username: data.username,
            email: data.email,
            password: data.password ? bcrypt.hashSync(data.password, env.HASH_SALT) : undefined,
        },
    })
  
    return user;
}
  
export const removeUser = async (userId: number) => {
    await db.user.delete({
        where: { id: userId },
    })
}