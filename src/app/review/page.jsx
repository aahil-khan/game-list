'use client';
import React, { useEffect } from "react";
import TextField from '@mui/material/TextField';
import ActionAreaCard from "../components/gameCard";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {TailSpin} from 'react-loader-spinner';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import ReviewForm from "../components/reviewForm";
import Box from '@mui/material/Box';
import axios from "axios";
import Particles from "../components/Particles";

function App() {

  const [userQuery , setUserQuery] = React.useState("");
  const [isLoading , setLoading] = React.useState(false);
  const [gameInfo , setGameInfo] = React.useState({
    boxart : "",
    title : "",
    description : "",
    guid: 0
  });
  const [hasClicked,setHasClicked] = React.useState(false);
  const [isUserSearching , setUserSearching] = React.useState(false);
  

  React.useEffect(()=>{
    if(hasClicked){
      const fetchData = async () => {
        setUserSearching(false);
        try{
          const response = await axios.get("https://www.giantbomb.com/api/search/?api_key=7d7d2d8541313a5e1269aa54e657cfac2c220afe&query="+userQuery+"&page=1&limit=1&format=json&resources=game");
          console.log(response)
          if(response.data.results.length!==0){
            setGameInfo({
              boxart : response.data.results[0].image.medium_url,
              title : response.data.results[0].name,
              description : response.data.results[0].deck,
              guid : response.data.results[0].guid
            })
          }else{
            setGameInfo({
              boxart : "https://i.pinimg.com/736x/27/71/20/277120e1b2fafe83a4f06dca7e970372.jpg",
              title : "Game nhi mila guru",
              description : "uweehhhhhh"
            })
          }

        } catch(err){
          console.log("Error", err);
        } finally{
          setUserSearching(true);
          setLoading(false);
          setHasClicked(false);
          setUserQuery("");
        }
      }
      fetchData();



    }
  }, [hasClicked]);
 
  function handleChange(event){
    const {value} = event.target;
    setUserQuery(value);
  }

  function handleClick(){
    setLoading(true);
    setHasClicked(true);
  }

  function handleKeyDown(event){
    if(event.key=== 'Enter'){
      handleClick();
    }
  }

  

  return (
    <div>
    <Container maxWidth="xl" disableGutters={true} sx = {{mt:2 , ml:0 , mr:0 , display:"flex" , flexDirection:"column"}}>
      <Box gap={1} display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
          <TextField sx={{ input: { color: 'black'  ,fontSize:18} }} onChange={handleChange} style={{width:"500px" , backgroundColor : "#F5F5DC"}} onKeyDown={handleKeyDown} id="outlined-basic" placeholder="search game" variant="outlined" value={userQuery}/>
      <IconButton color="info" onClick={handleClick} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
        {isLoading ? 
        <TailSpin
            visible={true}
            height="40"
            width="40"
            color="#575551"
            radius="1"
            /> :null}</Box>
      </Box>
      <Box mt={5} display={"flex"} flexDirection={"row"} gap={4} justifyContent={"center"} alignItems={"top"}>
      <Slide timeout={500} direction="right" in={isUserSearching} >
        <ActionAreaCard imgLink={gameInfo.boxart} name = {gameInfo.title} deck = {gameInfo.description} />
      </Slide>
      <ReviewForm deck={gameInfo.description} boxart={gameInfo.boxart} guid={gameInfo.guid} name={gameInfo.title} isUserSearching={isUserSearching}/>
    </Box>
    </Container>
    <Particles id="tsparticles"/>
    </div>
  );
}

export default App;
