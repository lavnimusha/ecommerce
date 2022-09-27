import React from 'react'
import Header from "./HeaderFooter/Header"
import Box from '@mui/material/Box';
type Props = {
    children: JSX.Element,
  };

const LayOut = ({children}:Props) =>{
  return (
    <Box sx={{}}>
        <Header/>
        <Box sx={{m: 2}}>
        {children}
        </Box>
    </Box>
  )
}

export default LayOut