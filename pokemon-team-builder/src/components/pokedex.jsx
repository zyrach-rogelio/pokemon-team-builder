// src/components/Pokedex.jsx
import React, { useState, useEffect } from 'react';
import PokemonCard from './pokemonCard.jsx'; // Import our new component

const Pokedex = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [allPokemonDetails, setAllPokemonDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // This effect runs once to fetch everything
  useEffect(() => {
    const fetchAllPokemonData = async () => {
      try {
        setLoading(true);
     
        const listRes = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        if (!listRes.ok) throw new Error('Failed to fetch Pokémon list.');
        const pokemonList = await listRes.json();

        // Create an array of fetch promises for each Pokémon's details
        const detailPromises = pokemonList.results.map(p => fetch(p.url).then(res => res.json()));
        
        // Wait for all promises to resolve
        const allDetails = await Promise.all(detailPromises);
        
        // Set our state with the rich data
        setAllPokemonDetails(allDetails);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllPokemonData();
  }, []); // The empty array ensures this runs only once on mount

  if (loading) return <p>Loading all Pokémon, please wait...</p>;
  if (error) return <p>Error: {error}</p>;

  //filter logic
  const filteredPokemon = allPokemonDetails.filter(pokemon => {
    const searchTermLower = searchTerm.toLowerCase();

    // Condition 1 
    const nameMatch = pokemon.name.toLowerCase().includes(searchTermLower);

    // Condition 2
    const typeMatch = pokemon.types.some(typeInfo =>
      typeInfo.type.name.toLowerCase().includes(searchTermLower)
    );

    // Return true if either the name or type matches
    return nameMatch || typeMatch;
  });

  return (
    <div className="pokedex">
      <h2>Pokédex</h2>
      <input
        type="text"
        placeholder="Search by name or type..."
        className="pokedex-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="pokemon-grid">
        {filteredPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;