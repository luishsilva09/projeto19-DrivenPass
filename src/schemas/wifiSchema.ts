import joi from 'joi';

export const newWifi = joi.object({
    title:joi.string().trim().required(),
    networkName:joi.string().trim().required(),
    password:joi.string().trim().required(),
})