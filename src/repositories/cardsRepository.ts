import client from "../dbStrategy/db";
import { ICardData } from "../interfaces/cardsInterfaces";

export async function existData(cardData:ICardData,userId:number){
   return await client.cards.findMany({
        where:{
            AND:{
                userId:userId,
                title:cardData.title
            }
        }
    })
}


export async function insert(cardData:ICardData,userId:number){
    return await client.cards.create({data:{...cardData,userId}})
}

export async function findAllCards(userId:number){
    return await client.cards.findMany({where:{userId:userId}})
}

export async function findById(cardId:number){
    return await client.cards.findUnique({where:{id:cardId}})
}

export async function deleteCard(cardId:number){
    await client.cards.delete({where:{id:cardId}})
}