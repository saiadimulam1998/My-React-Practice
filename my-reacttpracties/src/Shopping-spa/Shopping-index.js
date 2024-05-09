import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ShoppingHome } from "./Shopping-home";
import { ShoppingProduct } from "./Shopping-product";
import { ShoppingDetail } from "./Shopping-details";



export function ShoppingIndex(){
    return(
        <div className="container-fluid">
       <BrowserRouter>
       <header className="bg-dark text-white p-2 m-2  mt-2 d-flex justify-content-between">
       <div>Shooper.</div>
       <div>
        <span className="me-2"><Link to="home" className="text-white text-decoration-none">Home</Link></span>
        <span className="me-2">Electronic</span>
        <span className="me-2">Jewelery</span>
        <span className="me-2">Men's clothing</span>
        <span className="me-2">Women's clothing</span>
    
       </div>
       <div>
        <span className="bi bi-person-fill me-3"></span>
        <span className="bi bi-heart me-3"></span>
        <span className=" bi bi-search me-3"></span>
        <span className="bi bi-cart me-3"></span>
       </div>

       </header>
       <section className="mt-3 overflow-auto" style={{height:'500px'}}>
        <Routes>
            <Route path="/" element={<ShoppingHome/>}/>
            <Route path="home" element={<ShoppingHome/>}/>
            <Route path="products/:catName" element={<ShoppingProduct/>}/>
            <Route path="details/:prodId" element={<ShoppingDetail/>}/>
            <Route path="*" element={<div><h2 className="text-danger">Requested path Not Found</h2></div>}/>
        </Routes>

       </section>
       </BrowserRouter>
        </div>
    )
}