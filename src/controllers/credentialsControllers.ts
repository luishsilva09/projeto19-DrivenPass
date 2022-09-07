import { Request,Response} from 'express';

export async function newCredential(req:Request, res:Response){
    const decodeToken = res.locals.token
    res.send('create credentials')
}