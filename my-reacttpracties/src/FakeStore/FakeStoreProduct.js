import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom"
import axios from "axios";

export function FakeStoreProduct(){
    const prams =useParams();
    const[produts,setProduts]=useState([]);
    useEffect(()=>{
        axios({
            method: "get",
            url: `http://fakestoreapi.com/products/category/${prams.catName}` // Use params.catName to access the URL parameter
        })
        .then(response => {
            setProduts(response.data);
        })
    },[])
    
   
    return(
        <div>
            <h1>product</h1>
           <ol>
            {
                produts.map(prop=>
                    <li key={prop.id}>{prop.title}</li>
                )
            }
           </ol>
           <p>
            <Link to={'/home'}>Backt to home</Link>
           </p>
        </div>
    )
}