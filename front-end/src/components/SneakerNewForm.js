import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL  = process.env.REACT_APP_API_URL;


function SneakerNewForm(){
    const navigate = useNavigate();

    const [sneaker, setSneaker] = useState({
        name: "",
        description: "",
        size: 0,
        price: 0,
        rating: 0,
        featured: false,
        image: ""
    });

const handleTextChange = (event)=> {
    setSneaker({...sneaker, [event.target.id]: event.target.value})
};
const handleCheckboxChange = () =>{
    setSneaker({ ...sneaker, featured: !sneaker.featured });
};
const handleSubmit = (event) =>{
    event.preventDefault();
    axios.post(API_URL + "/sneakers/" + sneaker)
    .then((res)=>{
        navigate("sneakers");
    }).catch((err)=>{
        console.log(err)
    })
}

return(
    <div className="newForm-Container">
       
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">SNEAKER NAME:</label>
                <input
                    id="name"
                    type="text" 
                    value={sneaker.name}
                    onChange={handleTextChange}
                    placeholder="SWISHY.."
                    required
                />
                <br />
                <br />
             <label htmlFor="description">DESCRIPTION:</label>
                <input
                    id="description"
                    type="text"
                    value={sneaker.description}
                    onChange={handleTextChange}
                    placeholder="SWooSH.."
                />
                <br />
                <br />
                <label htmlFor="size">SIZE:</label>
                <input
                    id="size"
                    type="number"
                    value={sneaker.size}
                    onChange={handleTextChange}
                    placeholder="SWisHY.."
                />
                <br />
                <br />
                <label htmlFor="price">PRICE:</label>
                <input
                    id="price"
                    type=""
                    value={sneaker.price}
                    onChange={handleTextChange}
                    placeholder="SWooSH.."
                />
                <br />
                <br />
                <label htmlFor="rating">RATING 1-5:</label>
                <input
                    id="rating"
                    type="number" min="0" max="5"
                    value={sneaker.rating}
                    onChange={handleTextChange}
                    placeholder="SWisHY.."
                />
                <br />
                <br />
                <label htmlFor="featured">FEATURED:</label>
                <input
                    id="featured"
                    type="checkbox"
                    value={sneaker.featured}
                    onChange={handleCheckboxChange}
                    placeholder="SWooSH.."
                />
                <br />
                <br />
                <label htmlFor="image">IMAGE:</label>
                <input
                    id="image"
                    type="text"
                    value={sneaker.image}
                    onChange={handleTextChange}
                    placeholder="https://"
                />
                <br />
                <br />
                <br />

                <button type="submit">Submit</button>


        </form>

    </div>
)


}



export default SneakerNewForm;