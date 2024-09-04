require('dotenv').config();
const express=require("express");
const api=require("./routes/api");
const cors=require("cors");
const PORT=process.env.PORT; 
const app=express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(cors({ origin: 'http://localhost:3000' }));

app.use("/api",api);

app.listen(PORT,()=>{
    console.log(`server is running in port ${PORT}`);
})