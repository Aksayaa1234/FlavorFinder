const mongoose=require("mongoose");
require("../connect");

const dietSchema=mongoose.Schema({
    diet:{
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

const model=mongoose.model("diet",dietSchema,"diet");

module.exports=model;