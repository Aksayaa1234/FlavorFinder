const fs=require("fs");
const dietSchema=require("./database/models/diet");
const courseSchema=require("./database/models/course");
let cuisineSchema=require("./database/models/cuisine");
let ingredientsSchema=require("./database/models/ingredients");
let recipeSchema=require("./database/models/recipe");

const addDiet= async()=>{
    let data=fs.readFileSync("./data/diet.json","utf8");
    data=JSON.parse(data);
    for(let i=0;i<data.length;i++)
    {
        let obj=data[i];
        let dietdata=new dietSchema({diet:obj.diet,discription:obj.discription})
        await dietdata.save();
    }
}

const addCourse= async()=>{
    let data=fs.readFileSync("./data/course.json","utf8");
    data=JSON.parse(data);
    for(let i=0;i<data.length;i++)
    {
        let obj=data[i];
        let coursedata=new courseSchema({course:obj.course,discription:obj.discription})
        await coursedata.save();
    }
}


const addCuisine= async()=>{
    let data=fs.readFileSync("./data/cuisine.json","utf8");
    data=JSON.parse(data);
    for(let i=0;i<data.length;i++)
    {
        let obj=data[i];
        let cuisinedata=new cuisineSchema({cuisine:obj.cuisine,discription:obj.discription})
        await cuisinedata.save();
    }
}

const addIngredient= async()=>{
    let data=fs.readFileSync("./data/ingerenets3.json","utf8");
    data=JSON.parse(data);
    for(let i=0;i<data.length;i++)
    {
        let obj=data[i];
        let ingredientdata=new ingredientsSchema({ingredient:obj.ingredients,discription:obj.description,image:obj.images});
        await ingredientdata.save();
    }
}

const addRecipe= async()=>{
    let data=fs.readFileSync("./data/recipe_data_v4.json","utf8");
    data=JSON.parse(data);
    
    for(let i=0;i<data.length;i++)
    {
        let obj=data[i];
        let cusine=await cuisineSchema.findOne({cuisine:obj.cuisine});
        let course=await courseSchema.findOne({course:obj.course});
        let diet=await dietSchema.findOne({diet:obj.diet});
        //console.log(obj.cuisine);
        //console.log(obj.course);
        //console.log(obj.diet);
        let array=[];
        for(let j=0;j<obj.ingredients.length;j++)
        {
            let obj3={};
            let obj2=obj.ingredients[j];
            let ingredientId= await ingredientsSchema.findOne({ingredient:obj2.ingredient});
            obj3.ingredient=ingredientId._id;
            obj3.quantity=obj2.quantity;
            obj3.unit=obj2.unit;
            array.push(obj3);
        }
        let recipedata=new recipeSchema({recipe:obj.recipe,raw_ingredients:obj.raw_ingredients,serving:obj.servings,preparing_time:obj.preparation_time,instructions:obj.instructions,ingredients:array,cuisine:cusine._id,course:course._id,diet:diet._id});
        await recipedata.save();
    }
}


addRecipe()
.then(()=>{
    console.log("added sucessfully");
})