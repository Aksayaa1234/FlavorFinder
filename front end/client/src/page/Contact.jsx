import { Box } from "@mui/material";
import { Phone, Mail } from 'lucide-react';

const Contact=()=>{
    return(
        <>
        <Box sx={{backgroundColor:'white.cream',width:'100vw',height:'calc(100vh - 70px)'}}>
            {/* <img src="/Food-Websites-Image.jpg" style={{maxWidth:"100vw",height:'calc(100vh - 70px)', position:"absolute"}}/> */}
            <Box sx={{backgroundImage:"url(/Food-Websites-Image.jpg)",maxWidth:"100vw",height:'calc(100vh - 70px)',backgroundSize: "cover"}}>
            <Box sx={{display:"flex",width:"400px",height:"370px",borderRadius:"10px",position:"absolute",top:"8rem",left:"5rem",justifyContent:"center",backgroundColor:"rgba(0,0,0, 0.1)",backdropFilter:"blur(4px)",boxShadow:"0 10px 40px 0 rgba( 31, 38, 135, 0.37 )"}}>
                <Box sx={{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",p:"2rem"}}>
                    <h1 style={{margin:"8px"}}>Contact</h1>
                    <Box sx={{mb:3,display:"flex",flexDirection:"column"}}>
                    <h3 style={{marginBlock:12}}><span>Address :</span> 12, Aruljothipuram, Jallimedu Ondipudur, Coimbatore</h3>
                    <h3 style={{marginBlock:12}}><span>Phone no :</span> +91 9384596296</h3>
                    <h3 style={{marginBlock:12}}><span>Email :</span> babymohanraj9259@gmail.com</h3>
                    </Box>
                    <Box sx={{display:"flex",justifyContent:"space-evenly",width:"30%"}}>
                        <a href="tel: 9384596296" onMouseEnter={(e) => e.currentTarget.firstChild.style.transform = 'scale(1.3)'} onMouseLeave={(e) => e.currentTarget.firstChild.style.transform = 'scale(1)'}>
                            <Phone color="black" style={{transform:'scale(1)',transition:'transform 0.2s'}}/>
                        </a>
                        <a href="mailto: babymohanraj9259@gmail.com" onMouseEnter={(e) => e.currentTarget.firstChild.style.transform = 'scale(1.3)'} onMouseLeave={(e) => e.currentTarget.firstChild.style.transform = 'scale(1)'}> 
                            <Mail color="black" style={{transform:'scale(1)',transition:'transform 0.2s'}}/>
                        </a>
                    </Box>
                </Box>
            </Box>
            </Box>
        </Box>
        </>
    )
}

export default Contact;