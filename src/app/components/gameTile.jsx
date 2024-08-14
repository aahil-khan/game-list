'use client';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { forwardRef, use } from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Ysabeau_SC } from 'next/font/google';
import { Josefin_Sans } from 'next/font/google';
import Rating from '@mui/material/Rating';
import { StarBorder } from '@mui/icons-material';

const ysabeau = Ysabeau_SC({ subsets: ["latin"] , weight : '700' });
const josefin = Josefin_Sans({ subsets: ["latin"] , weight : '400' });

const GameTile = forwardRef((props,ref)=>{


    function handleMouseEvent(){
        setMouseOver(!isMouseOver);
    }

    const [isMouseOver , setMouseOver] = useState(false);
    


    return (
        <Box gap={10} sx={{mb:5 ,width:800 , minWidth:500 , maxWidth:1000 , paddingBottom:0, transition: 'border-bottom 0.2s ease-in-out','&:hover':{
                        borderBottom: '2px solid transparent',
                        boxShadow: '2px 2px 10px rgba(255, 255, 255, 0.5)',
                    }}} style={{display:"flex" , flexDirection:"row"}}>
            <Card ref={ref} sx={{ maxHeight : 300 , display:"flex"}}>
                <CardActionArea onMouseOver={()=>{
                    handleMouseEvent();
                }}
                onMouseOut={()=>{
                    handleMouseEvent();
                }}
                >
                <CardMedia
                sx={{width: 190,
                    transition: 'width 0.2s ease-in-out ',
                    '&:hover':{
                        width:210,
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
            <Box style={{display:"flex" , flexDirection:"column"}} alignItems={"center"} justifyContent={"center"}>
                <Link sx={{transition: 'transform 0.2s ease-in-out, border-bottom 0.2s ease-in-out',
                    '&:hover':{
                        transform:'scale(1.3)',
                        borderBottom: '2px solid white',
                    }}} className={ysabeau.className} href="#" underline='none' fontSize={32} color={"inherit"}>{props.name}</Link>
                <p style={{textAlign:"center" , width:500 , fontSize:19 , lineHeight:1.5}} className={josefin.className}>{props.deck}</p>
                <Box>
                    <Rating readOnly emptyIcon={<StarBorder fontSize="inherit" sx={{color:"white"}}/>} size="large" name="game-rating" precision={0.5} value={props.rating/2}/>
                </Box>
            </Box>
        </Box>
    );
})


export default GameTile;