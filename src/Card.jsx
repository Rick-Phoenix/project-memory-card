import { useEffect, useState } from "react";

export default function Card({ pokemon, onClick }) {
  const [imgSource, setImgSource] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json())
      .then((data) => setImgSource(data.sprites.other.home.front_default));
  }, [pokemon]);

  return (
    <div className="card" onClick={onClick}>
      <img src={imgSource} alt={pokemon} id={pokemon} className="pokemonImg" />
    </div>
  );
}
