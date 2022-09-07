import joi from 'joi';

export const newUserSchema = joi.object({
    name:joi.string().trim().required(),
    email:joi.string().email().trim().required(),
    password:joi.string().trim().min(10).required(),
    repeatPassword: joi.string().trim().valid(joi.ref('password')).required()
})