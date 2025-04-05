import mongoose, { mongo } from "mongoose";


const urlSchema=new mongoose.Schema({
    shortkey:String,
    LongUrl:String
})

export const Url=mongoose.model('Url',urlSchema)
