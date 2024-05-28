import { useEffect } from "react";
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";

export function TutorialVideo(){
    const navigate=useNavigate();
    const[cookies,setCookie,removeCookie]=useCookies();
    useEffect(()=>{
     if(cookies.User_id==undefined){
         navigate('/login')
     }
    },[])
    function handleClick(){
        removeCookie('User_id')
    }
    return(
        <div>
            <h3><span>Vedio {cookies.User_id}<button onClick={handleClick} className="btn btn-link">Signout</button></span></h3>
        </div>
    )
}