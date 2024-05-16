import { useState } from "react";

export function FormDemo(){
    const [user,setUser]=useState({"User_id":'',"UserName":'',"Age":0,"City":'',"Mobile":''})
    const[error,seterror]=useState({"User_id":'',"UserName":'',"Age":"","City":'',"Mobile":''})



    function handleChangeId(e){
        if(e.target.value==""){
            seterror({
                User_id:"User_id Required"
            })

        }
        else{
            seterror({
                User_id:"",
            })
            setUser({
                User_id:e.target.value,
                UserName:user.UserName,
               Age:user.Age,
               City:user.City,
               Mobile:user.Mobile
    
    
            })
        }
    }
    function handleChangeName(e){
        if(e.target.value==""){
            seterror({
                UserName:"userName is required"
            })
            
        }
        else{
            seterror({
                UserName:"",
            })
            setUser({
                User_id:user.User_id,
                UserName:e.target.value,
               Age:user.Age,
               City:user.City,
               Mobile:user.Mobile
    
    
            })
        }
    }
    function handleChangeAge(e){
        if(isNaN(e.target.value)){
            seterror({
                Age:"number is required"
            })
        }
        else{
            seterror({
                Age:"",
            })
            setUser({
                User_id:user.User_id,
                UserName:user.UserName,
               Age:e.target.value,
               City:user.City,
               Mobile:user.Mobile
    
    
            })
        }
    }
    function handleChangeCity(e){
       if(e.target.value=="-1"){
        seterror({
            City:"choose one city"
        })
       }
       else{
        seterror({
            City:""
        })
        setUser({
            User_id:user.User_id,
            UserName:user.UserName,
           Age:user.Age,
           City:e.target.value,
           Mobile:user.Mobile


        })
       }
    }
    function handleChangeMobile(e){
        if(e.target.value.match(/\+91\d{10}/)){
            setUser({
                User_id:user.User_id,
                UserName:user.UserName,
               Age:user.Age,
               City:user.City,
               Mobile:e.target.value
    
    
            })
            seterror({
                Mobile:""
            })
            
        }
        else{
            seterror({
                Mobile:"Please valid mobile number"
            }) 
            
        }
    }

    function handleFormSubmit(e){
        e.preventDefault();
        alert(JSON.stringify(user));
    }
    return(
        <div className="container-fluid">
            <form onSubmit={handleFormSubmit}>
            <dl>
                <dt>User-id</dt>
                <dd><input type="text" name="User_id" onChange={handleChangeId}/></dd>
                <dd className="text-danger">{error.User_id}</dd>
                <dt>UserName</dt>
                <dd><input type="text" name="UserName" onChange={handleChangeName}/></dd>
                <dd className="text-danger">{error.UserName}</dd>
                <dt>Age</dt>
                <dd><input type="Text" name="Age" onChange={handleChangeAge}/></dd>
                <dd className="text-danger">{error.Age}</dd>
                <dt>City</dt>
                <dd>
                    <select name="City" onChange={handleChangeCity}>
                    <option value="-1">Choose One</option>
                        <option value="Dehli">Dehli</option>
                        <option value="hyd">Hyd</option>
                        
                        </select>
                        <dd className="text-danger">{error.City}</dd>
                        </dd>
                        <dt>Mobile</dt>
                        <dd><input type="Text" name="Mobile" onChange={handleChangeMobile}/></dd>
                        <dd className="text-primarym">{error.Mobile}</dd>
                        
            </dl>
            <button>Register</button>
            </form>

        </div>
    )
}