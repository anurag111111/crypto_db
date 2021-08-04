const express =require('express');
const mongoose =require('mongoose');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT|| 3000

// connect mongo db atlas
mongoose.connect(process.env.MONGO_URL , { useNewUrlParser: true ,  useUnifiedTopology: true} )
 .then( () => {console.log("Connected to mongoDB atlas...")
 
 } );


app.listen(PORT ,() =>{
    console.log("Server started at port " , PORT);
})