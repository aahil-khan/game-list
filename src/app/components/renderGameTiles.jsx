import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameTile from './gameTile';

function RenderGameTiles(props) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        if(props.condition=="home"){
            const response = await axios.get("http://localhost:5000/");
            setGames(response.data);
        }else if(props.condition=="latest"){
            const response = await axios.get("http://localhost:5000/latest");
            setGames(response.data);
        }
        

        
      } catch (error) {
        console.error(error.stack);
      }
    };

    fetchGames();
  }, []); 
  return (
    <div>
      {games.length > 0 ? (
        games.map((game) => (
            <div key={game.data.id}>
            <GameTile imgLink={game.data.boxart} name = {game.data.name} deck = {game.data.deck}/>
            </div>
        ))
      ) : (
        <p>Loading games...</p>
      )}
    </div>
  );
}

export default RenderGameTiles;
