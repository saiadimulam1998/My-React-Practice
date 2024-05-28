import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"

export function VedioAdd(){
    const navigate =useNavigate()
    const[video,setVideo]=useState({"id":0,"title":'',"url":'',"view":0,"likes":0,"subscribed":false});
   
    function handleId(e){
        setVideo({
             id:e.target.value,
            title:video.title,
            url:video.url,
            view:video.view,
            likes:video.likes,
            subscribed:video.subscribed,
        })

    }
    function handleTittle(e){
        setVideo({
             id:video.id,
            title:e.target.value,
            url:video.url,
            view:video.view,
            likes:video.likes,
            subscribed:video.subscribed,
        })

    }
    function handleURL(e){
        setVideo({
             id:video.id,
            title:video.title,
            url:e.target.value,
            view:video.view,
            likes:video.likes,
            subscribed:video.subscribed,
        })

    }

    function handleView(e){
        setVideo({
             id:video.id,
            title:video.title,
            url:video.url,
            view:e.target.value,
            likes:video.likes,
            subscribed:video.subscribed,
        })

    }
    function handleLikes(e){
        setVideo({
             id:video.id,
            title:video.title,
            url:video.url,
            view:video.view,
            likes:e.target.value,
            subscribed:video.subscribed,
        })

    }
    function handleSubcribe(e){
        setVideo({
             id:video.id,
            title:video.title,
            url:video.url,
            view:video.view,
            likes:video.likes,
            subscribed:e.target.value,
        })

    }
   
    function handleSubmit(e){
     e.preventDefault();
     axios.post('http://127.0.0.1:5569/addvideo', video)
        .then(response => {
            alert(response.data); // Show success message from backend
        })
     alert('Succes')
     navigate('/mange')
    }
    return(
        <div>
            <h2>Add New Video</h2>
            <form onSubmit={handleSubmit}>
                <dl>
                    <dd>ID</dd>
                 <dt><input type="number" name="id" onChange={handleId} /></dt>
               
                
                    <dd>Title</dd>
                 <dt><input type="text" name="title" onChange={handleTittle}   /></dt>
                 <dd>URL</dd>
                 <dt><input type="text" name="url" onChange={handleURL}  /></dt>
                 <dd>View</dd>
                 <dt><input type="number" name="view"  onChange={handleView} /></dt>
                 <dd>Likes</dd>
                 <dt><input type="number" name="likes"  onChange={handleLikes} /></dt>
                </dl>
                <button className="btn btn-primary ">Add Video</button>
            </form>
        </div>
    )
}
