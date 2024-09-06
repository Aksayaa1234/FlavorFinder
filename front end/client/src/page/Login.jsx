import { Container ,Box, List, ListItem, Typography, TextField, Button, Link } from "@mui/material"
import { useState } from "react";


const Login=()=>{
    let [state,setState]=useState(true);

    const toggle=()=>{
        setState(()=>(!state));
    }
    return(
        <>
        <Box sx={{backgroundColor:'white.cream',width:'100vw',height:'calc(100vh - 70px)',display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Container sx={{backgroundColor:'white.main',width:{xs:300,sm:400},display:"flex",justifyContent:"center",alignItems:"center",borderRadius:8,flexDirection:"column",boxShadow:5,paddingY:"2rem"}}>  
                    <Typography variant="h4" color="primary.main" sx={{marginBottom:2}}>{state ? "LOGIN" : "SIGN UP"}</Typography>
                    {!state && <TextField label="Name" sx={{width:"100%",marginBottom:"1rem"}} type="text" required></TextField>}
                    <TextField label="Email" sx={{width:"100%",marginBottom:"1rem"}} type="email" required></TextField>
                    <TextField label="Password" sx={{width:"100%",marginBottom:"1rem"}} type="password" required></TextField>
                    <Button variant="contained" sx={{backgroundColor:"secondary.main",marginBottom:"1rem",color:"white.main","&:active":{transform:"scale(1.03)"}}}>login</Button>
                    <Link sx={{textDecoration:"none",cursor:"pointer","&:hover":{textDecoration: 'underline',"&:active":{transform:"scale(1.03)"}}}} onClick={toggle}>{state ? "Don't have an account? Sign Up" : "Already have an account? Login"}</Link>
            </Container>
        </Box>
        </>
    )
}

export default Login;