import { Request, Response} from "express";
import * as usersServices from "../services/usersServices";

export interface INewUser {
    name:string;
    email:string;
    password:string;
    repeatPassword:string;
}

export type insertUser = Omit<INewUser, "repeatPassword">
export type signinData = Omit<INewUser, "repeatPassword" | "name">

export async function signup(req:Request,res:Response){
    const newUserData: INewUser= req.body;
    await usersServices.signup(newUserData)
    res.status(201).send('Usuario criado com sucesso')
}

export async function signin(req:Request,res:Response){
    const signinData: signinData = req.body;
    const userData = await usersServices.signin(signinData)
    res.send(userData)
}