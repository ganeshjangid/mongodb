const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const stdSchema=new Schema({
    name:String
});

const student=mongoose.model('student',stdSchema);

module.exports=student;