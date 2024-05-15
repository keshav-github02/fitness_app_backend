const UserServices = require('../services/userServices');
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

exports.register = async (req, res) => {
    try{
        console.log("req.body", req.body);
        const{
            email,
            password,
            age,
            gender,
            height,
            weight,
            goal,
            activity
        } = req.body;

        const duplicateUser = await UserServices.getUserByEmail(email);
        if(duplicateUser){
            return res.status(400).json({message: "User already exists"});

        }
        // Register the user
        const user = await UserServices.registerUser(email, password,age,gender,height,weight,goal,activity);

        res.json({ status: "success", message: "User registered successfully"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Internal server error"});
    }
};
