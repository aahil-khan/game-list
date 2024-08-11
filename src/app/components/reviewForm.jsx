import React from "react";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import PlatformSelect from "../components/platform";
import axios from "axios";
import DoneIcon from '@mui/icons-material/Done';
import Zoom from '@mui/material/Zoom';


function ReviewForm(props){

    const [description , setDescription] = React.useState("");
    const [rating , setRating] = React.useState(0);
    const [platform , setPlatform] = React.useState("");
    const [submitClicked, setSubmitClicked] = React.useState(false);
    const [isTickVisible , setTickVisible] = React.useState(false);

    React.useEffect(()=>{
        if(submitClicked){
            
            const data = {
                name : props.name,
                description : description,
                rating : rating,
                platform : platform,
                guid : props.guid
            };

            const sendData = async () => {
            try{
              await axios.post("http://localhost:5000/add_entry",data);
            } catch(err){
              console.log("Error", err);
            }
          }
          
          sendData();
          setDescription("");
          setRating(0);
          setPlatform("");
          setSubmitClicked(false);
    
        }
      }, [submitClicked]);


    function handleClick(){
        setSubmitClicked(true);
        setTickVisible(true);

        setTimeout(() => {
            setTickVisible(false);  
        }, 2000);

    }

    function handleTextChange(event){
        setDescription(event.target.value);
    }

    function handleRating(event){
        setRating(event.target.value);
    }

    function handlePlatform(value){
        setPlatform(value);
    }



    return(
        <Collapse timeout={500} in={props.isUserSearching}>
            <Box mt={5} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>

                <TextField onChange={handleTextChange} type="text" multiline={true} rows={10} sx={{width:"500px"}} placeholder="Please write your game review here" variant="outlined" value={description}/>

                <Box sx={{width:"300px"}} mt={3} display={"flex"} flexDirection={"row"} gap={4} justifyContent={"center"} alignItems={"center"}>
                    <Rating onChange={handleRating} size="large" name="game-rating" precision={0.5} value={rating}/>
                    <PlatformSelect onChange={handlePlatform} />
                </Box>
                <Box mt={3} display={"flex"} flexDirection={"row"} gap={2} justifyContent={"center"} alignItems={"center"}>
                    <Button onClick={handleClick} variant="contained">Submit</Button>
                    <Zoom in={isTickVisible}>
                        <DoneIcon />
                    </Zoom>
                </Box>
            </Box>
        </Collapse>
    )
}

export default ReviewForm;