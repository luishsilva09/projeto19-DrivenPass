import client from "../dbStrategy/db";
import { INoteData } from "../interfaces/noteIntefaces";

export async function existData(noteTitle:string,userId:number){
    return await client.notes.findMany({
        where:{
            
            AND:[
                {title:noteTitle},
                {userId:userId}
            ]
        }
    })
}

export async function insert(noteData:INoteData,userId:number){
    return await client.notes.create({data: {...noteData,userId:userId}})
}