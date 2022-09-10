import { INoteData } from "../interfaces/noteIntefaces";
import * as noteRepository from '../repositories/notesRepository';


export async function newNote(noteData:INoteData,userId:number ){
    const existData = await noteRepository.existData(noteData.title,userId);
    if(existData.length !== 0) throw {code:'Conflict',message:'Dados já existentes'}

    await noteRepository.insert(noteData,userId)
}

export async function findNotes(noteId:number,userId:number){
    if(noteId){
        const notesData = await noteRepository.findNoteById(noteId)
        if(!notesData) throw{ code:'NotFound', message:'Dados não encontrados'};
        if(notesData.userId !== userId) throw{code:'Unauthorized',message:'Não foi possivel acesasr esses dados, voce nao possui permissao'}
        return notesData
    }else{
        return await noteRepository.findAllNotes(userId)
    }
}