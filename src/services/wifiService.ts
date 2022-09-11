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