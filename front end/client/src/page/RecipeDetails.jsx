import { Box, List, ListItem, TextField, Typography,CircularProgress, Divider} from "@mui/material";
import RecipeMain from "../components/RecipeMain";
import Search from "../components/Search";
import { useQuery } from "../context/QueryContext";
import { useGetApi } from "../hooks/useApi";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocationOnIcon from '@mui/icons-material/LocationOn'; 
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react";
import { servingCalculation } from "../util/servingCalculation";

const RecipeDetails=()=>{
    let [query,setQuery,removeQuery]=useQuery();
    let [recipe,setRecipe]=useGetApi("/api/recipe/details",{id:query.get("id")});
    let [ing,setIngredients]=useGetApi("/api/recipe/ingredients",{id:query.get("id")});
    let [serves,setServing]=useState()         //?.   saftey operator
    useEffect(()=>{
        //console.log(ing);
        setServing(()=>(ing?.serving))
    },[ing])

    let detail=[];
    const add=(recipe)=>{
        detail.push({icon:<AccessAlarmIcon/>,data:recipe.preparing_time});
        detail.push({icon:<LocationOnIcon/>,data:recipe.cuisine.cuisine});
        detail.push({icon:<RestaurantMenuIcon/>,data:recipe.course.course});
        detail.push({icon:<FastfoodIcon/>,data:recipe.diet.diet});
    }
    {recipe && add(recipe)};

    const handleServingchange=(event)=>{
        if(event.target.value>0)
        setServing(()=>(event.target.value));
    }

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
            {ing ? 
                <Box sx={{backgroundColor:"white.main",height:"100%",pl:{xs:"2rem",sm:"4rem"},pr:{xs:"2rem",sm:"4rem"},pt:"1rem",mt:"2rem",boxShadow:3}}>
                    <Typography variant="h5" color="secondary.main">Ingredients</Typography>
                    <Typography sx={{padding:"1rem"}}>{ing.raw_ingredients}</Typography>
                    <Box sx={{display:"flex",alignItems:"center"}}>
                    <Typography>Serving : </Typography>
                    <TextField type="number" size="small" value={serves} onChange={handleServingchange}></TextField>
                    <Typography sx={{ml:2}}>Members</Typography>
                    </Box>
                    <List sx={{mt:"1rem"}}>
                    { ing.ingredients.map((ele,index)=>(
                        <Box sx={{p:1}}>
                        <ListItem key={index} >
                            <img src={ele.ingredient.image[0]} height={50} width={50} style={{display:"inline-block",boxShadow:"2px 2px 5px rgba(0, 0, 0, 0.5)"}}></img>
                            <Typography sx={{ml:"1rem"}} minWidth={200} >{ele.ingredient.ingredient}</Typography>
                            <CloseIcon/>
                            <Typography sx={{ml:"1rem"}} minWidth={30}>{ele.quantity == 0 ? "as per required" : servingCalculation(ing.serving,ele.quantity,serves) }</Typography>
                            <Typography sx={{ml:"1rem"}}>{ele.unit}</Typography>
                        </ListItem>
                        <Divider/>
                        </Box>
                    ))}
                    </List>
                </Box> : <Box sx={{display:"flex",justifyContent:"center",alignContent:"center",flexWrap:"wrap"}}><CircularProgress /></Box>
            }
            {ing ?
            <Box sx={{backgroundColor:"white.main",height:"100%",pl:{xs:"2rem",sm:"4rem"},pr:{xs:"2rem",sm:"4rem"},pt:"1rem",mt:"2rem",boxShadow:3}}>
                <Typography variant="h5" color="secondary.main">Instructions</Typography>
                <Typography sx={{padding:"1rem"}}>{ing.instructions}</Typography>
            </Box>:<Box sx={{display:"flex",justifyContent:"center",alignContent:"center",flexWrap:"wrap"}}><CircularProgress /></Box>}
            </Box>
            
        </Box>
        </>
    )
}

export default RecipeDetails;