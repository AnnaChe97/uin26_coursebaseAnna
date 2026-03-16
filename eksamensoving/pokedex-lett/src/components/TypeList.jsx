import { Link } from "react-router-dom"
import "../styles/types.scss"  // BUG: Wrong file name - should be types.scss
import TypeLink from "./TypeLink"
export default function TypeList({types}){

    //Her skal dere lage et ekstra koponent for hver type, og så mappe over types her og sende inn dataen som props til den komponenten. Det vil gjøre det mye enklere å style og holde koden ryddig.
    //Se pokemonkortene for inspirasjon til hvordan dere kan gjøre dette.

    const typesToUse = types?.filter((type) => type.name !== "unknown" && type.name !== "stellar")   

    console.log(typesToUse?.map((type) => type.name))
    return (
        <section className="flex">
            <h2>Types</h2>
            {typesToUse?.map((type, i) => (
            <article className={`type-${type.name} type-card`} key={i}>  {/* BUG: Missing key prop */}
            <TypeLink type={type}/>
            </article>)
            )}
        </section>
    )
}