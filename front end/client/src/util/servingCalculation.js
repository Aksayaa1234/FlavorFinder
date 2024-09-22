

export const servingCalculation=(refserving,quantity,serving)=>{
    let result=(quantity/refserving)*serving;
    result*=10;
    let ans=Math.round(result);
    return ans/10;
}

export const veg_or_nonveg=(diet)=>{
    if(diet==="non vegeterian" || diet==="high protein non vegetarian" || diet==="eggetarian")
        return "/non_veg.png";
    else
        return "/veg.png";
}

export const dietcheking=(diet)=>{
    let list=[];
    let dietlist=["diabetic friendly","vegetarian","high protein vegetarian","non vegeterian","high protein non vegetarian","eggetarian","vegan","no onion no garlic (sattvic)","gluten free","sugar free diet"];
    if(diet==="veg")
    {
        for(let i=0;i<dietlist.length;i++)
        {
            if(dietlist[i]==="non vegeterian" || dietlist[i]==="high protein non vegetarian" || dietlist[i]==="eggetarian")
                continue;
            else
                list.push(dietlist[i])
        }
    }
    else if(diet==="non veg")
    {
        for(let i=0;i<dietlist.length;i++)
        {
            if(dietlist[i]==="non vegeterian" || dietlist[i]==="high protein non vegetarian" || dietlist[i]==="eggetarian")
                list.push(dietlist[i])
            else
                continue;
        }
    }
    else if(diet==="sugar free")
    {
        list.push("diabetic friendly");
        list.push("sugar free diet");
    }
    else
    list.push(diet);
return list;
}