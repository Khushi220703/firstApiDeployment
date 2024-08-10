const express = require("express");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const dotenv = require("dotenv")
const mongoose = require("mongoose");
dotenv.config();
const app = express();

app.use('*',cors({
  origin: 'https://first-deployment-one.vercel.app', 
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));
app.use(express.json());

const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.URL)
.then((e)=>console.log("Succes"))
.catch((e)=>console.log("Fail to connect to Db",e));



app.use("/api/users", userRoutes);

app.listen(PORT , ()=>{
    console.log(`Hello from ${PORT} port`);
    
})

