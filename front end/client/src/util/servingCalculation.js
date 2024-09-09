

export const servingCalculation=(refserving,quantity,serving)=>{
    let result=(quantity/refserving)*serving;
    result*=10;
    let ans=Math.round(result);
    return ans/10;
}