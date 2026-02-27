import { Link, Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export default function CategoryLayout(){
    const {slug} = useParams()

    const [apiData,setApiData] = useState([])
    const [apiEndpoint, setapiEndpoint] = useState()

    const defaultApiUrl = 'https://pokeapi.co/api/v2/'


    const getData = async() =>{  
    const response = await fetch (defaultApiUrl)
    const data = await response.json()

    const {type, pokemon, item} = data

    setApiData ({type,pokemon,item})

    }
    console.log(apiData)
    console.log(apiEndpoint)
    useEffect(()=>{ 
    getData()
    }, [slug])

    return (
        <>
        <nav className="main-nav">
            {Object.keys(apiData)?.map((item) => <Link key={item +'-boob'} to={item} onClick={()=>setapiEndpoint(defaultApiUrl + item + "?offset=242&limit=20}")} >{item}</Link>)}
            {/*apiData?.map((item) => <Link key={item.name+'-xt'} to={item.name} onClick={()=> setapiEndpoint(item.url)} >{item.name}</Link>)*/}
        </nav>
        <Outlet context={{apiEndpoint, defaultApiUrl, setapiEndpoint}} />
        </>
    )
}