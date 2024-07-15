const mongoose= require('mongoose')
const Schema=mongoose.Schema
const authorSchema= new Schema(
    {
        name:{type:String,required:true},
        bio:{type:String,required:true},
        birthdate:{type:Date},
        createdAt:{type:Date,default:Date.now},
        updatedAt:{type:Date,default:Date.now}
    }
)
module.exports=mongoose.exports('Author',authorSchema)