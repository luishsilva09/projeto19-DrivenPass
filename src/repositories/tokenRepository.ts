import client from "../dbStrategy/db";

export async function findToken(token:string){
    return await client.sessions.findUnique({where:{token: token}}) 
}