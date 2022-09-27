import { type } from 'os';
import React, {useEffect, useState} from 'react'
import CardComponent from '../Components/Card'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {useLocation} from 'react-router-dom';

type Props = {category: String}
type Product = {
                  id: Number,
                  title: String,
                  price: String,
                  category: String,
                  description: String,
                  image: string

                }


const axios = require('axios').default;


const Products: React.FC<Props> = ( {category} ): JSX.Element => {
  let [store, setStore] = useState<Product[]>([])
  const location = useLocation().state as Props;

  useEffect(() => {
   
    console.log("****************")
    console.log(location.category)
    const getData = async () => {
      const res = location.category === 'products' ? await axios.get("https://fakestoreapi.com/products") : await axios.get("https://fakestoreapi.com/products/category/"+location.category);
      setStore(res.data);
      console.log(store)
    };
    getData()
  },[location]);
  return (
    
    <Box sx={{ flexGrow: 1,m : {xs: 2,md: 3,lg: 2},p : {xs: 2,md: 3,lg: 2} }}>
      <Grid container sx = {{display: 'flex', justifyContent: "center"}} spacing={{ xs: 2, md: 4 }} >
        {store.map((item, index) => (
          <Grid item sx={{xs:1,md:2,lg:3}} key={index}>
            <CardComponent title={item.title} picture={item.image} description={item.description} price={item.price}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Products