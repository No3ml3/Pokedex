
function PokemonCard({pokemon}) {
  return (
    <figure>
      {pokemon.imgSrc === undefined ? (
        <p>???</p>
      ) : (
        <img src={pokemon.imgSrc} alt={pokemon.name + " picture"} />
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
