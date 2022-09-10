import { INoteData } from "../interfaces/noteIntefaces";
import * as noteRepository from '../repositories/notesRepository';


export async function newNote(noteData:INoteData,userId:number ){
    const existData = await noteRepository.existData(noteData.title,userId);
    if(existData.length !== 0) throw {code:'Conflict',message:'Dados já existentes'}

    await noteRepository.insert(noteData,userId)
}