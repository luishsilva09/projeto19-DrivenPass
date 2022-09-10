import joi from 'joi';

export const newNoteSchema = joi.object({
    title: joi.string().trim().max(5).required(),
    note: joi.string().trim().max(100).required()
})