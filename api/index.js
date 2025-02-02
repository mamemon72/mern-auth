import express from 'express';
import mogoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


mogoose.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to MongoDB");
    })
    .catch((err)=>{
       console.log(err);});

      const app = express();
app.listen(3000, () => {
  console.log('Server listening on port 3000')    ;  
});