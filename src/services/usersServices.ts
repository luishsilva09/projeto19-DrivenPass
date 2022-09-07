import { INewUser, signinData } from "../controllers/usersControllers";
import * as usersRepository from '../repositories/usersRepository'
import bcrypt from 'bcrypt';

async function findUser(email:string){
    return await usersRepository.findUser(email)
}

export async function newUser(newUserData:INewUser) {
    const userData = await findUser(newUserData.email);
    if(userData) throw {code:'Conflict', message:'Não autorizado'}

    const cryptPassword = bcrypt.hashSync(newUserData.password, 10)
    const inserData = {
        name:newUserData.name,
        email:newUserData.email,
        password:cryptPassword
    }
    await usersRepository.insertNewUser(inserData)
}

export async function signin(signinData:signinData) {
    const userData = await findUser(signinData.email);
    if(!userData) throw {code:'Conflict', message:'Verifique seus dados'};

    const confirmPassword = bcrypt.compareSync(signinData.password, userData.password)

    if(!confirmPassword) throw {code:'Conflict', message:'Verifique seus dados'};
}