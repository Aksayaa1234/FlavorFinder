import { Box, Button, Divider, List, ListItemButton, TextField, Typography} from "@mui/material";
import useSearch from "../hooks/useSearch";
import { useNavigate, useLocation } from 'react-router-dom';
import { useGetApi } from "../hooks/useApi";
import { useRef } from "react";
import { useQuery } from "../context/QueryContext";
import useChangeUrl from "../hooks/useChangeUrl";

const Search=()=>{
    let [suggestions,setInput]=useGetApi("/api/recipe/search",null)
    let Searchbutton=useRef();
    let [query,setQuery,removeQuery,clearQuery]=useQuery();
    let change=useChangeUrl();

    const searchchange=(event)=>{
       setInput({token:event.target.value,limit:5});
    }

    const handleClick = (id) => {
        clearQuery();
        setQuery("id",id);
        change("/recipe");
    };
    const handelSubmit=()=>{
        clearQuery();
        setQuery("token",Searchbutton.current.value);
        change("/recipesearch");
    };

    return (
        <> 
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:2}}>
                <TextField variant="outlined" size="small" inputRef={Searchbutton} onChange={searchchange} sx={{width:{xs:300,sm:450,md:700},backgroundColor:'white.main',borderTopLeftRadius:50,borderBottomLeftRadius:50,"& fieldset": { border: 'none' },boxShadow:2,paddingLeft:3}}></TextField>
                <Button variant="contained" onClick={handelSubmit} sx={{backgroundColor:'secondary.main',color:'white.main',height:40,borderTopRightRadius:50,borderBottomRightRadius:50,borderBottomLeftRadius:0,borderTopLeftRadius:0}}>Search</Button>
            </Box>
            {
               suggestions && suggestions.length>0 && (
                    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:1,position:"relative"}}>
                        <List sx={{backgroundColor:'white.main',width:{xs:300,sm:450,md:700},padding:0,boxShadow: 2}}>
                            {suggestions.map((ele,index)=>(
                                <>
                                <ListItemButton key={index} onClick={() =>handleClick(ele.id)}><Typography>{ele.title}</Typography></ListItemButton>
                                <Divider/>
                                </>
                            ))}
                        </List>
                    </Box>
                )
            }        
           
  
        </>
    )
}

export default Search;