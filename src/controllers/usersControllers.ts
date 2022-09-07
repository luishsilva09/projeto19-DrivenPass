import { Request, Response} from "express";
import { newUser } from "../services/usersServices";

export interface INewUser {
    name:string;
    email:string;
    password:string;
    repeatPassword:string;
}

export type insertUser = Omit<INewUser, "repeatPassword">


export async function signup(req:Request,res:Response){
    const newUserData: INewUser= req.body;
    await newUser(newUserData)
    res.status(201).send('Usuario criado com sucesso')
}

export async function signin(req:Request,res:Response){
    const userData: insertUser = req.body
    res.send('fazervlogin')
}