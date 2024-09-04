
import { AppBar, Box, Toolbar, Typography , Link, IconButton} from "@mui/material"
import { useState} from "react";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { Link as RouterLink } from 'react-router-dom';

const NavBar=()=>{
    const [currTab,setcurrTab]=useState(1);

    const tab=[
        {id:1,title:"RECIPE FINDER",link:"/"},
        {id:2,title:"RECIPE FILTER",link:"/find"},
        {id:3,title:"CONTACT US",link:"/contact"}
    ]

    const handleClick=(id)=>{
        setcurrTab(id);
    }
    return(
        <>
            <AppBar position="sticky">
                <Toolbar sx={{height:70,justifyContent:"space-between"}}>
                    <Box sx={{display:"flex", alignItems: 'center'}}>
                    <IconButton><RestaurantMenuIcon fontSize="large" sx={{color:'secondary.main'}}/></IconButton>
                    <Typography sx={{color:'white.main'}} fontWeight={600} variant="h5">FLAVOR FINDER</Typography>
                    </Box>
                    <div style={{display:"flex",gap:{xs: 0.5, sm: 1.5},alignItems: 'center'}}>
                         {tab.map((tab)=>{
                            return(
                            <Link key={tab.id} component={RouterLink} onClick={()=>{handleClick(tab.id)}} to={tab.link} sx={{backgroundColor: currTab===tab.id ?'secondary.main':'primary.main',padding:{ xs: 1, sm: 1.6 },borderRadius:{ xs: 4, sm: 6 },color:'white.main',margin:{xs:0.2,sm:1},textDecoration:"none",fontSize:{ xs: 11, sm: 13 },cursor:"pointer"}}>{tab.title}</Link>
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