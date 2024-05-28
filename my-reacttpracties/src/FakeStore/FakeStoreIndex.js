import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FakeStoreHome } from "./FakeStoreHome";
import { FakeStoreProduct } from "./FakeStoreProduct";

export function FakeStoreIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <header>
                <nav>
                    <span><Link to="home">Home</Link></span>
                </nav>
            </header>
            <section>
                <Routes>
                    <Route path="/" element={<FakeStoreHome/>}/>
                    <Route path="/home" element={<FakeStoreHome/>}/>
                    <Route path="product/:catName" element={<FakeStoreProduct/>}/>
                </Routes>
            </section>
            </BrowserRouter>

        </div>
    )
}