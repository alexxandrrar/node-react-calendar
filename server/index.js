import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import router from "./router.js";


const PORT = 5000;

const DB_URL = 'mongodb+srv://sasha:X0Ol6ceZCKdzW2CY@calendar-cluster.ricpti2.mongodb.net/?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', router)

app.options('*', cors())

async function startApp(){
    try{
      await mongoose.connect(DB_URL)  
      app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))
      
    }
    catch(e){
      console.log(e)
    }
  }

startApp()