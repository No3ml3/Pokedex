import PropTypes from "prop-types";
function NavBar({setCount, pokemonList }) {

  const whichOne = (index) => {
      setCount(index);
  };

  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => whichOne(index)}>{pokemon.name}</button>
      ))}
    </div>
  );
}

NavBar.propTypes = {
  pokemonList: PropTypes.array.isRequired,
  setCount: PropTypes.func.isRequired,
};

export default NavBar;
