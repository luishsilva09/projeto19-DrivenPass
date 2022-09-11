import { ICardData } from "../interfaces/cardsInterfaces";
import * as cardRepository from '../repositories/cardsRepository'
import { crypt } from "../utils/crypt";

export async function newCard(cardData:ICardData,userId:number){
    const existData = await cardRepository.existData(cardData,userId);
    if(existData.length !== 0) throw {code:'Conflict',message:'Dados já existentes'}
    const insertData = {
        ...cardData,
        securityCode: crypt.encrypt(cardData.securityCode),
        password: crypt.encrypt(cardData.password)
    }
    
    return await cardRepository.insert(insertData,userId)
}

export async function findCards(cardId:number,userId:number){
    if(cardId){
        const cardData =  await cardRepository.findById(cardId);
        if(!cardData) throw {code:'NotFound',message:'dado nao encontrado'}
        if(cardData.userId !==userId) throw{code:'Unauthorized',message:'Não foi possivel acesasr esses dados, voce nao possui permissao'}
        return {...cardData,password:crypt.decrypt(cardData.password),securityCode:crypt.decrypt(cardData.securityCode)}
    }else{
        const data = (await cardRepository.findAllCards(userId)).filter(element => element.password = crypt.decrypt(element.password))
        const result = data.filter(element => element.securityCode = crypt.decrypt(element.securityCode))
        
        return result
    }
}

export async function deleteCard(cardId:number,userId:number){
    await findCards(cardId,userId);
    await cardRepository.deleteCard(cardId)
}