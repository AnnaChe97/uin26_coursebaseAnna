import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import PokemonLink from "./PokemonLink"
export default function PokemonCard({url, classN, pokemonDef}){
    const [pokemon, setPokemon] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState (null)
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
    
    useEffect(()=> {
    const getPokemon = async () => {    
            try{
                setLoading(true)
                setError (null)

                const response = await fetch (url)
                const data = await response.json()
                if (data.Response == "True") {
                    setPokemon(data.Search)
                }
                else {
                    setError ("Kunne ikke finne Pokemon")}
                } catch (err) {
                    setError ("Noe gikk galt med API-kallet")
                } finally {
                    setLoading(false)
                }
            }
        }
    )
    

    return (
        <article className={`pokemon-card type-${classN}`}>
            <PokemonLink pokemon={pokemon}/>
        </article>

    )
}