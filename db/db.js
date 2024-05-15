const mongoose = require('mongoose');

const connection=mongoose.createConnection('mongodb+srv://keshavagarwalwrs:A5xgARh2f6vVfckc@cluster0.uefxcjx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/fitness-app-keshav').on(
    'open',()=>{
        console.log('Connected to the database');
    }

).on('error', (error) => {
    console.log(`Error connecting to the database: ${error}`);
});
module.exports=connection;