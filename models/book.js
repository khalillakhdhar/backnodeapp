const mongoose= require('mongoose')
const author = require('./author')
const Schema=mongoose.Schema
const bookSchema= new Schema(
    {
        title:{type:String,required:true},
        inbn:{type:String,required:true},
        publicationYear:{type:Number},
        author:{type:Schema.Types.ObjectId,ref:'Author',required:true},
        createdAt:{type:Date,default:Date.now},
        updatedAt:{type:Date,default:Date.now}

    }
    )
    module.exports=mongoose.exports('Book',bookSchema)