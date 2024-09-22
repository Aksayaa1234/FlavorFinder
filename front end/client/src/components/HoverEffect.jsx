import { useGetApi } from "../hooks/useApi";
import { Box, Tooltip} from "@mui/material";
import React, { useEffect, useState } from "react";

const HoverEffect=({children,url,query,handleResponse})=>{
    let [discription,setInput]=useGetApi(url,null);
    const [tooltipTitle, setTooltipTitle] = useState({ title: '', discription: '' });

    useEffect(()=>{
        setInput(query)
    },[])
    
    useEffect(()=>{
        if(discription)
            {
               setTooltipTitle(()=>handleResponse(discription));              
            }
    },[discription])

    return(
        <>
        <Tooltip title={<React.Fragment><h3>{tooltipTitle.title}</h3><h5>{tooltipTitle.discription}</h5></React.Fragment>} placement="right" componentsProps={{tooltip:{sx:{backgroundColor: 'white.cream',color:'black',boxShadow:3,fontSize: '1rem'}}}}>
            <Box sx={{display:"flex",alignItems:"center"}} >
                {children}
            </Box>
        </Tooltip>
        </>
    )
}

export default HoverEffect;