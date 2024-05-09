import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import axios from "axios"

export function ShoppingProduct(){

    const prams= useParams();
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        axios({
            method:"get",
            url:`http://fakestoreapi.com/products/Category/${prams.catName}`,
        })
        .then((respone)=>{
            setProducts(respone.data);
        })
    },[])
    return(
        <diV className="container-fluid">
            <h2>{prams.catName} products</h2>
           <div className="d-flex">
            {
                products.map(product=>
                    <div key={product.di}>
                    <Link to={`/details/${product.id}`}>
                    <img src={product.image} className="me-2 border border-1 border-primary p-2"  width="100" height='100'/>
                    </Link>
                    </div>
                )
            }

           </div>
           <Link to='/home'>Back To Category</Link>
        </diV>
    )
}