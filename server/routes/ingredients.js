const express=require("express");
const ingredientsCont=require("../controller/ingredients");

const router=express.Router();

router.get("/",ingredientsCont.ingredientsDetail);
router.get("/discription",ingredientsCont.ingredientsDiscription);
router.get("/name",ingredientsCont.ingredientsName);

module.exports=router;