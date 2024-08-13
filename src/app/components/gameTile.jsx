'use client';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { forwardRef, use } from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';




const GameTile = forwardRef((props,ref)=>{

    function handleMouseEvent(){
        setMouseOver(!isMouseOver);
    }

    const [isMouseOver , setMouseOver] = useState(false);

    return (
        <Box gap={15} sx={{mb:5 ,width:800 , minWidth:500 , maxWidth:1000}} style={{display:"flex" , flexDirection:"row"}}>
            <Card ref={ref} sx={{ maxHeight : 300 , display:"flex"}}>
                <CardActionArea onMouseOver={()=>{
                    handleMouseEvent();
                }}
                onMouseOut={()=>{
                    handleMouseEvent();
                }}
                >
                <CardMedia
                sx={{width: 180,
                    transition: 'width 0.2s ease-in-out',
                    '&:hover':{
                        width:200,
                    },
                    position:"relative",
                }}
                style={{objectFit: "fit" , objectPosition : "centre" , aspectRatio: "auto 541/812" }}
                className='box-art'
                component="img"
                image={props.imgLink}
                alt="Game-Tile"
                />
                </CardActionArea>
            </Card>
            <Box style={{display:"flex" , flexDirection:"column"}} alignItems={"center"}>
                <Link sx={{transition: 'transform 0.2s ease-in-out',
                    '&:hover':{
                        transform:'scale(1.1)',
                    }}} href="#" underline='none' fontSize={24} color={"inherit"}>{props.name}</Link>
                <p style={{textAlign:"center" , width:400}}>{props.deck}</p>
            </Box>
        </Box>
    );
})

export default GameTile;