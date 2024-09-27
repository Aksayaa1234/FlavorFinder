
import { AppBar, Box, Toolbar, Typography , Link, IconButton} from "@mui/material"
import { useState} from "react";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useQuery } from "../context/QueryContext";
import { useEffect } from "react";

const NavBar=()=>{
    const [currTab,setcurrTab]=useState(1);
    let [query,setQuery,removeQuery,clearQuery]=useQuery()
    let location=useLocation();

    const tab=[
        {id:1,title:"RECIPE FINDER",link:"/"},
        {id:2,title:"RECIPE FILTER",link:"/find"},
        {id:3,title:"CONTACT US",link:"/contact"}
        //{id:4,title:"LOGIN",link:"/login"}
    ]

    useEffect(()=>{
        for(let i=0;i<tab.length;i++)
        {
            if(location.pathname==tab[i].link)
            {
                setcurrTab(tab[i].id);
                break;
            }
        }
    })

    const handleClick=(id)=>{
        clearQuery();
        setcurrTab(id);
    }
    return(
        <>
            <AppBar position="sticky">
                <Toolbar sx={{height:70,justifyContent:"space-between",padding:0.5}}>
                    <Box sx={{display:"flex", alignItems: 'center'}}>
                    <IconButton><RestaurantMenuIcon fontSize="large" sx={{color:'secondary.main'}}/></IconButton>
                    <Typography sx={{color:'white.main'}} fontWeight={600} variant="h5">FLAVOR FINDER</Typography>
                    </Box>
                    <div style={{display:"flex",gap:{xs: 0.5, sm: 1.5},alignItems: 'center'}}>
                         {tab.map((tab)=>{
                            return(
                            <Link key={tab.id} component={RouterLink} onClick={()=>{handleClick(tab.id)}} to={tab.link} sx={{backgroundColor: currTab===tab.id ?'secondary.main':'primary.main',padding:{ xs: 1, sm: 1.6 },borderRadius:{ xs: 4, sm: 6 },color:'white.main',margin:{xs:0.3,sm:1},textDecoration:"none",fontSize:{ xs: 11, sm: 13 },cursor:"pointer",minWidth:"4rem"}}>{tab.title}</Link>
                            )
                          })} 
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
};

export default NavBar;


            // <AppBar position="sticky">
            //     <Toolbar sx={{height:70}}>
            //         <Icon sx={{width:0.03,height:0.5}}><RestaurantMenuIcon fontSize="large" sx={{color:'secondary.main'}}/></Icon>
            //         <Typography sx={{color:'white.main',marginLeft:2}} fontWeight={600} variant="h5"><span style={{color:'secondary.main'}}>F</span>LAVOUR FINDER</Typography>
            //         <div style={{position:"absolute",right:30}}>
            //              {tab.map((tab)=>{
            //                 return(<Box key={tab.id} component={Link}  onClick={()=>{handleClick(tab.id)}} to={tab.link} sx={{backgroundColor: currTab===tab.id ?'secondary.main':'primary.main',padding:1.6,borderRadius:6,color:'white.main',margin:{xs:0.2,md:1},textDecoration:"none",fontSize:13,cursor:"pointer"}}>{tab.title}</Box>)
            //               })} 
            //         </div>
            //     </Toolbar>
            // </AppBar>