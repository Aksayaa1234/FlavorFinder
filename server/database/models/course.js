const mongoose=require("mongoose");
require("../connect");

const courseSchema=mongoose.Schema({
    course:{
        type:String,
        lowercase:true,
        trim:true,
        require:true
    },
    discription:{
        type:String,
        lowercase:true,
        trim:true,
        require:true
    }
});

const model=mongoose.model("course",courseSchema,"course");

module.exports=model;