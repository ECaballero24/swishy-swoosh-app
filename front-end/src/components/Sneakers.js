import { useState, useEffect } from "react";
import Sneaker from "./Sneaker";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function Sneakers(){
    const[sneakers, setSneakers]= useState([]);

    useEffect(()=>{
        axios.get( API_URL + "/sneakers")
        .then((res)=>{
            setSneakers(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    }, []);

    return(
        <div>
           
           <article className="Sneakers">
               {sneakers.map((sneaker)=>{
                   return <Sneaker key={sneaker.id} sneaker={sneaker} />
               })}
           </article>

        </div>
    )
}

export default Sneakers;