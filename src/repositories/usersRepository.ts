import { insertUser } from "../controllers/usersControllers";
import client from "../dbStrategy/db";

export async function findUser(email:string){
    return await client.users.findUnique({where:{email: email}})
}
export async function insertNewUser(userData:insertUser ){
    await client.users.create({data:{
        name:userData.name,
        email:userData.email,
        password:userData.password   
    }})
}

export async function insertSession(token:string){
    await client.sessions.create({data:{
        token
    }})
}