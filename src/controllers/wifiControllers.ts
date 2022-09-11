import { IWifiData } from "../interfaces/wifiInterfaces";
import{ Request,Response} from 'express'
import { IuserData } from "../interfaces/credentialsInterfaces";
import decodeToken from "../utils/decodeToken";
import * as wifiService from '../services/wifiService';

export async function newWifi(req:Request,res:Response){
    const userInfo: IuserData = decodeToken(req.headers.authorization);
    const wifiData: IWifiData = req.body;
    const result = await wifiService.newWifi(wifiData,userInfo.id)
    res.status(201).send(`criado com sucesso: id: ${result.id}`)
}
export async function findWifi(req:Request,res:Response){
    res.status(200).send('resultado')
}
export async function deleteWifi(req:Request,res:Response){
    res.status(200).send('deletado com secesso')
}