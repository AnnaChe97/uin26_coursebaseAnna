import { useEffect, useState } from "react"
import CharacterCards from "../components/CharacterCard"

export default function Characters(){

const [characters, setCharacters] = useState([])

const getAllCharacters = async ()=>{
    try{
    const response = await fetch ('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    setCharacters(data.results)
    }catch(err){
    console.error(err)
}

}


    useEffect(()=>{
        getAllCharacters()
    },[])


    return (
            <main>
            <h1>Characters</h1>
            <section>
                {characters?.map((char) => <CharacterCards key={char.id} char={char} />)}
            </section>
        </main>
    )
}