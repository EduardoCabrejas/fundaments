import { useState, useEffect } from 'react';
import './App.css';
import Card from "./components/Card";
import Detail from "./components/Detail";
import Houses from "./components/Houses";

function App() {
  const [characters, setCharacters] = useState([]);
  const [detail, setDetail] = useState(false);
  const [id, setId] = useState(0);
  const [selectedHouse, setSelectedHouse] = useState(null);

  const handleOnClick = (id) => {
    setId(id);
    setDetail(true);
  }

  const handleOnClose = () => {
    setDetail(false);
  }

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => {
        const charactersByHouse = data.reduce((acc, character) => {
          if (!acc[character.house]) {
            acc[character.house] = [];
          }
          acc[character.house].push(character);
          return acc;
        }, {});

        const limitedCharacters = Object.values(charactersByHouse).flatMap(houseCharacters => houseCharacters.slice(0, 5));

        setCharacters(limitedCharacters);
      })
      .catch((error) => console.log(error)); 
  }, []);

  return (
    <>
      <Houses setSelectedHouse={setSelectedHouse} />
      <div className="characters-container">
        {characters
          .filter(character => !selectedHouse || character.house === selectedHouse)
          .map((character) => (
            <Card key={character.id} character={character} handleOnClick={handleOnClick}/>
          ))}
      </div>
      { detail && <Detail id={id} handleOnClose={handleOnClose}/> }
    </> 
  );
}

export default App;

