// src/components/PokemonCard.jsx
import React, { useContext } from 'react';
import { TeamContext } from '../content/teamcontext';

const PokemonCard = ({ pokemon }) => {
  const { team, addPokemon } = useContext(TeamContext);
  
  if (!pokemon) return null;

  const isFull = team.length >= 6;
  const isInTeam = team.find(p => p.name === pokemon.name);

const getButtonText = () => {
    if (isInTeam) return 'In Team';
    if (isFull) return 'Team Full';
    return 'Add to Team';
  };

  return (
    <div className="pokemon-card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <div className="pokemon-types-container">
        {pokemon.types.map((typeInfo) => (
          <span key={typeInfo.slot} className={`pokemon-type ${typeInfo.type.name}`}>
            {typeInfo.type.name}
          </span>
        ))}
      </div>
      <button onClick={() => addPokemon(pokemon)} disabled={isFull || isInTeam}>
        {getButtonText()}
      </button>
    </div>
  );
};


export default PokemonCard;
