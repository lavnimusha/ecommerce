import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useLocation} from 'react-router-dom';
import Button from '@mui/material/Button';
import { getDatabase, ref, set } from "firebase/database";
import {database} from "../firebase-config"


 type Product =  {
    description: String,
    picture: string,
    title: String,
    price: String
} 

function ViewProduct() {
    const location = useLocation().state as Product;
    const {description,
        picture,
        title,
        price } = location

    const handleAddToCart = (e:any) =>{
        e.preventDefault()
        set(ref(database, 'shopping/'+(new Date()).getTime()), {
            picture: picture,
            title: title,
            price : price
        }); 
    }
    
  return (
    <Box sx={{display: 'flex', flexWrap: 'wrap', m:{ xs: 2, md: 3, lg:5 }, p: { xs: 1, md: 3, lg:5 }}}>
        <Box sx={{ order: 1 }}>
        <Box
            component="img"
            sx={{
            height: 400,
            width: 400,
            maxHeight: { xs: 350, md: 400, lg: 800 },
            maxWidth: { xs: 350, md: 400, lg: 800 },
            }}
            alt="The house from the offer."
            src={location.picture}
            />
    
        </Box>
        <Box sx={{ order: 2,
             m:7, 
             width: "90%",
             maxWidth: { xs: "90%", md: "80%", lg: "50%" }}}>
            <Typography component="h1" variant="h4">
                <Box sx={{ mb: 2}}>{title}</Box>
            </Typography>
            <Typography component="h1" variant="h6">
                <Box sx={{ mb: 2}}>${price}</Box>
            </Typography>
            <Typography  variant="body1">
                <Box sx={{ mb: 4}}>{description}</Box>
            </Typography>
    
            <Button variant="contained" onClick={(e)=>{handleAddToCart(e)}}>Add to Cart</Button>
        </Box>
    </Box>
  )
}

export default ViewProduct