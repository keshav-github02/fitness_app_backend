
const db = require('../db/db');
const mongoose = require('mongoose');


const { Schema } = mongoose;

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },

    age: {
        type: Number,
        required: [true, 'Age is required'],
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: [true, 'Gender is required'],
    },
    height: {
        type: Number,
        required: [true, 'Height is required'],
    },
    weight: {
        type: Number,
        required: [true, 'Weight is required'],
    },
    goal: {
        type: String,
        required: [true, 'Goal is required'],
    },
    activityLevel: {
        type: String,
        required: [true, 'Activity level is required'],
    },

}, {
    timestamps: true,
});  // timestamps: true adds createdAt and updatedAt timestamps to the schema

UserSchema.pre('save', async function () {
    // this function will run before a new user document is saved
    var user = this;
    if (!user.isModified('password')) return;
    try {
        const salt = await bcrypt.genSalt(10); // generate a salt
        const hash = await bcrypt.hash(user.password, salt); // hash the password with the salt

        user.password = hash; // set the hashed password back on our user document
    } catch (err) {
        console.log(err);
    }
});


UserSchema.methods.comparePassword = async function (password) {
    try {
        console.log("password", this.password)
        const IsValid = await bcrypt.compareSync(password, this.password);  // compare the password the user types to the hashed password in the database
        return IsValid;
    } catch (err) {
        console.log(err);
    }
};

const UserModel = db.model('User', UserSchema);

module.exports = UserModel;