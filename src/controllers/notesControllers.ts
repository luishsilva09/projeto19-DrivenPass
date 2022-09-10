import { Request, Response} from 'express';
import decodeToken from '../utils/decodeToken';
import * as noteService from '../services/notesService';
import { INoteData } from '../interfaces/noteIntefaces';
import { IuserData } from '../interfaces/credentialsInterfaces';

export async function newNote(req:Request,res:Response){
    const userInfo:IuserData = decodeToken(req.headers.authorization);
    const noteData:INoteData = req.body;
    await noteService.newNote(noteData,userInfo.id)
    res.status(201).send('Nota crada com sucesso')
}

export async function findNotes(req:Request,res:Response){
    res.status(200).send('Buscado com sucesso')
}

export async function deleteNote(req:Request,res:Response){
    res.status(200).send('Deletado com sucesso ')
}