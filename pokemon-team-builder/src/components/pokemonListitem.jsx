import React, { useContext } from 'react';
import { useFetch } from '../hooks/useFetch';
import { TeamContext } from '../content/teamcontext';

const PokemonListItem = ({ pokemonUrl }) => {
  const { data: pokemon, loading, error } = useFetch(pokemonUrl);
  const { team, addPokemon } = useContext(TeamContext);

  if (loading) return <div className="pokemon-card-loading"></div>; // A placeholder is better than text here
  if (error) return null; // Don't render if there's an error

  // --- THIS IS THE FIX ---
  if (!pokemon) return null;

  const isFull = team.length >= 6;
  const isInTeam = team.find(p => p.name === pokemon.name);

    
    const getButtonText = () =>{
        if(isInTeam){
            return 'In Team';
        }

        if(isFull){
            return 'Team is Full';
        } 
        return 'Add To Team';
    };


  return (
    <div className="pokemon-card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>

        <div className='pokemon-types'>
            {pokemon.types.map((typeInfo) => ( 
                <span key={typeInfo.slot} className={`pokemon-type ${typeInfo.type.name}`}>
                    {typeInfo.type.name}
                 </span>
            )) } 
        </div>
        

      <button onClick={() => addPokemon(pokemon)} disabled={isFull || isInTeam}>
      {getButtonText()}
      </button>
    </div>
  );
};

export default PokemonListItem;