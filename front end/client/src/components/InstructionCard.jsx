import { Box, Typography,CircularProgress,} from "@mui/material";
import { useQuery } from "../context/QueryContext";
import { useGetApi } from "../hooks/useApi";

const InstructionCard=()=>{
    let [query,setQuery,removeQuery]=useQuery();
    let [ing,setIngredients]=useGetApi("/api/recipe/ingredients",{id:query.get("id")});

    return(
        <>
            {ing ?
                <Box sx={{backgroundColor:"white.main",height:"100%",pl:{xs:"2rem",sm:"4rem"},pr:{xs:"2rem",sm:"4rem"},pt:"1rem",mt:"2rem",boxShadow:3}}>
                    <Typography variant="h5" color="secondary.main">Instructions</Typography>
                    <Typography sx={{padding:"1rem"}}>{ing.instructions}</Typography>
                </Box>:<Box sx={{display:"flex",justifyContent:"center",alignContent:"center",flexWrap:"wrap"}}><CircularProgress /></Box>
            }
        </>
    )
}

export default InstructionCard;