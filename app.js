const express=require('express');
const app=express();

const userRoutes=require('./routes/userRoutes');
const bodyParser=require('body-parser');

app.use(bodyParser.json()); // for parsing application/json

app.use('/user',userRoutes);


module.exports=app;