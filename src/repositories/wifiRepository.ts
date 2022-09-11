import client from "../dbStrategy/db";
import { IWifiData } from "../interfaces/wifiInterfaces";

export async function insert(wifiData:IWifiData,userId:number){
    return await client.wifi.create({data:{...wifiData,userId}})
}