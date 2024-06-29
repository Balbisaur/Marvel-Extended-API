import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Components/Home';
import BrowseCharacters from './Components/Characters';
import CharacterDetails from './Components/CharacterDetail';
import Comics from './Components/Comic';
import NotFound from './Components/NotFound';
import './App.css';

const App = () => {
  return (
    <div>
        <ul>
          <li>
            <NavLink activeStyle={{ color:'#5754a8' }} to="/" className="nav-link">Home</NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color:'#5754a8' }} to="/characters" className="nav-link">Browse Characters</NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color:'#5754a8' }} to="/comics" className="nav-link">Comics</NavLink>
          </li>
        </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<BrowseCharacters />} />
        <Route path="/character/:characterId" element={<CharacterDetails />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
