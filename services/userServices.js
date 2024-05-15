//need model to interact with database
const UserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

class UserServices {
    static async registerUser(email, password,age,gender,height,weight,goal,activity) {

        try {
            console.log("email", email, "password", password, "age", age, "gender", gender, "weight", weight, "height", height, "goal", goal, "activity", activity);
            const createUser = new UserModel({ email, password, age, gender, weight, height, goal, activity });
            return await createUser.save();
        }
        catch (err) {
            console.log(err)
        }
    }
    static async getUserByEmail(email) 
    {
        try {
            return await UserModel.findOne({ email :email });
    }
    catch (err) {
        console.log(err);
    }
}
    static async checkUser(email) 
    {
        try {
            return await UserModel.findOne({ email :email });
    }
    catch (err) {
        console.log(err);
    }
}

static async generateToken(tokenData,JWTSecret_key,tokenExpiryTime) {

    try{
        return jwt.sign(tokenData, JWTSecret_key, { expiresIn: tokenExpiryTime }); // expires in 24 hours
    }
    catch(err){
        console.log(err);
    }
}

       
}

module.exports = UserServices;