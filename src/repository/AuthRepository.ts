import db from "../config/connectDb"

export const queryUserById = async (userId: number) => {
    return await db.user.findFirst({
        where: {
            id: userId
        }
    })
}

export const queryUserByEmail = async (email: string) => {
    return await db.user.findUnique({
        where: {
            email: email
        }
    })
}
