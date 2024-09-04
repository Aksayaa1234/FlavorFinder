const mongoose=require("mongoose");
require("../connect");

const cuisineSchema=mongoose.Schema({
    cuisine:{
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

const model=mongoose.model("cuisine",cuisineSchema,"cuisine");

module.exports=model;