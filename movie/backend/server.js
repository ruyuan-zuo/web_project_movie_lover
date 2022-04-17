const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middle ware
app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("Mongoose databse connection established successfullt");
})



const movieRouter = require('./routes/movie');
const userRouter =require('./routes/user');

app.use('/movies', movieRouter);
app.use('/users', userRouter);


//start listneing 
app.listen(port, ()=>{
    console.log('server is up');
});