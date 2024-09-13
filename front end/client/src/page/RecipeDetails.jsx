import { Box, List, ListItem, TextField, Typography,CircularProgress, Divider, Tooltip} from "@mui/material";
import RecipeMain from "../components/RecipeMain";
import Search from "../components/Search";
import { useQuery } from "../context/QueryContext";
import { useGetApi } from "../hooks/useApi";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocationOnIcon from '@mui/icons-material/LocationOn'; 
import FastfoodIcon from '@mui/icons-material/Fastfood';
import IngredientsCard from "../components/IngredientsCard";
import InstructionCard from "../components/InstructionCard";

const RecipeDetails=()=>{
    let [query,setQuery,removeQuery]=useQuery();
    let [recipe,setRecipe]=useGetApi("/api/recipe/details",{id:query.get("id")});
    

    let detail=[];
    const add=(recipe)=>{
        detail.push({icon:<AccessAlarmIcon/>,data:recipe.preparing_time});
        detail.push({icon:<LocationOnIcon/>,data:recipe.cuisine.cuisine});
        detail.push({icon:<RestaurantMenuIcon/>,data:recipe.course.course});
        detail.push({icon:<FastfoodIcon/>,data:recipe.diet.diet});
    }
    {recipe && add(recipe)};

    

    return(
        <>
        <Box sx={{backgroundColor:"white.cream",height:"100%",minHeight:' calc( 100vh - 70px)'}}>
            <Search/>
            <Box>
            {recipe ? 
                <Box sx={{marginLeft:{xs:"2rem",sm:"5rem"},marginRight:{xs:"2rem",sm:"5rem"}}}>
                <RecipeMain detail={detail} title={recipe.recipe} img="/flavor_finder_icon.png"/>
                </Box> : <Box sx={{display:"flex",justifyContent:"center",alignContent:"center",minHeight:'calc(100vh - 70px)',flexWrap:"wrap"}}><CircularProgress /></Box>
            }
            <IngredientsCard/>
            <InstructionCard/>
            </Box>
            
        </Box>
        </>
    )
}

export default RecipeDetails;