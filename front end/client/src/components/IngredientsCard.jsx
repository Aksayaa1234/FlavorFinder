import { useGetApi } from "../hooks/useApi";
import { Box, List, ListItem, TextField, Typography,CircularProgress, Divider, Tooltip} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React, { useEffect, useState } from "react";
import { servingCalculation } from "../util/servingCalculation";
import { useQuery } from "../context/QueryContext";
import HoverEffect from "./HoverEffect";

const IngredientsCard=()=>{
    let [query,setQuery,removeQuery]=useQuery();
    let [ing,setIngredients]=useGetApi("/api/ingredients",{id:query.get("id")});
    let [serves,setServing]=useState()         
    // let [discription,setInput]=useGetApi("/api/recipe/discription",null);
    // const [tooltipTitle, setTooltipTitle] = useState({ title: '', discription: '' });

    useEffect(()=>{
        //console.log(ing);
        setServing(()=>(ing?.serving))          //?.   saftey operator
    },[ing])

    const handleServingchange=(event)=>{
        if(event.target.value>0)
        setServing(()=>(event.target.value));
    }

    // const handleMouseEnter=(event)=>{
       
    //     let name=event.target.children[1];
    //     if(name)
    //     {
    //      setInput({name:name.innerHTML});
    //     }
    //     else 
    //     console.log(event.target);
        
    // }

    // useEffect(()=>{
    //     if(discription)
    //         {
    //            setTooltipTitle({
    //                title: discription.ingredient || "",
    //                discription: discription.discription || "",
    //            });
    //            //console.log(discription)
    //         }
    // },[discription])

    // const handleMouseLeave=()=>{
    //     setTooltipTitle({ title: '', description: '' });
    // }
    return(
        <>
        {ing ? 
                <Box sx={{backgroundColor:"white.main",height:"100%",pl:{xs:"2rem",sm:"4rem"},pr:{xs:"2rem",sm:"4rem"},pt:"1rem",mt:"2rem",boxShadow:3}}>
                    <Typography  color="secondary.main" sx={{fontSize:{xs:18,sm:20,md:23}}}>Ingredients</Typography>
                    <Typography sx={{padding:"1rem",fontSize:{xs:15,sm:17}}}>{ing.raw_ingredients}</Typography>
                    <Box sx={{display:"flex",alignItems:"center"}}>
                    <Typography sx={{fontSize:{xs:15,sm:17}}}>Serving : </Typography>
                    <TextField type="number" size="small" value={serves} onChange={handleServingchange}></TextField>
                    <Typography sx={{ml:2,fontSize:{xs:15,sm:17}}}>Members</Typography>
                    </Box>
                    <List sx={{mt:"1rem"}}>
                    { ing.ingredients.map((ele,index)=>(
                        <Box sx={{p:{xs:0,sm:1}}}>
                        <ListItem key={index} >
                            <HoverEffect url="/api/ingredients/discription" query={{name:ele.ingredient.ingredient}} handleResponse={(res)=>{return {title:res.ingredient ,discription:res.discription}}}>
                                    <img src={ele.ingredient.image[0]} height={50} width={50} style={{display:"inline-block",boxShadow:"2px 2px 5px rgba(0, 0, 0, 0.5)",borderRadius:10}}></img>
                                    <Typography sx={{ml:"1rem",fontSize:{xs:15,sm:16}}} minWidth={130} >{ele.ingredient.ingredient}</Typography>
                            </HoverEffect>  
                            <CloseIcon/>
                            <Typography sx={{ml:{xs:"2rem",sm:"3rem"},fontSize:{xs:15,sm:17}}} minWidth={30}>{ele.quantity == 0 ? "as per required" : servingCalculation(ing.serving,ele.quantity,serves) }</Typography>
                            <Typography sx={{ml:"1rem",fontSize:{xs:15,sm:17}}}>{ele.unit}</Typography>
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