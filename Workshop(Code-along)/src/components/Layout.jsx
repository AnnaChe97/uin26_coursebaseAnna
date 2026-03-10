import { Link } from "react-router-dom"

export default function Layout({children}){
    return(
        <>
        <nav>
            <Link to="/">Hjem</Link>
            <Link to="characters">Karakterer</Link>
        </nav>
{children}
        
        <footer>
            <h4> UIN workshop prosjekt 2026</h4> 
        </footer>
    </>
    )
}