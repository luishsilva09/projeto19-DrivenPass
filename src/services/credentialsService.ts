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

export async function findCredentials(credentialId:number,userId:number){
    if(credentialId){
        const credentialData =  await credentialRepository.findCredentialsById(credentialId);
        if(!credentialData) throw {code:'NotFound',message:'dado nao encontrado'}
        if(credentialData?.userId !==userId) throw{code:'Unauthorized',message:'Não foi possivel acesasr esses dados, voce nao possui permissao'}
        return {...credentialData,password:crypt.decrypt(credentialData.password)}
    }else{
       return(await credentialRepository.allCredential(userId)).filter(element => element.password = crypt.decrypt(element.password) )
       
    }
}