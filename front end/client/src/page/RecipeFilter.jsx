import {Box, Button, Chip, Divider, GlobalStyles, List, ListItemButton, TextField, Typography} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useGetApi } from "../hooks/useApi";
import { dietcheking } from "../util/servingCalculation";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocationOnIcon from '@mui/icons-material/LocationOn'; 
import FastfoodIcon from '@mui/icons-material/Fastfood';
import RecipeMain from "../components/RecipeMain";

const RecipeFilter=()=>{
    let [state,setState]=useState(false);
    let [suggestions,setInput]=useGetApi("/api/ingredients/name",null);
    let [ingredients,setIngredients]=useState([]);
    let [diet,setDiet]=useState('');
    let [course,setCourse]=useState('');
    let input=useRef();
    let [recipe,setRecipe]=useGetApi("/api/recipe/filter",null);

    const searchchange=(event)=>{
        setInput({token:event.target.value,limit:4}); 
     }

     const handleClick = (id,name) => {
        let ing=[];
        if(ingredients.length>0)
        ing=[...ingredients];
        for(let i=0;i<ing.length;i++)
        {
            if(ing[i].name===name)
                return;
        }
        ing.push({name:name,id:id});
        setIngredients(()=>ing);
     }

     const handledelete = (name) => {
        let ing=[];
        ing=[...ingredients];
        for(let i=0;i<ing.length;i++)
        {
            if(ing[i].name==name)
            {
                ing.splice(i,1);
                break;
            }
        }
        setIngredients(()=>ing);
     }

     let selectDiet=(diet)=>{
        setDiet(()=>diet);
     }
     let selectCourse=(course)=>{
        setCourse(()=>course);
     }

     let Clearbutton=()=>{
        setDiet('');
        setCourse('');
        setState(()=>false);
     }
     
     let Searchbutton=()=>{
        let ing=[];
        let dietlist=[];
        if(ingredients.length==0)
        {
            setState(()=>true);
        }
        else if(diet==='' && course==='' && ingredients.length==0)
        {
            setState(()=>true);
        }
        else
        {
            for(let i=0;i<ingredients.length;i++)
            {
                ing.push(ingredients[i].id);
            }
            if(diet!="")
            dietlist=dietcheking(diet);
            setRecipe({ingredients:ing,diet:dietlist,course:course});
            setState(()=>false);
        }
     }

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

    {recipe && add(recipe)};

     useEffect(()=>{
        if(state)
        setState(()=>false);
     },[diet,course])
     //course      Side Dish,Main Course,Lunch,Snack,Dinner,Dessert,Brunch
     //diet        veg,non veg,Gluten Free,Sugar Free Diet,Diabetic Friendly,No Onion No Garlic (Sattvic)
    return (
        <>
        <GlobalStyles styles={{input:{accentColor:"#f05a3f"}}}></GlobalStyles>
        <Box sx={{backgroundColor:"white.cream",minHeight:'calc(100vh - 70px)',height:"100%",display:"flex"}}>
            <Box sx={{backgroundColor:"white.cream",width:400,minHeight:'calc(100vh - 70px)',height:"100%",boxShadow:3,padding:"1rem",justifyContent:"flex-start",position:"sticky",top:"70px",zIndex:1}}>
                <Typography sx={{color:"primary.main",fontSize:18}}>Search for ingredients you have</Typography>
                {ingredients && ingredients.length>0 && ingredients.map((ele,index)=> (
                    <Chip key={index} variant="outlined" onDelete={()=>handledelete(ele.id,ele.name)} label={ele.name} sx={{backgroundColor:"white.main",margin:"1%"}}></Chip>
                ))}
                <Typography sx={{color:"primary.main",fontSize:18}}>Select the diet</Typography>
                <Box sx={{display:"flex",flexDirection:"column"}}>
                    <Box>
                        <input type="radio" value={"veg"} name="diet" id="a" checked={diet === 'veg'} onChange={()=>selectDiet("veg")}/>
                        <label for="a">Vegtarian</label>
                    </Box>
                    <Box>
                        <input type="radio" value={"non veg"} name="diet" id="b" checked={diet === 'non veg'} onChange={()=>selectDiet("non veg")}/>
                        <label for="b">Non Vegtarian</label>
                    </Box>
                    <Box>
                        <input type="radio" value={"gluten free"} name="diet" id="c" checked={diet === 'gluten free'} onChange={()=>selectDiet("gluten free")}/>
                        <label for="c">Gluten Free</label>
                    </Box>
                    <Box>
                        <input type="radio" value={"sugar free"} name="diet" id="d" checked={diet === 'sugar free'} onChange={()=>selectDiet("sugar free")}/>
                        <label for="d">Sugar Free</label>
                    </Box>
                    <Box>
                        <input type="radio" value={"no onion no garlic (sattvic)"} name="diet" id="e" checked={diet === 'no onion no garlic (sattvic)'} onChange={()=>selectDiet("no onion no garlic (sattvic)")}/>
                        <label for="e">No Onion No Garlic</label>
                    </Box> 
                </Box>
                <Typography sx={{color:"primary.main",fontSize:18}}>Select the course</Typography>
                <Box sx={{display:"flex",flexDirection:"column"}}>
                    <Box>
                        <input type="radio" value={"side dish"} name="course" id="a2" checked={course === 'side dish'} onChange={()=>selectCourse("side dish")}/>
                        <label for="a2">Side Dish</label>
                    </Box>
                    <Box>
                        <input type="radio" value={"main course"} name="course" id="b2" checked={course === 'main dish'} onChange={()=>selectCourse("main dish")}/>
                        <label for="b2">Main Course</label>
                    </Box>
                    <Box>
                        <input type="radio" value={"lunch"} name="course" id="c2" checked={course === 'lunch'} onChange={()=>selectCourse("lunch")}/>
                        <label for="c2">Lunch</label>
                    </Box>
                    <Box>
                        <input type="radio" value={"snack"} name="course" id="d2" checked={course === 'snack'} onChange={()=>selectCourse("snack")}/>
                        <label for="d2">Snack</label>
                    </Box>
                    <Box>
                        <input type="radio" value={"dinner"} name="course" id="e2" checked={course === 'dinner'} onChange={()=>selectCourse("dinner")}/>
                        <label for="e2">Dinner</label>
                    </Box> 
                    <Box>
                        <input type="radio" value={"dessert"} name="course" id="f2" checked={course === 'dessert'} onChange={()=>selectCourse("dessert")}/>
                        <label for="f2">Dessert</label>
                    </Box> 
                    <Box>
                        <input type="radio" value={"brunch"} name="course" id="g2" checked={course === 'brunch'} onChange={()=>selectCourse("brunch")}/>
                        <label for="g2">Brunch</label>
                    </Box> 
                </Box>
                {state && <Typography sx={{color:"secondary.main",fontSize:16}}>Add a filter or ingredients to match the recipe mood you're craving!</Typography>}
                <Box sx={{display:"flex",justifyContent:"space-evenly"}}>
                    <Button variant="contained" onClick={()=>Clearbutton()} sx={{backgroundColor:"secondary.main",color:"white.main",borderRadius:10,pl:"12px",pr:"12px"}}>Clear</Button>
                    <Button variant="contained" onClick={()=>Searchbutton()} sx={{backgroundColor:"secondary.main",color:"white.main",borderRadius:10,pl:"12px",pr:"12px"}}>Search</Button>
                </Box>
            </Box>
            <Box sx={{display:"flex", flexDirection:"column",width:"100%",alignItems:"center"}}>
                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:2}}>
                    <TextField variant="outlined" size="small" inputRef={input} onChange={searchchange} sx={{width:{xs:300,sm:450,md:500},backgroundColor:'white.main',borderRadius:50,"& fieldset": { border: 'none' },boxShadow:2,paddingLeft:3}}></TextField>
                </Box>
                {
                    input.current && input.current.value!='' && suggestions && suggestions.length>0 && (
                            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:1,position:"relative"}}>
                                <List sx={{backgroundColor:'white.main',width:{xs:300,sm:450,md:500},padding:0,boxShadow: 2}}>
                                    {suggestions.map((ele,index)=>(
                                        <>
                                        <ListItemButton key={index} onClick={() =>handleClick(ele.id,ele.name)}><Typography>{ele.name}</Typography></ListItemButton>
                                        <Divider/>
                                        </>
                                    ))}
                                </List>
                            </Box>
                        )
                    }
                    <Box sx={{maxWidth:"100%"}}>
                    {recipe && (details.map((detail,index)=>(
                        <RecipeMain id={recipe[index]._id} title={recipe[index].recipe} detail={detail} img={recipe[index].image? recipe[index].image[0]: "/flavor_finder_icon.png" } index={index} />              
                    )))}
                     </Box>
                </Box>
            </Box>  
        </>
    )
}

export default RecipeFilter;