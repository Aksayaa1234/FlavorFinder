require('dotenv').config();
const express=require("express");
const api=require("./routes/api");
const PORT=process.env.PORT; 
const app=express();
const path=require("path");

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"build")));

app.use("/api",api);

app.listen(PORT,()=>{
    console.log(`server is running in port ${PORT}`);
})