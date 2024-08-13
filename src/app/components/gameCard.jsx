import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { forwardRef } from 'react';


const ActionAreaCard = forwardRef((props,ref)=>{
  {console.log(props.deck)}
    return (
        <Card ref={ref} sx={{ maxWidth : 250}}>
          <CardActionArea>
            <CardMedia
            style={{objectFit: "cover" , objectPosition : "top" , aspectRatio: "auto 541/812"}}
            className='box-art'
              component="img"
              image={props.imgLink}
              alt="box-art"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.deck}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    );
})
 

export default ActionAreaCard;