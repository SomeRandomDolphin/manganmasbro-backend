import { StatusCodes } from "http-status-codes";
import { CustomError } from "../Utils/ErrorHandling";
import { UserRequest } from "../model/UserModel";
import { createUser, queryUserDetailbyID } from "../repository/UserRepository";

export const registerUser = async (data: UserRequest) => {  
    const isRegisted = await queryUserDetailbyID(data.id)

    if(isRegisted){
        throw new CustomError(StatusCodes.BAD_REQUEST, "ID telah terdaftar")
    }

    const user = await createUser(
        data.id,
        data.username, 
        data.email, 
        data.password,
    )

    if(!user){
        throw new CustomError(StatusCodes.BAD_REQUEST, "Invalid Data")
    }

    return user
}

export const retrieveUser = async (data: number) => {    
    const user = await queryUserDetailbyID(data)

    if(!user){
        throw new CustomError(StatusCodes.BAD_REQUEST, "Invalid Email")
    }

    return user
}