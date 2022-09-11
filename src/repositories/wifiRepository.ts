import client from "../dbStrategy/db";
import { IWifiData } from "../interfaces/wifiInterfaces";

export async function insert(wifiData:IWifiData,userId:number){
    return await client.wifi.create({data:{...wifiData,userId}})
}

export async function findById(wifiId:number){
    return await client.wifi.findUnique({where:{id:wifiId}})
}

export async function findAllWifi(userId:number){
    return await client.wifi.findMany({where:{userId:userId}})
}

export async function deleteWifi(wifiId:number){
    await client.wifi.delete({where:{id:wifiId}})
}