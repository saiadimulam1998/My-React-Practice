import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
export function FakeStoreHome(){
    const[user,setUser]=useState([])
    useEffect(()=>{
        axios({
            method:"get",
            url:"http://fakestoreapi.com/products/categories"
        })
        .then(respone=>{
            setUser(respone.data)
        })

    },[])
    return(
        <div>
            <h1>Categories</h1>
            <ol>
                {
                    user.map(Cat=>
                        <li key={Cat}>
                            <Link to={`/product/${Cat}`}>{Cat}</Link>
                        </li>
                    )
                }
            </ol>
        </div>
    )
}