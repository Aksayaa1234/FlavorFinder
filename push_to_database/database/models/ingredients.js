const mongoose=require("mongoose");
require("../connect");

const ingredientsSchema=mongoose.Schema({
    ingredient:{
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
    },
    image:[{
        type:String,
        require:true
    }]
});

const model=mongoose.model("ingredients",ingredientsSchema,"ingredients");

module.exports=model;