import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Characters.module.css'; // Import CSS module

const BrowseCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=5fd9ca13146465fb78bdc29c7f391567&hash=1e6d9386272336e8e1440bb2a96f98f0'
        );
        setCharacters(response.data.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className={styles.characterList}>
      <h2>Browse Characters</h2>
      <div className={styles.grid}>
        {characters.map((character) => (
          <div key={character.id} className={styles.card}>
            <Link to={`/character/${character.id}`}>
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <h3 className={styles.name}>{character.name}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseCharacters;
