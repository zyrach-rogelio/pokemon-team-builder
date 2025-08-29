// src/components/TeamView.jsx
import React, { useContext } from 'react';
import { TeamContext } from 'D:/github stuff/pokemon-team-builder/pokemon-team-builder/src/content/teamcontext.jsx';

const TeamView = () => {
  const { team, removePokemon } = useContext(TeamContext);

  return (
    <div className="team-view">
      <h2 className='team-view-title'>Your Team</h2>
      <div className="team-slots">
        {team.map((pokemon, index) => (
          <div key={index} className="team-slot" onClick={() => removePokemon(pokemon.name)}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </div>
        ))}
        {[...Array(6 - team.length)].map((_, index) => (
          <div key={index} className="team-slot empty"></div>
        ))}
      </div>
    </div>
  );
};

export default TeamView;
