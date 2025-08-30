// src/App.jsx
import React from 'react';
import { TeamProvider } from 'D:/github stuff/pokemon-team-builder/pokemon-team-builder/src/content/teamcontext.jsx';
import Pokedex from 'D:/github stuff/pokemon-team-builder/pokemon-team-builder/src/components/pokedex.jsx';
import TeamView from 'D:/github stuff/pokemon-team-builder/pokemon-team-builder/src/components/teamview.jsx';
import Banner from './components/banner.jsx';
import './App.css';


function App() {
  return (
    <TeamProvider>
      <div className="App">
        <Banner />
        <h1 className='title-card'>Pokémon Team Builder</h1>
        <TeamView />
        <Pokedex />
      </div>
    </TeamProvider>
  );
}

export default App;
