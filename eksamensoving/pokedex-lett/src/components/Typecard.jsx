import { useState } from "react";
import TypeLink from "./TypeLink";


export default function TypeCard(){
    const [typecard, setTypeCard] = useState
    const getTypeCard = async () => {
        const response = await fetch (url)
        const data = await response.json()
        setTypeCard(data)
        console.log(data)
    }


    return(
        <article>
            <TypeLink type={type} />
        </article>
    )
}