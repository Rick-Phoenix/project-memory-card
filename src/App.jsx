import { useState } from "react";
import "./App.css";
import Card from "./Card";

const pokemons = [
  "charizard",
  "pikachu",
  "mewtwo",
  "lucario",
  "arcanine",
  "blastoise",
];

function App() {
  const [lastTouched, setLastTouched] = useState(null);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [pokemonList, setPokemonList] = useState(pokemons);

  function handleTouched(e) {
    if (e.target.id === lastTouched) setScore(0);
    else
      setScore((score) => {
        const newScore = score + 1;
        if (newScore > bestScore) {
          setBestScore(() => newScore);
        }
        return newScore;
      });
    setLastTouched(() => e.target.id);
    const arrayCopy = pokemonList.slice();
    shuffle(arrayCopy);
    setPokemonList(() => arrayCopy);
  }

  function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  return (
    <div>
      <h1>Card Game</h1>
      <h3>Score: {score}</h3>
      <h4>Best Score: {bestScore}</h4>
      <div className="wrapper">
        {pokemonList.map((pokemon) => {
          return (
            <Card
              key={pokemon}
              pokemon={pokemon}
              onClick={handleTouched}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}

export default App;
