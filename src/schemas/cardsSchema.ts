import joi from 'joi';

export const newCardSchema = joi.object({
    title:joi.string().trim().required(),
    cardNumber:joi.string().trim().regex(/[0-9]/).required(),
    holderName:joi.string().trim().required(),
    securityCode:joi.string().trim().required().max(3),
    expirationDate:joi.string().required(),
    password:joi.string().trim().required(),
    isVirtual:joi.boolean().required(),
    type:joi.string().trim().valid('CREDIT','DEBT','BOTH').required()
})