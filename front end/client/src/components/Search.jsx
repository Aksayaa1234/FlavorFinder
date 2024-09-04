import { Box, Button, Divider, List, ListItemButton, TextField, Typography} from "@mui/material";
import useSearch from "../hooks/useSearch";
import { useNavigate, useLocation } from 'react-router-dom';

const Search=()=>{
    let location=useLocation();
    let history=useNavigate();
    let [suggestions,handleChange]=useSearch(location,history);
    
    const searchchange=(token)=>{
        handleChange(token.target.value)
    }
    return (
        <>
        <Box sx={{backgroundColor:'white.cream',width:'100vw',height:'calc(100vh - 70px)'}}>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img src="flavor_finder_icon.png" height={200} width={200} style={{marginTop:30}}></img>
            </Box>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:2}}>
                <TextField variant="outlined" size="small" onChange={searchchange} sx={{width:{xs:300,sm:450,md:700},backgroundColor:'white.main',borderTopLeftRadius:50,borderBottomLeftRadius:50,"& fieldset": { border: 'none' },boxShadow:2}}></TextField>
                <Button variant="contained" sx={{backgroundColor:'secondary.main',color:'white.main',height:40,borderTopRightRadius:50,borderBottomRightRadius:50,borderBottomLeftRadius:0,borderTopLeftRadius:0}}>Search</Button>
            </Box>
            {
                suggestions && suggestions.length>0 && (
                    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:1}}>
                        <List sx={{backgroundColor:'white.main',width:{xs:300,sm:450,md:700},padding:0,boxShadow: 2,maxHeight:"35vh",overflowY:"auto"}}>
                            {suggestions.map((ele,index)=>(
                                <>
                                <ListItemButton key={index}><Typography>{ele}</Typography></ListItemButton>
                                <Divider/>
                                </>
                            ))}
                        </List>
                    </Box>
                )
            }        
           
        </Box>   
        </>
    )
}

export default Search;