import { Box, List, ListItem, Typography ,CircularProgress } from "@mui/material";

const RecipeMain=(props)=>{
    return(
        <>
        {props.detail ? 
            <Box key={props.index} sx={{backgroundColor:"white.main",display:"flex",marginTop:"3rem"}}>
                <img src={props.img} height={200} width={200} style={{padding:"1rem",marginLeft:"1rem"}}></img>
                <Box sx={{padding:"1rem"}}>
                    <Typography variant="h5" sx={{color:"secondary.main"}}>{props.title}</Typography>
                    <List>
                        { 
                        props.detail && props.detail.map((ele,index)=>(
                                <ListItem sx={{display:"flex",alignItems:"center"}}>
                                {ele.icon}
                                <Typography sx={{marginLeft:1}}>{ele.data}</Typography> 
                                </ListItem>
                            ))
                        }                       
                    </List>
                </Box>
            </Box> : <CircularProgress />}
        </>
    )
}

export default RecipeMain;