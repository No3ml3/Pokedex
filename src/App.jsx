/* import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
/* import "./App.css"; */
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import { useEffect } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [count, setCount] = useState(0);
  const beforeButton = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const afterButton = () => {
    if (count < pokemonList.length - 1) {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);



  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[count]} />
        {count > 0 ? <button onClick={beforeButton}>before</button> : ""}
        {count < pokemonList.length - 1 ? (
          <button onClick={afterButton}>After</button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
