const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    username:{type:String, required:true},
    description:{type:String, require:true},
    length:{type: Number, required:true},
    publishedyear: {type: Date, required:true},
    rate:{type:Number, required:true},
},{
    timestamps:true,
});


const movie = mongoose.model('Movie', movieSchema);
module.exports=movie;