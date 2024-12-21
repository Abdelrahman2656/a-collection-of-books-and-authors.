import joi from 'joi'

const addNoteVal= joi.object({
    title:joi.string().min(2).max(1000).required(),
    body:joi.string().min(2).max(3000).required()
})
const updateNoteVal= joi.object({
    title:joi.string().min(2).max(1000).required(),
    body:joi.string().min(2).max(3000).required(),
    id:joi.string().hex().length(24).required()
})

export{
    addNoteVal,
    updateNoteVal
}