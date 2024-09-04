const mongoose =require("mongoose");

mongoose.connect(process.env.databaseUrl)
.then(()=>{
    console.log("DataBase sucessfully connected");
})
.catch((err)=>{
    console.log(err);
})