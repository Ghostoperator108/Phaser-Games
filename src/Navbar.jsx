import React from 'react';
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
        <li>
          <Link to="/">Concept One</Link>
        </li>
        <li>
          <Link to="/concept-two">Concept Two</Link>
        </li>
        <li>
            <Link to="/food-explorer">Food Explorer</Link>
        </li>
        <li>
            <Link to="/garden-harvest-game">Garden Harvesting</Link>
        </li>
        <li>
          <Link to="/source-sorter-game">Source Sorter</Link>
        </li>
        <li>
          <Link to="/garden-gobble-game">Garden Gobble Game</Link>
        </li>
        <li>
          <Link to="/animal-diet-game">Animal Diet Game</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;