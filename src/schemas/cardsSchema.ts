import Joi from 'joi';
import JoiDate from '@joi/date';
const joi = Joi.extend(JoiDate)

export const newCardSchema = joi.object({
    title:joi.string().trim().required(),
    cardNumber:joi.string().trim().regex(/[ˆ0-9]/).required(),
    holderName:joi.string().trim().required(),
    securityCode:joi.string().trim().required().length(3).regex(/[0-9]{3}/),
    expirationDate:joi.date().format('MM/YY'),
    password:joi.string().trim().required(),
    isVirtual:joi.boolean().required(),
    type:joi.string().trim().valid('CREDIT','DEBT','BOTH').required()
}) 