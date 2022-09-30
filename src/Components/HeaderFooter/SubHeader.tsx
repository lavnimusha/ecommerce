import * as React from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


function SubHeader() {
  
  let navigate = useNavigate();

  return (
    

     <Box className="box" sx={{display: 'flex',width:"70vw", justifyContent: 'space-evenly', mx: "auto", mt: 2, mb:2}}>  
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

      
  )
}

export default SubHeader