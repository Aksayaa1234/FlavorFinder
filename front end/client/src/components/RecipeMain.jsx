import { Box, List, ListItem, Typography ,CircularProgress, Tooltip } from "@mui/material";
import { veg_or_nonveg } from "../util/servingCalculation";
import React from "react";

const RecipeMain=(props)=>{
    
    return(
        <>
        {props.detail ? 
            <Box key={props.index} sx={{backgroundColor:"white.main",display:"flex",marginTop:"2rem",boxShadow:3,alignItems:"center"}}>
                <Box sx={{padding:"1rem",marginLeft:"1rem",display:"flex"}}>
                <img src={props.img} style={{borderRadius:5,maxHeight:"200px",maxWidth:"200px",width:"100%",height:"100%"}}></img>
                </Box>
                <Box sx={{padding:{xs:"1rem",sm:"1.5rem"}, display:"flex",width:"100%",justifyContent: "space-between"}}>
                    <Box>
                        <Typography sx={{color:"secondary.main",fontSize:{xs:17,sm:20,md:25}}}>{props.title}</Typography>
                        <List>
                            { 
                            props.detail && props.detail.map((ele,index)=>(
                                <ListItem sx={{display:"flex",alignItems:"center",pb:0}}>
                                    <Tooltip title={<React.Fragment><Typography sx={{color:'secondary.main',fontSize:{xs:16,sm:20,md:25}}} >{ele.data}</Typography><Typography sx={{fontSize:{xs:12,sm:15,md:17}}}>{ele.discription}</Typography></React.Fragment>} placement="right" componentsProps={{tooltip:{sx:{backgroundColor: 'white.cream',color:'black',boxShadow:3,fontSize: '1rem'}}}}>
                                        <Box sx={{display:"flex",alignItems:"center"}} >
                                            {ele.icon}
                                            <Typography sx={{marginLeft:1}}>{ele.data}</Typography> 
                                        </Box>
                                    </Tooltip>   
                                    </ListItem>
                                ))
                            }                       
                        </List>
                    </Box>
                    <img src={veg_or_nonveg(props.detail[3].data)} height={25} width={25} style={{display:"flex", marginTop:"0.3rem"}}></img>
                </Box>
            </Box> : <Box sx={{display:"flex",justifyContent:"center",alignContent:"center",minHeight:'calc(100vh - 70px)',flexWrap:"wrap"}}><CircularProgress /></Box>}
        </>
    )
}

export default RecipeMain;