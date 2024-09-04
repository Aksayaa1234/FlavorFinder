const express=require("express");
const recipeCont=require("../controller/recipe");

const router=express.Router();

router.get("/search",recipeCont.recipeSearch);

module.exports=router;
