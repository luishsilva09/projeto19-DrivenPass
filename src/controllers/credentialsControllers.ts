import { Request,Response} from 'express';
import jwt from 'jsonwebtoken';
import * as credentialServices from '../services/credentialsService';
import * as interfaces from '../interfaces/credentialsInterfaces'



export async function newCredential(req:Request, res:Response){
    const { authorization } = (req.headers);
    const credentialData:interfaces.ICredentialData = req.body;
    const token = authorization?.replace('Bearer ', '');
    const decodeToken:interfaces.IuserData = Object(jwt.decode(token || ''))
    await credentialServices.newCredential(credentialData,decodeToken)

    res.status(201).send()
}