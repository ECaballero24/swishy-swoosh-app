import { Link } from "react-router-dom";

function Sneaker({ sneaker }){
    return(
        <div>
            <Link to={`/sneakers/${sneaker.id}`} >
                <h3>{sneaker.name}</h3>
            </Link>
        </div>
    )
}

export default Sneaker;