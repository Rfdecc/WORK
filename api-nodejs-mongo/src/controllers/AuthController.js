const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");
const UserModel = require("../models/User") ;

const router = express.Router();

const generateToken = (user = {}) => {
    return jwt.sign({
        id: user.id,
        name: user.name
    }, authConfig.secret , {
        expiresIn: 86400
    });
}

router.post("/register", async(req, res) => {

    const user = await user.create(req.body);

    User.password = undefined;

    return res.json({
        user,
        token: generateToken(user)  
    });
})

    router.post("/authentiate", async(req, res)=>{
        const {email, password} = req.body;

        const user = await UserModel.findOne({email}).select("+password");

        console.log(user);

        if(!user){
            return res.status(400).json({
                error: true,
                message: 'User not found'
            })
        }

        if(!await bcrypt.compare(password, user.password)){
            return res.status(400).send({
                error:true,
                message:'Invalid password'
            })
        }

        user.password = undefined;


        return res.json({
            user,
            token: generateToken(user)
        });

    })

        module.exports = router;