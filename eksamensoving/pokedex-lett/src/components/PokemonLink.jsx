import { Link } from "react-router-dom";

export default function PokemonLink({pokemon}){
    console.log(pokemon)
    return (
            <Link to={`/pokemons/${pokemon?.id}`} className="pokemon-link">
            <h3>{pokemon?.name}</h3>
            <img src={pokemon?.sprites?.front_shiny} alt={pokemon?.name} />
            <p>#00{pokemon?.id}</p>
            </Link>
    )
}