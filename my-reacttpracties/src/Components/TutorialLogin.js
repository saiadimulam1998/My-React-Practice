import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

export function TutorialLogin(){
    const [cookies,setCookie,removeCookie]=useCookies();
    const navigate=useNavigate();
    const[user,seterror]=useState({"User_id":'',"Password":''})
    
    function handelUserName(e){
        seterror({
            User_id:e.target.value,
            Password:user.Password
        })

   
    }
    function handelUserPassword(e){
        seterror({
            User_id:user.User_id,
            Password:e.target.value,
        })
    }
    function handleSubmitt(e){
        e.preventDefault();
    axios({
        method:"get",
        url:"http://127.0.0.1:18000/customer",
    })
    .then(response=>{
        console.log(response, 'respiondss')
        for(var sai of response.data){
            
            if(sai.User_id===user.User_id && sai.Password===user.Password){
                setCookie("User_id".User_id)
                navigate('/Video')
            }
            else{
                navigate('/error')
            }
        }
    })
    alert('success')
    
    }
    return(
        <div>
            <form onSubmit={handleSubmitt}>
                <dl>
                    <dt>User_id</dt>
                    <dd><input type="text" name="User_id" onChange={handelUserName}/></dd>
                    <dt>Password</dt>
                    <dd><input type="Password" name="Password" onChange={handelUserPassword}/></dd>
                </dl>
                <button>Register</button>

            </form>
        </div>
    )
}