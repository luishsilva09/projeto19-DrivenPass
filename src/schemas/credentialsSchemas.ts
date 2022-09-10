import joi from 'joi';

export const newCredential = joi.object({
    title:joi.string().trim().required(),
    url:joi.string().trim().uri().required(),
    userName:joi.string().trim().required(),
    password:joi.string().trim().required(),
})