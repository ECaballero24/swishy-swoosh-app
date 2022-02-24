import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";



const API_URL = process.env.REACT_APP_API_URL;

function SneakerDetails(){
    const [sneaker, setSneaker] = useState({});
    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(()=>{
        axios.get(API_URL + "/sneakers/" + id)
        .then((res)=>{
            setSneaker(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }, [id]);

     const handleDelete=()=>{
    axios.delete(API_URL + "/sneakers/" + id)
      .then((res)=>{
        navigate("/sneakers")
      }).catch((err)=>{
        console.log(err);
      })
  };

return(
    <div className="sneakerDetail">
        <div>
            <h1>{sneaker.name}</h1>
            <h4>AKA: {sneaker.description}</h4>
            <h4>SIZE: {sneaker.size}</h4>
            <h4>PRICE: ${sneaker.price}</h4>
            <h4>RATING: {sneaker.rating}</h4>
            <h4>FEATURED:{sneaker.featured ? "True" : "False"}</h4>
            <img src={sneaker.image} alt={sneaker.name} width="400"  />
        </div>
         <div className="showNavigation">
        <div>
          <Link to="/sneakers">
            <button >Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/sneakers/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>

)


}

export default SneakerDetails;