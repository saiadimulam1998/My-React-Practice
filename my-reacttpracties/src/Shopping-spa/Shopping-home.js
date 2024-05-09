 import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
 export function ShoppingHome (){
    const[categories,setcategories]=useState([])
    useEffect(()=>{
        axios({
            method:"get",
            url:"http://fakestoreapi.com/products/categories",
        })
        .then((respone)=>{
            setcategories(respone.data);
        })
    },[])
    return(
        <div className="container-fluid">
            <div >
                <h2>Categories</h2>
                <ol>
            {
                categories.map(Category=>
                    <li key={Category}>
                        <Link to= {`/products/${Category}`}>{Category.toUpperCase()}</Link>
                    </li>
                    
                )
            }
            </ol>
            </div>
        </div>
    )
}