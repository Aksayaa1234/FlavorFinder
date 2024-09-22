const express=require("express");
const recipe=require("./recipe");
const ingredient=require("./ingredients");

const router=express.Router();

router.use("/recipe",recipe);
router.use("/ingredients",ingredient);

module.exports=router;
