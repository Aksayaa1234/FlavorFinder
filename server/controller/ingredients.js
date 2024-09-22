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
        let data= await ingredientModel.findOne({ingredient:req.query.name});
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

const ingredientsName=async(req,res)=>{
    try{
        let data=await ingredientModel.find({ingredient:{$regex:new RegExp(`\\b${req.query.token}`, 'i')}},{_id:true,ingredient:true});
        if(!data)
        {
            res.status(400);
            res.json({message:"no match found"});
            return;
        }
        let list=data.map(ele=>{
            let i=ele.ingredient.indexOf(req.query.token);
            return{
                "id":ele._id,
                "name":ele.ingredient,
                "index":i
            }
        })
        
        list.sort((a,b)=>{
            return a.index-b.index;
        });
        
        let data2=[];
        for(let i=0;i<parseInt(req.query.limit) && i<list.length ;i++)
        {
                data2.push({name:list[i].name,id:list[i].id});
        }
            
        res.status(200)
        res.json({message:"ingredients",data:data2})
        return;
    }
    catch(err)
    {
        res.status(500);
        res.json({message:"server error"});
        return;
    }
}

module.exports={ingredientsDetail,ingredientsDiscription,ingredientsName};