const recipeModel=require("../database/models/recipe");
const cusinieModel=require("../database/models/cuisine");
const courseModel=require("../database/models/course");
const dietModel=require("../database/models/diet");
const ingredientsModel=require("../database/models/ingredients");

const recipeDisplay=async(req,res)=>{
    try
    {
        //console.log(typeof(req.query.limit));
        let data=await recipeModel.find({recipe:{$regex:new RegExp(`\\b${req.query.token}`, 'i')}}).limit(parseInt(req.query.limit));
        if(data.length==0)
        {
            res.status(400);
            res.json({message:"no match found"});
            return;
        }
        res.status(200);
        let recipes=[];3
        for(let i=0;i<data.length;i++)
        {
            let obj={};
            obj.recipe=data[i].recipe;
            obj.raw_ingredients=data[i].raw_ingredients;
            obj.serving=data[i].serving;
            obj.preparing_time=data[i].preparing_time;
            let cusinie=await cusinieModel.findOne({_id:data[i].cuisine});
            let course=await courseModel.findOne({_id:data[i].course});
            let diet=await dietModel.findOne({_id:data[i].diet});
            obj.cuisine=cusinie.cuisine;
            obj.course=course.course;
            obj.diet=diet.diet;
            let array=[];
            let ele=data[i].ingredients;
            //console.log(cusinie.cuisine);
            for(let j=0;j<ele.length;j++)
            {
                let obj2={};
                let ing=await ingredientsModel.findOne({_id:ele[j].ingredient});
                obj2.ingredient=ing.ingredient;
                obj2.quantity=data[i].ingredients[j].quantity;
                obj2.unit=data[i].ingredients[j].unit;
                array.push(obj2);
            }
            obj.ingredients=array;
            recipes.push(obj);
        } 
        res.json({message:"recipe details",data:recipes});
        return;
    }
    catch(err)
    {
        res.status(500);
        console.log(err);
        res.json({message:"server error"});
        return;
    }
}

const recipeTitleSearch=async(req,res)=>{
    try
    {
        let data=await recipeModel.find({recipe:{$regex:new RegExp(`\\b${req.query.token}`, 'i')}},{_id:true,recipe:true});
        //console.log(data);
        if(!data)
        {
            res.status(400);
            res.json({message:"no match found"});
            return;
        }

        let list=data.map(ele=>{
            let i=ele.recipe.indexOf(req.query.token);
            return {
                "_id":ele._id,
                "title":ele.recipe,
                "index":i
            };
        })

        list.sort((a,b)=>{
            return a.index - b.index;
        });
        
        let data2=[];
        for(let i=0;i<parseInt(req.query.limit) && i<list.length ;i++)
        {
            data2.push({title:list[i].title,id:list[i]._id});
        }
        res.status(200);
        res.json({message:"recipe details",data:data2});
    }
    catch(err)
    {
        res.status(500);
        console.log(err);
        res.json({message:"server error"});
        return;
    }
}


const recipeSearchresult=async(req,res)=>{
    try{
        let data=await recipeModel.find({recipe:{$regex:new RegExp(`\\b${req.query.token}`, 'i')}},{recipe:true,preparing_time:true,cuisine:true,course:true,diet:true}).populate([
            {path:"cuisine",select:"cuisine -_id"},
            {path:"course",select:"course -_id"},
            {path:"diet",select:"diet -_id"}
        ]);
        res.status(200);
        res.json({message:"recipe main details",data:data});
        return;
    }
    catch(err){
        res.status(500);
        console.log(err);
        res.json({message:"server error"});
        return;
    }
}

const recipeDetail=async(req,res)=>{
    try
    {
        let data= await recipeModel.findById(req.query.id)
        .populate("cuisine","cuisine")
        .populate("course","course")
        .populate("diet","diet");
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

module.exports={recipeTitleSearch,recipeDisplay,recipeSearchresult,recipeDetail};