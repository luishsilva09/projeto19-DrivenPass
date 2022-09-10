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

export async function findNoteById(noteId:number){
    return await client.notes.findUnique({
        where:{id:noteId}
    })
}

export async function findAllNotes(userId:number){
    return await client.notes.findMany({where:{userId:userId}})
}

export async function deleteNote(noteId:number){
    await client.notes.delete({where:{id:noteId}})
}