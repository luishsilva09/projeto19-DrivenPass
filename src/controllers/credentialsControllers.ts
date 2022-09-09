import { Request,Response} from 'express';
import jwt from 'jsonwebtoken';
import * as credentialServices from '../services/credentialsService';
import * as interfaces from '../interfaces/credentialsInterfaces'

function getToken(req:string | undefined){
    const  authorization  = (req);
    const token = authorization?.replace('Bearer ', '');
    return Object(jwt.decode(token || ''))
}

export async function newCredential(req:Request, res:Response){
    const credentialData:interfaces.ICredentialData = req.body;
    const userInfo:interfaces.IuserData = getToken(req.headers.authorization)
    await credentialServices.newCredential(credentialData,userInfo)

    res.status(201).send() 
}

export async function findCredentials(req:Request, res:Response){
    const credentialId:number = Number (req.query.id);
    const userInfo = getToken(req.headers.authorization);
    
    const result = await credentialServices.findCredentials(credentialId,userInfo.id)
    
    res.status(200).send(result)
}