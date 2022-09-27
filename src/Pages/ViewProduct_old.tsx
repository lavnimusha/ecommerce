import React from 'react'
import Box from '@mui/material/Box';
import { Avatar } from '@mui/material';
import {Link, useLocation} from 'react-router-dom';

type Props = {
    description: String,
    picture: string,
    title: String,
    price: String
}

const ViewProduct:React.FC<Props> = ({title, picture, description, price}): JSX.Element => {
    const location = useLocation();
    {console.log('coming here')}
    return (
    <Box sx={{display: 'flex'}}>
        <Box sx={{ order: 1 }}>
        <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/photos/blue-jean-shirt-isolated-on-white-background-picture-id584479824?k=20&m=584479824&s=612x612&w=0&h=TaUNU0xfxEMD4NM3DFGM73uVceElRKbd1BX2cygkzDA=" />
        </Box>
        <Box sx={{ order: 2 }}>
        
        </Box>
    </Box>
  )
}

export default ViewProduct