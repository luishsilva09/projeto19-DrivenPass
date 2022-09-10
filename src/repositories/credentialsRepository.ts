import client from "../dbStrategy/db";
import  {IFindExistData,IinsertData} from '../interfaces/credentialsInterfaces'

export async function existData(findData:IFindExistData){
   return await client.credentials.findMany({
        where:{
            AND:[
                {userId: findData.userId},
                {
                    OR:[
                        {title:findData.title },
                        {rotule:findData.rotule },
                        {credentialName:findData.credentialName}
                    ]
                }
            ]
    }})
}

export async function insert(insertData:IinsertData){
    return await client.credentials.create({data: insertData})
}

export async function findCredentialsById(credentialId:number){
    return await client.credentials.findUnique({where:{id:credentialId}})
}
export async function allCredential(userId:number) {
    return await client.credentials.findMany({
        where:{
            userId:userId
        }
    })
}

export async function deleteCredential(credentialId:number){
    await client.credentials.delete({
        where:{
            id:credentialId
        }
    })
}