import { Box, List, ListItem, Typography ,CircularProgress } from "@mui/material";

const RecipeMain=(props)=>{
    return(
        <>
        {props.detail ? 
            <Box key={props.index} sx={{backgroundColor:"white.main",display:"flex",marginTop:"2rem",boxShadow:3}}>
                <img src={props.img} height={200} width={200} style={{padding:"1rem",marginLeft:"1rem"}}></img>
                <Box sx={{padding:"1rem"}}>
                    <Typography variant="h5" sx={{color:"secondary.main"}}>{props.title}</Typography>
                    <List>
                        { 
                        props.detail && props.detail.map((ele,index)=>(
                                <ListItem sx={{display:"flex",alignItems:"center",pb:0}}>
                                {ele.icon}
                                <Typography sx={{marginLeft:1}}>{ele.data}</Typography> 
                                </ListItem>
                            ))
                        }                       
                    </List>
                </Box>
            </Box> : <Box sx={{display:"flex",justifyContent:"center",alignContent:"center",minHeight:'calc(100vh - 70px)',flexWrap:"wrap"}}><CircularProgress /></Box>}
        </>
    )
}

export default RecipeMain;