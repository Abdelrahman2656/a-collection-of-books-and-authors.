import { model, Schema } from "mongoose"


//create schema
const schema = new Schema({
    name:{
        type:String,
    },

    email:String,
    password:String,
    age:{
        type:Number,
        min:2
    },
    confirmEmail:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:"user"
    }
},{
    timestamps:{
        updatedAt:false
    },
    versionKey:false
})

//create model:
export const User = model('User',schema)