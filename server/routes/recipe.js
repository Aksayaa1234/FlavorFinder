const express=require("express");
const recipeCont=require("../controller/recipe");
const ingredientsCont=require("../controller/ingredients");

const router=express.Router();

router.get("/search",recipeCont.recipeTitleSearch);
router.get("/searchresult",recipeCont.recipeSearchresult);
router.get("/details",recipeCont.recipeDetail);
router.get("/ingredients",ingredientsCont.ingredientsDetail);

module.exports=router;
