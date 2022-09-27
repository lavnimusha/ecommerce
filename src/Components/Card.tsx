import * as React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
type Props = {
    description: String,
    picture: string,
    title: String,
    price: String
}
const CardComponent :React.FC<Props> = ({title, picture, description, price}): JSX.Element => {
  const navigate = useNavigate();
    return (
    <Card sx={{ width: {xs: "330px", md:"330px", lg:"380px"}, height: "390px", m:1, borderRadius: "20px" }}>
      <CardActionArea>
        <CardMedia
          component="img"   
          sx={{height: "270px"}}
          image={picture}
          alt="green iguana"
          onClick={()=>{navigate('/viewproduct',{ state: { title: title, picture: picture, description: description, price: price } })}}
        />
        <CardContent>
          <Typography gutterBottom color="secondary" variant="body1" sx={{fontWeight : "500"}} component="div">
            {title}
          </Typography>
          <Typography variant="caption" color="secondary" sx={{fontWeight : "450", fontSize:"20px"}}>
            ${price}
          </Typography> 
        </CardContent>
      </CardActionArea>
      <CardActions>
    {/* <Button size="medium"  onClick={()=>{navigate('/viewproduct',{ state: { title: title, picture: picture, description: description, price: price } })}}>
          View Product
        </Button> */}
      </CardActions>
    </Card>
  );
}
export default CardComponent