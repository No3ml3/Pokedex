import PropTypes from "prop-types";

function PokemonCard({pokemon}) {

const sayName = (name) => {
  if (name === "pikachu"){
    alert("pika pikachu !!!")
  }
}

  return (
    <figure>
      {pokemon.imgSrc === undefined ? (
        <p>???</p>
      ) : (
        <img src={pokemon.imgSrc} alt={pokemon.name + " picture"} />
      )}
      <figcaption>{pokemon.name}</figcaption>
      {sayName(pokemon.name)} 
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
}

export default PokemonCard;
