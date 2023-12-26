import db from "../config/connectDb"

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
            password: passwordInput,
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