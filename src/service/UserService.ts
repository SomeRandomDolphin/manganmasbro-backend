import { StatusCodes } from "http-status-codes";
import { CustomError } from "../Utils/ErrorHandling";
import { UserRequest } from "../model/UserModel";
import { createUser, queryUserDetailbyID, editUser, removeUser } from "../repository/UserRepository";


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
        throw new CustomError(StatusCodes.BAD_REQUEST, "Invalid ID")
    }

    return user
}

export const updateUser = async (userId: number, data: UserRequest) => {
    const isRegistered = await queryUserDetailbyID(userId);
  
    if (!isRegistered) {
      throw new CustomError(StatusCodes.NOT_FOUND, "User Not Found");
    }
  
    const updatedUser = await editUser(userId, data);
  
    if (!updatedUser) {
      throw new CustomError(StatusCodes.BAD_REQUEST, "Invalid Data")
    }
  
    return updatedUser
}
  
  export const deleteUser = async (userId: number) => {
    const isRegistered = await removeUser(userId);
  
    if (!isRegistered) {
      throw new CustomError(StatusCodes.NOT_FOUND, "User Not Found")
    }
  
    await removeUser(userId)
    return isRegistered
}