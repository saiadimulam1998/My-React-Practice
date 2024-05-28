
import { BrowserRouter, Link, Route,  Routes } from "react-router-dom";
import { TutorialHome } from "./TutorialHome";
import { TutorialLogin } from "./TutorialLogin";
import { TutorialVideo } from "./TutorialVideos";
import { TutorialRegisterr } from "./TutorialRegisterr";
import { TutorialError } from "./TutorialError";
import { TutorialMange } from "./TutorialMange";
import { TutorialDetails, TutotrialDetails } from "./TutorialDetails";
import { VedioAdd } from "./Vedio-add";
import { Deletee } from "./Delete";
import { VedioEdit } from "./video-edit";

export function TutorialIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <header className="bg-dark text-center text-white p-1">
                <h3>React Video Tutorial</h3>

            </header>
            <section className="mt-3 row">
                <nav className="col-3">
                <div>
                   <Link to="home">Home</Link>
                
                </div>
                <div>
                <Link to="register">Register</Link>
                   
                </div>
                <div>
                <Link to="login">Login</Link>
                   
                </div>
                
                <div>
                <Link to="video">Video</Link>
                </div>
                <div>
                <Link to="mange">MangeVedio</Link>
                </div>
                </nav>
                <main className="col-9">
                <Routes>
                    <Route path="/" element={<TutorialHome/>}/>
                    <Route path="/home" element={<TutorialHome/>}/>
                    <Route path="/register" element={<TutorialRegisterr/>}/>
                    <Route path="/login" element={<TutorialLogin/>}/>
                    
                    <Route path="video" element={<TutorialVideo/>}/>
                    <Route path="error" element={<TutorialError/>}/>
                    <Route path="mange" element={<TutorialMange/>}/>
                    <Route path="/details/:id" element={<TutotrialDetails/>}/>
                    <Route path="/Addvideo" element={<VedioAdd/>}/>
                    <Route path="/delete/:id" element={<Deletee/>}/>
                    <Route path="/edit/:id" element={<VedioEdit/>}/>
                    
                    </Routes>
                </main>

            </section>
            </BrowserRouter>
        </div>
    )
}