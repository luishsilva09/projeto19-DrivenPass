import { INewUser } from "../controllers/usersControllers";
import * as usersRepository from '../repositories/usersRepository'
import bcrypt from 'bcrypt';

export async function newUser(newUserData:INewUser) {
    await findUser(newUserData.email);
    const cryptPassword = bcrypt.hashSync(newUserData.password, 10)
    const inserData = {
        name:newUserData.name,
        email:newUserData.email,
        password:cryptPassword
    }
    await usersRepository.insertNewUser(inserData)
}

async function findUser(email:string){
    const userData = await usersRepository.findUser(email)
    if(userData) throw {code:'Conflict', message:'Não autorizado'}
    return userData 
}