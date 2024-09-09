import { Box, List, ListItem, Typography ,CircularProgress } from "@mui/material";
import Search from "../components/Search";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocationOnIcon from '@mui/icons-material/LocationOn'; 
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { useGetApi } from "../hooks/useApi";
import { useQuery } from "../context/QueryContext";
import RecipeMain from "../components/RecipeMain";

const Recipes=()=>{
    let [query,setQuery,removeQuery]=useQuery();
    let [recipe,setRecipe]=useGetApi("/api/recipe/searchresult",{token:query.get("token")});

    let details=[];

    const add=(recipe)=>{
        for(let i=0;i<recipe.length;i++)
        {
            let detail=[];
            detail.push({icon:<AccessAlarmIcon/>,data:recipe[i].preparing_time});
            detail.push({icon:<LocationOnIcon/>,data:recipe[i].cuisine.cuisine});
            detail.push({icon:<RestaurantMenuIcon/>,data:recipe[i].course.course});
            detail.push({icon:<FastfoodIcon/>,data:recipe[i].diet.diet});
            details.push(detail);
        }
    }
       {recipe && add(recipe)};
    return(
        <>
        <Box sx={{backgroundColor:"white.cream",minHeight:'calc(100vh - 70px)',height:"100%"}}>
            <Search/>
            {recipe && (details.map((detail,index)=>(
                <RecipeMain title={recipe[index].recipe} detail={detail} img="/flavor_finder_icon.png" index={index}/>              
            )))}
            
        </Box>
        </>
    )
}

export default Recipes;