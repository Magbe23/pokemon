import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
      const pokemonNames = response.data.results.map(pokemon => pokemon.name);
      setPokemonList(pokemonNames);
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
  };

  return (
    <div className="App">
      <div className="button-container">
        <button onClick={fetchPokemon}>Fetch Pokemon</button>
      </div>
      <div className="list-container">
        <ul>
          {pokemonList.map((pokemon, index) => (
            <li key={index}>{pokemon}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
