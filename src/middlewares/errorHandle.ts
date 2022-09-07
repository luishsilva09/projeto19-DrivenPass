import{ NextFunction, Request,Response} from 'express';

export default async function errorHandle(error:{code:string,message:string},req:Request,res:Response,next:NextFunction){
    if(error.code === 'Invalid') return res.status(422).send(error.message);
    console.log(error);
    return res.status(500).send(error)
}