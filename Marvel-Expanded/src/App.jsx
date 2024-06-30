import React, { lazy, Suspense } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import './App.css';

const BrowseCharacters = lazy(() => import('./Components/Characters'));
const CharacterDetails = lazy(() => import('./Components/CharacterDetail'));
const Comics = lazy(() => import('./Components/Comic'));

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink exact activeStyle={{ color: '#5754a8' }} to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact activeStyle={{ color: '#5754a8' }} to="/characters" className="nav-link">
            Browse Characters
          </NavLink>
        </li>
        <li>
          <NavLink exact activeStyle={{ color: '#5754a8' }} to="/comics" className="nav-link">
            Comics
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters/*" element={<Suspense fallback={<div>Loading...</div>}><BrowseCharacters /></Suspense>} />
        <Route path="/character/:characterId/*" element={<Suspense fallback={<div>Loading...</div>}><CharacterDetails /></Suspense>} />
        <Route path="/comics/*" element={<Suspense fallback={<div>Loading...</div>}><Comics /></Suspense>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;

