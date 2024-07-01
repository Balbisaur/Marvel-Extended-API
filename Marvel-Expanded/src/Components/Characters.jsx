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
          'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=30d25ddacc2cbe54e2a70aa61f9d4e07&hash=b586917f47ef9f94b3fd834269141c98'
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
