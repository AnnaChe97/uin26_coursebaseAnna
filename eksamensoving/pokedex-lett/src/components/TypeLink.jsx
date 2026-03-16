import { Link } from "react-router-dom";

export default function TypeLink({type}){
    return(

    <Link to={`/types/${type.name}`} className="type-link">
        <p>{type.name}</p>
        <img src={`type_img/${type.name}.png`} alt={type.name} />
    </Link>
    )
}