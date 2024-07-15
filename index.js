const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const cors=require('cors')
const morgan=require('morgan')
require(dotenv).config()
const app=express()
const port=process.env.PORT || 4000
app.use(bodyParser.json());
app.use(cors);
app.use(morgan('dev'))
// routage

// fin de routage
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connecté a la BD mongoDB")
}).catch(err=>{
    console.error("Pas de connexion: ",err);
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});