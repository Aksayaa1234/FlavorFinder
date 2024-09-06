import Search from "../components/Search";
import { Box } from "@mui/material";

const Home=()=>{
    return(
        <>
        <Box sx={{backgroundColor:'white.cream',width:'100vw',height:'calc(100vh - 70px)'}}>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img src="/flavor_finder_icon.png" height={200} width={200} style={{marginTop:30}}></img>
            </Box>
            <Search/>
        </Box> 
        </>
    )
}

export default Home;