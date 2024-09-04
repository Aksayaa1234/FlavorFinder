const mongoose =require("mongoose");

mongoose.connect("mongodb://localhost:27017/recipe_app")
.then(()=>{
    console.log("DataBase sucessfully connected");
})
.catch((err)=>{
    console.log(err);
})