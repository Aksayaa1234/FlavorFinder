import { useGetApi } from "../hooks/useApi";
import { Box, List, ListItem, TextField, Typography,CircularProgress, Divider, Tooltip} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React, { useEffect, useState } from "react";
import { servingCalculation } from "../util/servingCalculation";
import { useQuery } from "../context/QueryContext";

const IngredientsCard=()=>{
    let [query,setQuery,removeQuery]=useQuery();
    let [ing,setIngredients]=useGetApi("/api/recipe/ingredients",{id:query.get("id")});
    let [serves,setServing]=useState()         //?.   saftey operator

    useEffect(()=>{
        //console.log(ing);
        setServing(()=>(ing?.serving))
    },[ing])

    const handleServingchange=(event)=>{
        if(event.target.value>0)
        setServing(()=>(event.target.value));
    }

    const handleMouseEnter=(id)=>{
        //let [ing,setIngredients]=useGetApi("/api/recipe/ingredients",{id:query.get("id")});
    }

    const handleMouseLeave=()=>{

    }
    return(
        <>
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
                            <Tooltip title={<React.Fragment><h3>{ele.ingredient.ingredient}</h3><h5></h5></React.Fragment>} >
                                <Box sx={{display:"flex",alignItems:"center"}} onMouseEnter={handleMouseEnter(ele.ingredient._id)} onMouseLeave={handleMouseLeave}>
                                    <img src={ele.ingredient.image[0]} height={50} width={50} style={{display:"inline-block",boxShadow:"2px 2px 5px rgba(0, 0, 0, 0.5)"}}></img>
                                    <Typography sx={{ml:"1rem"}} minWidth={200} >{ele.ingredient.ingredient}</Typography>
                                </Box>
                            </Tooltip>
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
        </>
    )
}

export default IngredientsCard;