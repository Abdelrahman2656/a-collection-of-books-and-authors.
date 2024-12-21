process.on('unhandledRejection',()=>{
    console.log('error in code');
    
})
import express from 'express'
import jwt from 'jsonwebtoken'
import { User } from './database/model/user.model.js'
import noteRouter from './src/modules/note/note.routes.js'
import userRouter from './src/modules/user/user.routes.js'
import { AppError } from './src/utils/appError.js'
import { dbconnection } from './database/connection.js'
import { globalError } from './src/middleware/globalError.js'

const app = express()
const port = 3000
app.use(express.json())

app.use('/',userRouter)
app.use('/note', noteRouter)
app.get('/verify/:token',async(req,res,next)=>{
    jwt.verify(req.params.token , 'hello' ,async(err, payload)=>{
        if(err){
            return next(new AppError(err))
        } 
        await User.findOneAndUpdate({email:payload.email},{confirmEmail:true})
        res.json({message :"Success" , email : payload.email})    
    })
})



app.use('*',(req,res,next)=>{
    // return res.status(404).json({message:`route not found ${req.originalUrl}`})
    next( new AppError(`route not found ${req.originalUrl}`,404))

})

app.use(globalError)

process.on('unhandledRejection',(err)=>{
    console.log('error',err);
    
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))