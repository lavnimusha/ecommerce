import * as React from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import women from '../images/women6.jpg'
import jewelry6 from '../images/jewelery6.jpg'
import men from '../images/mens3.jpg'
import electronics from '../images/electronics.jpg'
import Slide from '@mui/material/Slide'
import { InView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";


function LandingPage() {
  
  const [inView1, setInView1] = React.useState(false);
  const [inView2, setInView2] = React.useState(false);
  const [inView3, setInView3] = React.useState(false);
  const [inView4, setInView4] = React.useState(false);
  let navigate = useNavigate();

  return (
    <Box  sx={{display:"flex", flexDirection:"column"}}>

      <Box className="box" sx={{display: 'flex',width:"70vw", justifyContent: 'space-evenly', mx: "auto", mt: 1, mb:2}}>  
          <Box>
            <Button  onClick={()=>{navigate('/allproducts', { state: { category: "men's clothing" } })}}>Men</Button>
          </Box>
          <Box>
            <Button  onClick={()=>{navigate('/allproducts', { state: { category: "women's clothing" } })}}>Women</Button>
          </Box>
          <Box>
            <Button  onClick={()=>{navigate('/allproducts', { state: { category: "jewelery" } })}}>Jewelry</Button>
          </Box>
          <Box>
            <Button onClick={()=>{navigate('/allproducts', { state: { category: "electronics" } })}}>Electronics</Button>
          </Box>
      </Box>
      
      {/* <Divider/> */}
      
     <Box className="" sx={{ display: "flex", flexDirection:"column",  width:{lg:"80%"}, mx: {lg:"auto"}}}>
     <InView onChange={(inView, entry) => setInView4(inView)}> 
     <Slide direction="right" in={inView4} mountOnEnter unmountOnExit timeout={{enter: 2000}}>
     
     <Box
          component="img"
          sx={{
            width: "600px",
            height: "600px",
            position:"relative",
            maxWidth:{xs: "300px", md:"400px", lg:"600px"},
            maxHeight:{xs: "400px", md:"400px", lg:"600px"},
            m: 1,
            borderRadius: "20px"
          }}
          alt="The house from the offer."
          src={jewelry6}
          />
          </Slide>
          <Slide direction="right" in={inView4} mountOnEnter  timeout={{enter: 2000}}> 
          <Box sx={{position:"relative", top:"-78px", left:{xs:"45%",md:"32%", lg:"38%"}}}>
            <Typography variant="h6" color="secondary" sx={{fontSize:"40px", fontWeight:"500", backgroundColor:"", width:"25%"}}>JEWELRY</Typography>
          </Box> 
      </Slide>
      </InView>
      <InView onChange={(inView, entry) => setInView1(inView)}>
        <Slide direction="left" in={inView1} mountOnEnter timeout={{enter: 2000}}>
        <Box
          
          component="img"
          sx={{
            width: "600px",
            height: "600px", 
            maxWidth:{xs: "300px", md:"400px", lg:"600px"},
            maxHeight:{xs: "400px", md:"400px", lg:"600px"},
            position:"relative",
            left: {xs:"30%", md:"40%", lg:"60%"} ,
            m: 1,
            borderRadius: "20px"
          }}
          alt="The house from the offer."
          src={electronics}
          />
          </Slide>
          <Slide direction="right" in={inView1} mountOnEnter  timeout={{enter: 2000}}> 
          <Box sx={{position:"relative", top:"-78px", left:{xs:"25%",md:"32%", lg:"55%"}}}>
            <Typography variant="h6" color="primary" sx={{fontSize:"40px", fontWeight:"500"}}>ELECTRONICS</Typography>
          </Box> 
      </Slide>
      </InView>
      <InView onChange={(inView, entry) => setInView2(inView)}>
          <Slide direction="right" in={inView2} mountOnEnter  timeout={{enter: 2000}}>
          <Box
          component="img"

          sx={{
            width: "600px",
            height: "600px", 
            maxWidth:{xs: "300px", md:"400px", lg:"600px"},
            maxHeight:{xs: "400px", md:"400px", lg:"600px"},
            m: 1,
            borderRadius: "20px"
          }}
          alt="The house from the offer."
          src={men}
          />
          </Slide>
          <Slide direction="right" in={inView2} mountOnEnter  timeout={{enter: 2000}}> 
          <Box sx={{position:"relative", top:"-78px", left:{xs:"25%",md:"32%", lg:"35%"}}}>
            <Typography variant="caption" color="secondary" sx={{fontSize:"40px", fontWeight:"500"}}>MEN'S WEAR</Typography>
          </Box> 
      </Slide>
      </InView>
      <InView onChange={(view, entry) => setInView3(view)}>
          <Slide direction="left" in={inView3} mountOnEnter  timeout={{enter: 2000}}>
          <Box
          component="img"
          
          sx={{
            width: "600px",
            height: "600px", 
            maxWidth:{xs: "300px", md:"400px", lg:"600px"},
            maxHeight:{xs: "400px", md:"400px", lg:"600px"},
            position:"relative",
            left: {xs:"30%", md:"40%", lg:"60%"} ,
            m: 1,
            borderRadius: "20px"
          }}
          alt="The house from the offer."
          src={women}
          />
      </Slide>
          <Slide direction="right" in={inView3} mountOnEnter  timeout={{enter: 2000}}> 
          <Box sx={{position:"relative", top:"-70px", left:{xs:"25%",md:"32%", lg:"55%"}}}>
            <Typography variant="h5" color="primary" sx={{fontSize:"40px", fontWeight:"500"}}>WOMEN'S WEAR</Typography>
          </Box> 
      </Slide>
      </InView>
      </Box>
      </Box>
      
  )
}

export default LandingPage