const express=require("express");
const recipeCont=require("../controller/recipe");

const router=express.Router();

router.get("/search",recipeCont.recipeTitleSearch);
router.get("/",recipeCont.recipeMaincontent);
router.get("/searchresult",recipeCont.recipeSearchresult)

module.exports=router;
