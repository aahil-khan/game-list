import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import axios from "axios";

const db = new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"game_db",
    password:"pgadmin",
    port:5432
});

db.connect();


const app = express();
const port = 5000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
  });


app.get("/" , async (req,res)=>{
    const result = await db.query("SELECT json_build_object('id',id,'name', name, 'boxart', boxart ,'deck',deck) AS data FROM game ORDER BY rating DESC");
    res.json(result.rows);
})

app.get("/latest" , async (req,res)=>{
    const result = await db.query("SELECT json_build_object('id',id,'name', name, 'boxart', boxart ,'deck',deck) AS data FROM game ORDER BY id DESC");
    res.json(result.rows);
})

app.get("/search" , async (req,res)=>{
    const query = req.query.name;
    console.log(query);
    const result = await db.query("SELECT json_build_object('id',id,'name', name, 'boxart', boxart ,'deck',deck) AS data FROM game WHERE LOWER(name) LIKE '%"+query+"%'");
    res.json(result.rows);
})

app.post("/add_entry",async (req,res)=>{
    console.log(req.body);
    
    const response = await axios.get("https://www.giantbomb.com/api/game/"+req.body.guid+"/?api_key=7d7d2d8541313a5e1269aa54e657cfac2c220afe&format=json&field_list=developers,franchises,genres");
    const developer = response.data.results.developers[0].name;
    let franchise="";

    if(response.data.results.franchises!=null){
        franchise = response.data.results.franchises[0].name;
    }
    
    let genre = "";
    for(let i=0 ; i<response.data.results.genres.length ; i++){
        genre+= response.data.results.genres[i].name + ",";
    }
    try{
        await db.query("INSERT INTO game (name,genre,platform,description,rating,developer,franchise,boxart,deck) VALUES ($1 , $2 , $3 , $4 , $5 , $6, $7, $8 , $9)",[req.body.name,genre,req.body.platform,req.body.description,parseInt(parseFloat(req.body.rating)*2),developer,franchise,req.body.boxart,req.body.deck]);
    }catch(err){
        console.log(err.stack);
    }
    
    


})



app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
});