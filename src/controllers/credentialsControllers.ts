import { Request,Response} from 'express';
import decodeToken from '../utils/decodeToken';
import * as credentialServices from '../services/credentialsService';
import * as interfaces from '../interfaces/credentialsInterfaces'



export async function newCredential(req:Request, res:Response){
    const credentialData:interfaces.ICredentialData = req.body;
    const userInfo:interfaces.IuserData = decodeToken(req.headers.authorization)
    const {id,title} = await credentialServices.newCredential(credentialData,userInfo)

    res.status(201).send(`Criado com sucesso: id: ${id}, title:${title}`) 
}

export async function findCredentials(req:Request, res:Response){
    const credentialId:number = Number (req.query.id);
    const userInfo:interfaces.IuserData = decodeToken(req.headers.authorization);
    
    const result = await credentialServices.findCredentials(credentialId,userInfo.id)
    
    res.status(200).send(result)
}

export async function deleteCredential(req:Request,res:Response){
    const credentialId:number = Number(req.params.credentialId);
    const userInfo:interfaces.IuserData = decodeToken(req.headers.authorization);
    await credentialServices.deleteCredential(credentialId,userInfo.id);

    res.status(200).send(`Deletado com sucesso`)
}