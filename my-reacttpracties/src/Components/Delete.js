import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

export function Deletee(){
    const params =useParams()
    const[videos,setVideos]=useState([{id:0,title:"",url:'',view:0,likes:0,subscribed:false}]);
    useEffect(()=>{
        axios({
            method:"get",
            url: `http://127.0.0.1:5569/videos/${params.id}`
        })
        .then(response=>{
            setVideos(response.data);
           
        })
        
    },[])
    function handleDelete(){
        axios({
            method:"delete",
            url: `http://127.0.0.1:5569/deletevideo/:id/${params.id}`
        }) 
    }
    return(
        <div>
            
        <h2>Dlete? are you sure <button onClick={handleDelete}>Yes</button><Link to="/mange">no</Link></h2>
        
        
        <div className="card w-50">
                <div className="card-header">
                    <h3>{videos[0].title}</h3>
                </div>
                <div className="card-body">
               <iframe src={videos[0].url} width="100" height="100"></iframe>
                </div>
                <div className="card-footer">
                <span className="bi bi-eye-fill"></span>[{videos[0].view}] view
                <span className="bi bi-hand-thumbs-up "></span>[{videos[0].likes}] likes
                <span className="ms-3"></span>
                {videos[0].subscribed ? "Subscribed" : "Not Subscribed"} 
                </div>
               
                
            </div>
            <Link to="/mange">Back Vedios</Link>
            </div>
        
    )
}