const express=require("express");
const recipeCont=require("../controller/recipe");


const router=express.Router();

router.get("/search",recipeCont.recipeTitleSearch);
router.get("/searchresult",recipeCont.recipeSearchresult);
router.get("/details",recipeCont.recipeDetail);


module.exports=router;
