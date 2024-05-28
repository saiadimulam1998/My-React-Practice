import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export function TutorialRegisterr(){
    const navigate=useNavigate();
    const[userr,setUserr]=useState([]);
    const[errorr,setErrorr]=useState('')
    const[colorClass,setColorClass]=useState('')
    const[user,setUser]=useState({"User_id":'',"UserName":'',"Password":'',"Age":0,"Email":'',"Mobile":0})
    function handleUserId(e){
        setUser({
            User_id:e.target.value,
            UserName:user.UserName,
            Password:user.Password,
            Age:user.Age,
            Email:user.Email,
            Mobile:user.Mobile
        })

    }
    function handleUserName(e){
        setUser({
            User_id:user.User_id,
            UserName:e.target.value,
            Password:user.Password,
            Age:user.Age,
            Email:user.Email,
            Mobile:user.Mobile
        })

    }
    function handleUserPassword(e){
        setUser({
            User_id:user.User_id,
            UserName:user.UserName,
            Password:e.target.value,
            Age:user.Age,
            Email:user.Email,
            Mobile:user.Mobile
        })

    }
    function handleUserAge(e){
        setUser({
            User_id:user.User_id,
            UserName:user.UserName,
            Password:user.Password,
            Age:e.target.value,
            Email:user.Email,
            Mobile:user.Mobile
        })

    }
    function handleUserEmail(e){
        setUser({
            User_id:user.User_id,
            UserName:user.UserName,
            Password:user.Password,
            Age:user.Age,
            Email:e.target.value,
            Mobile:user.Mobile
        })

    }
    function handleUserMobile(e){
        setUser({
            User_id:user.User_id,
            UserName:user.UserName,
            Password:user.Password,
            Age:user.Age,
            Email:user.Email,
            Mobile:e.target.value,
        })

    }
    function handleSubmit(e){
        e.preventDefault();
        axios.post('http://127.0.0.1:18000/register', user)
        .then(response => {
            alert(response.data); // Show success message from backend
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Registration failed. Please try again.'); // Show error message
        });
        navigate("/login")
    }
    function verifyData(e){
        axios({
            method:"get",
            url:"http://127.0.0.1:18000/customer"
            
        })
        .then(respone=>{
            setUserr(respone.data);
            for(var use of userr){
            if(use.User_id===e.target.value){
                setErrorr('user id taken -try another')
                setColorClass('text-primary')
                break;

            }
            else{
                setErrorr('user id available')
                setColorClass('text-success')
            }
            }
           })

    }
    return(
        <div className="container-fluid">
            <form onSubmit={handleSubmit}>
                <dl>
                    <dt>User_id</dt>
                    
                <dd><input type="text" onKeyUp={verifyData} name="User_id" onChange={handleUserId} /></dd>
                <dd className={colorClass}>{errorr}</dd>
                <dt>UserName</dt>
                <dd><input type="text" name="UserName" onChange={handleUserName} /></dd>
                <dt>Password</dt>
                <dd><input type="Password" name="Password" onChange={handleUserPassword} /></dd>
                <dt>Age</dt>
                <dd><input type="number" name="Age"  onChange={handleUserAge}/></dd>
                <dt>Email</dt>
                <dd><input type="Email" name="Email" onChange={handleUserEmail} /></dd>
                <dt>Mobile</dt>
                <dd><input type="number" name="Mobile" onChange={handleUserMobile}/></dd>
                </dl>
                <button>Register</button>
            </form>

        </div>
    )
}