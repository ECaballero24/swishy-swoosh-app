import { Link } from "react-router-dom";

function Sneaker({ sneaker }){
    return(
        <div>
            <Link to={`/sneakers/${sneaker.id}`} >
                <h3>{sneaker.name}</h3>
                <img src={sneaker.image} alt={sneaker.name} width="75"  />
            </Link>
        </div>
    )
}

export default Sneaker;