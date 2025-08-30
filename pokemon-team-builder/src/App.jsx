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
       
        <main className='main-container'>
           <div className='pokedex-container'>
              <h1>Pokémon Team Builder</h1>
       <Pokedex />
            </div>
      
        <div className='team-container'>
            <TeamView />
            </div>

          </main>
      </div>
     
    </TeamProvider>   
    );
}

export default App;
