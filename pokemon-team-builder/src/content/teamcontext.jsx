// src/contexts/TeamContext.js
import React, { createContext, useState, useEffect } from 'react';

export const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [team, setTeam] = useState(() => {
    const localData = localStorage.getItem('pokemonTeam');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('pokemonTeam', JSON.stringify(team));
  }, [team]);

  const addPokemon = (pokemon) => {
    if (team.length < 6 && !team.find(p => p.name === pokemon.name)) {
      setTeam([...team, pokemon]);
    }
  };

  const removePokemon = (pokemonName) => {
    setTeam(team.filter(p => p.name !== pokemonName));
  };

  return (
    <TeamContext.Provider value={{ team, addPokemon, removePokemon }}>
      {children}
    </TeamContext.Provider>
  );
};
