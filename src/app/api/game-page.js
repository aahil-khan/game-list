import axios from "axios";



export default async function getInfo(guid){
    const response = await axios.get("https://www.giantbomb.com/api/game/"+guid+"/?api_key=7d7d2d8541313a5e1269aa54e657cfac2c220afe&format=json&field_list=deck,image,name");

    return response.data;
}