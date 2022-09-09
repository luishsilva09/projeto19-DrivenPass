import * as credentialRepository from '../repositories/credentialsRepository'; 
import * as interfaces from '../interfaces/credentialsInterfaces';
import { crypt } from '../utils/crypt';

export async function newCredential(credentialData:interfaces.ICredentialData,userData:interfaces.IuserData){
    const findExistData = { 
        userId: userData.id,
        title:credentialData.title,
        credentialName:credentialData.credentialName,
        rotule:credentialData.rotule
    } 
    const exist = await credentialRepository.existData(findExistData)
    if(exist.length !== 0) throw{code:'Conflict',message:'Infomacao incorreta'}

    const encryptPassword = crypt.encrypt(credentialData.password)
    const insertData = {
        userId:userData.id,
        ...credentialData,
        password:encryptPassword     
    }
    await credentialRepository.insert(insertData)
}