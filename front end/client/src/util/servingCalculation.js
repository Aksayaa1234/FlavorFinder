

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