import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";


export default function CategoryLayout(){

    const [apiData,setApiData] = useState([])
    const [apiEndpoint, setapiEndpoint] = useState()

    const getData = async() =>{  
    const response = await fetch ('https://pokeapi.co/api/v2/pokemon/?offset=800&limit=14')
    const data = await response.json()
    setApiData(data.results)
    }
    console.log(apiData)
    console.log(apiEndpoint)
    useEffect(()=>{ 
    getData()
    }, [])

    return (
        <>
        <nav className="main-nav">
            {apiData.map((item) => <Link key={item.name+'-xt'} to={item.name} onClick={()=> setapiEndpoint(item.url)} >{item.name}</Link>)}
        </nav>
        <Outlet />
        </>
    )
}