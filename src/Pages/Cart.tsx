import React, { useEffect, useState } from 'react'
import {database} from "../firebase-config"
import { getDatabase, ref, onValue} from "firebase/database";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CartCard from '../Components/CartCard'
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useContext } from 'react'
import {CartContext} from '../Components/CartDataContext'
import { useNavigate } from "react-router-dom";

interface Inventory {
  picture: string,
  entries: string[],
  price: string,
  count: number
}
interface InventoryEntry{
  [title:string]: Inventory
}
interface Product  {
  picture: string,
  title: string,
  price: string
}
interface ProductEntry {
  [key:string]: Product
}


function Cart() {
  const [cartCount, setCartCount] =  useState<number>(0)
  const [inventory, setInventory] =  useState<InventoryEntry>({})
  const [message, setMessage] = useState('')
  /* const setCartContext = useContext(CartContext) */
  const {cart} = useContext(CartContext)
  let navigate = useNavigate();

  const renderEmptyCart = (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: "center",flexDirection:'column'}}>
    <Typography variant="h4" sx={{p:1}}>Payment Successful</Typography> 
    <Button variant='contained' onClick={()=>{navigate(`/`)}}>Continue shopping</Button>
</Box>
  );
  const renderCart =(<Box sx={{ display: 'flex', flexGrow: 1 }}>
      
  <Grid container >
   {Object.entries(inventory).map((data, index) => (
     <Grid item sx={{width: "90%"}} key={index}>
         <CartCard entries={data[1].entries} title={data[0]} picture={data[1].picture}  price={data[1].price} count={data[1].count}/>  
       <Divider />
     </Grid>
   ))}
 </Grid> 
 <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
   <Box sx={{display: "flex", flexDirection: "row", justifyContent:"space-between", p: 2, ml: 8, mr: 8}}>
       <Box >
         <Typography variant="h5" sx={{fontWeight: "550"}} >Total: {cartCount}</Typography>
       </Box>
       <Box>
         <Button color="primary" variant="contained" onClick={(e)=>{handleProceedToPay(e)}}>Proceed to Pay</Button>
       </Box>
   </Box>
   
 </Paper>
</Box>);
  useEffect(() => {
      
      let obj: InventoryEntry = {}
      cart === null ? setMessage('Cart is Empty'):Object.entries(cart).forEach(func)
      

      function func(value: [string, Product]){
        
         if(!obj.hasOwnProperty(value[1].title))
          obj[value[1].title] = {
            picture: value[1].picture,
            entries: [value[0]],
            price: value[1].price,
            count: 1
          }
          else{
            let arr :string[] = [...obj[value[1].title].entries] 
            arr.push(value[0])
            arr = [...removeDuplicates(arr)]
            obj[value[1].title].entries = [...arr];
            (obj[value[1].title]).count += 1; 
            }
          } 
          function removeDuplicates(entryArr :string[]){
              for( let i = 0; i < entryArr.length; i++){
                  if(entryArr.lastIndexOf(entryArr[i]) != i ){
                        entryArr.splice(entryArr.lastIndexOf(entryArr[i]), 1)      
                  }
              }
              return entryArr
          }
          setInventory(obj)

          //total count of items in cart
          cart != null ? setCartCount(Object.keys(cart).length): setCartCount(0)
     
  },[cart]);

  const handleProceedToPay = (e: object) => {
      //e.preventDefault()
      fetch("http://localhost:4242/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inventory),
      })
        .then(res => {
          if (res.ok) return res.json()
          return res.json().then(json => Promise.reject(json))
        })
        .then(({ url }) => {
            console.log(url)
          window.location = url 
        })
        .catch(e => {
          console.error(e.error)
        })
  }
  if(cart === null)
    return(<Box sx={{display: 'flex', justifyContent: 'center', alignItems: "center",flexDirection:'column'}}>
    <Typography variant="h4" sx={{p:1,m:2}}>Cart is Empty</Typography> 
    <Button variant='contained' onClick={()=>{navigate(`/`)}}>Continue shopping</Button>
</Box>)
    else
  return (
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
      
  <Grid container >
   {Object.entries(inventory).map((data, index) => (
     <Grid item sx={{width: "90%"}} key={index}>
         <CartCard entries={data[1].entries} title={data[0]} picture={data[1].picture}  price={data[1].price} count={data[1].count}/>  
       <Divider />
     </Grid>
   ))}
 </Grid> 
 <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
   <Box sx={{display: "flex", flexDirection: "row", justifyContent:"space-between", p: 2, ml: 8, mr: 8}}>
       <Box >
         <Typography variant="h5" sx={{fontWeight: "550"}} >Total: {cartCount}</Typography>
       </Box>
       <Box>
         <Button color="primary" variant="contained" onClick={(e)=>{handleProceedToPay(e)}}>Proceed to Pay</Button>
       </Box>
   </Box>
   
 </Paper>
</Box>
  
  )
}

export default Cart