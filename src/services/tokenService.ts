import * as tokenRepository from '../repositories/tokenRepository';

export async function validToken(token:string){
    const existToken = await tokenRepository.findToken(token) 
    if(!existToken) throw {code:'Invalid',message:'Token invalido'}
}