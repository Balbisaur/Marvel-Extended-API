import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CharacterDetails = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const response = await axios.get(
          `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=30d25ddacc2cbe54e2a70aa61f9d4e07&hash=b586917f47ef9f94b3fd834269141c98`
        );
        setCharacter(response.data.data.results[0]);
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };

    if (characterId) {
      fetchCharacterDetails();
    }
  }, [characterId]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{character.name}</h2>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
      <p>{character.description}</p>
      <h3>Comics</h3>
      <ul>
        {character.comics.items.map((comic) => (
          <li key={comic.resourceURI}>{comic.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDetails;
