import { IWifiData } from '../interfaces/wifiInterfaces';
import * as wifiRepository from '../repositories/wifiRepository';
import { crypt } from '../utils/crypt';

export async function newWifi(wifiData:IWifiData,userId:number){
    const insertData = {
        ...wifiData,
        password:crypt.encrypt(wifiData.password)
    }
    return await wifiRepository.insert(insertData,userId)
}

export async function findWifi(wifiId:number,userId:number){
    if(wifiId){
        const wifiData = await wifiRepository.findById(wifiId)
        if(!wifiData) throw{ code:'NotFound', message:'Dados não encontrados'};
        if(wifiData.userId !== userId) throw{code:'Unauthorized',message:'Não foi possivel acesasr esses dados, voce nao possui permissao'}
        return {...wifiData,password:crypt.decrypt(wifiData.password)}
    }else{
        return await (await wifiRepository.findAllWifi(userId)).filter(element => element.password = crypt.decrypt(element.password))
    }
}