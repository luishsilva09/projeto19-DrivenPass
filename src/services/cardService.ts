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

