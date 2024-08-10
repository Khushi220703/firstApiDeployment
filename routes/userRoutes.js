const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../models/User");

router.get("/", async(req,res)=>{
    try {
        res.send("<h1>Server is running");
    } catch (error) {
        res.send(error);
    }
})
router.post("/signup" ,async (req,res)=>{
    const {name, email, password, number, gender} = req.body;

    try {
        const hashPassword = await bcrypt.hash(password,10);
        const newUser = new User({name,email,password:hashPassword,number,gender});
        console.log(newUser);
        
        await newUser.save();
        res.status(200).json({message:"Account created!"});
        res.send(newUser);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
})

module.exports = router;
