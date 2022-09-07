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
    await client.credentials.create({data: insertData})
}