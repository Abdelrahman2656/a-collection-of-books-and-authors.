import { Router } from "express";
import { addNote, deleteNote, getNote, updateNote } from "./note.controller.js";
import { verifyToken } from "../../middleware/verifyToken.js";
import { catchError } from "../../middleware/catchError.js";
import { validate } from "../../middleware/validate.js";
import { addNoteVal, updateNoteVal } from "./note.validate.js";



const noteRouter=Router()
noteRouter.use(verifyToken)
noteRouter.post('/',validate(addNoteVal),catchError(addNote) )
noteRouter.get('/',catchError(getNote)  )
noteRouter.put('/:id',validate(updateNoteVal),catchError(updateNote)  )
noteRouter.delete('/:id',catchError(deleteNote)  )

export default noteRouter;