import db from "../config/connectDb"

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
            password: passwordInput,
        }
    })
}

export const queryUserDetailbyID = async (idInput: number) => {
    const data =  await db.user.findUnique({
        where: {
            id: idInput
        }
    })

    return data
}