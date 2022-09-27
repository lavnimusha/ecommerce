import React, { useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { ref, remove, set} from "firebase/database";
import {database} from "../firebase-config"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

type Props = {
    picture: string,
    title: String,
    price: string,
    count: number,
    entries: string[]
}

const CartCard :React.FC<Props> = ({title, picture, price, entries, count}): JSX.Element => {

  const theme = useTheme();
  
    const handleDelete = (e: any, entriesArr: string[]) => {
         e.preventDefault()
       entriesArr.forEach((entry)=>{remove(ref(database, 'shopping/' + entry))})   
    }
    const handleAddToCart = (e:any) =>{
      e.preventDefault()
      set(ref(database, 'shopping/'+(new Date()).getTime()), {
          picture: picture,
          title: title,
          price : price
      })}
      const handleSingleDelete = (e: any, entriesArr: string[]) => {
        e.preventDefault()
      let entry = entriesArr.pop()
      remove(ref(database, 'shopping/' + entry))
   }
  return (
    <Box sx={{display: 'flex', flexDirection:'row'}}>
      <Box
            component="img"
            sx={{
            height: 200,
            width: 200,
            p:3,
            maxHeight: { xs: 120, md: 200, lg: 300 },
            maxWidth: { xs: 120, md: 200, lg: 300 },
            }}
            alt="The house from the offer."
            src={picture}
            />
      <Box>
      <Box sx={{ order: 2,
             m:5, 
             width: "90%",
             }}>
            <Typography component="h1" variant="h6">
                <Box sx={{ mb: 2}}>{title}</Box>
            </Typography>
            <Typography component="h1" variant="h6">
                <Box sx={{ mb: 2}}>${price}</Box>
            </Typography>
            <Box sx={{display:"flex", flexDirection:"row"}}>
              <Button variant="contained" color="secondary"onClick={(e)=>{handleDelete(e, entries)}}>Delete</Button>
              <Box sx={{display:"flex", flexDirection:"row", ml: 2}}>
              <IconButton aria-label="delete" onClick={(e)=>{}}>
                 <AddIcon sx={{ height: 20, width: 20 }} onClick={(e:any)=>{handleAddToCart(e)}}/>
                </IconButton>
                    <Typography variant="body1" sx={{p:1}}>{count}</Typography>
                <IconButton aria-label="delete" onClick={(e)=>{handleSingleDelete(e,entries)}}>
                  <RemoveIcon sx={{ height: 20, width: 20 }} />
                </IconButton>
              </Box>
            </Box>
            
        </Box>
      </Box>
    </Box>
    
  );
}
export default CartCard
