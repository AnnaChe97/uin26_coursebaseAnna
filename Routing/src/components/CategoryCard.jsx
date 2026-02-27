import { useEffect, useState } from "react"
import { useParams, Link, useOutletContext } from "react-router-dom"

export default function CategoryCard({name, url}){

    const {setapiEndpoint} = useOutletContext()
    const [apiData,setApiData] = useState({})

    const {slug} = useParams()

    const getData = async()=>{
        const response = await fetch(url)
        const data = await response.json()

        setApiData(data)

    }

        console.log("Kommer fra CategoryCard", slug)
        console.log("Key values:")

    useEffect(()=>{
        getData()
    },[])
    return(
        <article>
            <h3>{name}</h3>
            <p>{apiData?.id}</p>
            {slug === "type" ? <img src={`../type_img/${apiData.name}.png`}/> : 
            <img src={apiData?.sprites?.front_shiny} alt={apiData?.name} /> }
            <ul className="category-list">
                    {apiData?.stats?.map((item) => <li key={apiData?.name + item?.stat?.name}>{item?.stat.name}: {item?.base_stat} </li> )}
            </ul>
            <Link to={apiData?.name} onClick={()=>setapiEndpoint(url)}>Les mer om {apiData?.name}</Link>
        </article>
    )
}