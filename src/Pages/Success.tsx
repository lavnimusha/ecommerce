import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function Success() {
    let navigate = useNavigate();
 return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: "center",flexDirection:'column'}}>
        <Typography variant="h4" sx={{p:1}}>Payment Successful</Typography> 
        <Button variant='contained' onClick={()=>{navigate(`/`)}}>Continue shopping</Button>
    </Box>
  )
}
export default Success
