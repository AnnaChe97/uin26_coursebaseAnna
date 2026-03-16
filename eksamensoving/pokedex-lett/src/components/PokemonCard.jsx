import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import PokemonLink from "./PokemonLink"
export default function PokemonCard({url, classN, pokemonDef}){
    const [pokemon, setPokemon] = useState()
    const getPokemon = async() =>{
        // BUG: Missing try-catch block
        const response = await fetch(url)
        const data = await response.json()
        setPokemon(data)
        console.log(data)     
    }

    useEffect(()=>{
        pokemonDef ? setPokemon(pokemonDef) : getPokemon()
    },[pokemonDef])
    
    return (
        <article className={`pokemon-card type-${classN}`}>
            <PokemonLink pokemon={pokemon}/>
        </article>

    )
}