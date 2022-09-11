import { Request, Response } from 'express';
import { ICardData } from '../interfaces/cardsInterfaces';
import { IuserData } from '../interfaces/credentialsInterfaces';
import * as cardService from "../services/cardService";
import decodeToken from '../utils/decodeToken';

export async function newCard(req:Request,res:Response){
    const userInfo:IuserData = decodeToken(req.headers.authorization);
    const cardData:ICardData = req.body;
    const result = await cardService.newCard(cardData,userInfo.id);
    res.status(201).send(`criado com sucesso: id: ${result.id}`)
}

export async function findCards(req:Request, res:Response){
    const userInfo:IuserData = decodeToken(req.headers.authorization);
    const cardId:number = Number(req.query.cardId);
    const result = await cardService.findCards(cardId,userInfo.id)
    res.status(200).send(result)
}

export async function deleteCard(req:Request, res:Response){
    res.status(200).send('deletado com sucesso')
}