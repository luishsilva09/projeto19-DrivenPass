import{ Request,Response} from 'express';

export default function errorHandle(error:any,req:Request,res:Response){
    console.log(error);
    return res.status(500).send(error)
}