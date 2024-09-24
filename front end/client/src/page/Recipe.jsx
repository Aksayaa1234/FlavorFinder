import { Box } from "@mui/material";
import Search from "../components/Search";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocationOnIcon from '@mui/icons-material/LocationOn'; 
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { useGetApi } from "../hooks/useApi";
import { useQuery } from "../context/QueryContext";
import RecipeMain from "../components/RecipeMain";
import { useEffect } from "react";

const Recipes=()=>{
    let [query,setQuery,removeQuery]=useQuery();
    let [recipe,setInput]=useGetApi("/api/recipe/searchresult",{token:query.get("token")});

    let details=[];

    const add=(recipe)=>{
        for(let i=0;i<recipe.length;i++)
        {
            let detail=[];
            detail.push({icon:<AccessAlarmIcon/>,data:recipe[i].preparing_time,discription:recipe[i].preparing_time});
            detail.push({icon:<LocationOnIcon/>,data:recipe[i].cuisine.cuisine,discription:recipe[i].cuisine.discription});
            detail.push({icon:<RestaurantMenuIcon/>,data:recipe[i].course.course,discription:recipe[i].course.discription});
            detail.push({icon:<FastfoodIcon/>,data:recipe[i].diet.diet,discription:recipe[i].diet.discription});
            details.push(detail);
        }
    }

    useEffect(()=>{
        setInput({token:query.get("token")});
    },[query])

       {recipe && add(recipe)};
    return(
        <>
        <Box sx={{backgroundColor:"white.cream",minHeight:'calc(100vh - 70px)',height:"100%"}}>
            <Search/>
            {recipe && (details.map((detail,index)=>(
                <RecipeMain id={recipe[index]._id} title={recipe[index].recipe} detail={detail} img={recipe[index].image? recipe[index].image[0]: "/flavor_finder_icon.png" } index={index}/>              
            )))}
            
        </Box>
        </>
    )
}

export default Recipes;