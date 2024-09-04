const express=require("express");
const recipe=require("./recipe");

const router=express.Router();

router.use("/recipe",recipe);

module.exports=router;
