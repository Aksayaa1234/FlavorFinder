const recipeModel=require("../database/models/recipe");
const ingredientModel=require("../database/models/ingredients");

const ingredientsDetail=async(req,res)=>{
    try
    {
        let data= await recipeModel.findById(req.query.id)
        .populate("ingredients.ingredient","ingredient image");
        res.status(200);
        res.json({message:"recipe full details",data:data});
        return;
    }
    catch(err){
        res.status(500);
        res.json({message:"server error"});
        return;
    }
}

const ingredientsDiscription=async(req,res)=>{
    try
    {
        let data= await ingredientModel.findById(req.query.id);
        res.status(200);
        res.json({message:"recipe full details",data:data});
        return;
    }
    catch(err){
        res.status(500);
        res.json({message:"server error"});
        return;
    }
}

module.exports={ingredientsDetail,ingredientsDiscription};