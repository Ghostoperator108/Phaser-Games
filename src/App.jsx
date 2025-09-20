import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ConceptOne from './ConceptOne';
import ConceptTwo from './ConceptTwo';
import Navbar from './Navbar'; // 1. Import your Navbar component
import './App.css';
import { Link } from 'react-router-dom';
import WelcomeGame from './WelcomeGame/WelcomeGame';
import FoodExplorer from './FoodExplorer/FoodExplorer';
import GardenHarvestGame from './GardenHarvestGame/GardenHarvestGame';
import SourceSorterGame from './SourceSorterGame/SourceSorterGame';
import GardenGobbleGame from "./GardenGobbleGame/GardenGobbleGame";
import AnimalDietGame from './AnimalDietGame/AnimalDietGame';


function App() {
  return (
    <div>
      <Navbar /> {/* 2. Use the Navbar component here */}

      <hr />

      {/* Routes remain the same */}
      <Routes>
        <Route path="/" element={<ConceptOne />} />
        <Route path="/concept-two" element={<ConceptTwo />} />
        <Route path='/welcome-game' element={<WelcomeGame />} />
        <Route path="/food-explorer" element={<FoodExplorer />} />
        <Route path="/garden-harvest-game" element={<GardenHarvestGame />} />
        <Route path="/source-sorter-game" element={<SourceSorterGame />} />
        <Route path='/garden-gobble-game' element={<GardenGobbleGame />} />
        <Route path='/animal-diet-game' element={<AnimalDietGame/>}/>
      </Routes>
    </div>
  );
}

export default App;