import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";


export function VedioEdit(){
    const params =useParams()
    const[videos,setVideos]=useState([{id:0,title:'',url:'',view:0,likes:0,subscribed:false}]);
    
    useEffect(()=>{
        axios({
            method:"get",
            url: `http://127.0.0.1:5569/videos/${params.id}`
        })
        .then(response=>{
            setVideos(response.data);
           
        })
        
    },[])
    function handleId(e){
        setVideos({
             id:e.target.value,
            title:videos.title,
            url:videos.url,
            view:videos.view,
            likes:videos.likes,
            subscribed:videos.subscribed,
        })

    }
    function handleTittle(e){
        setVideos({
             id:videos.id,
            title:e.target.value,
            url:videos.url,
            view:videos.view,
            likes:videos.likes,
            subscribed:videos.subscribed,
        })

    }
    function handleURL(e){
        setVideos({
             id:videos.id,
            title:videos.title,
            url:e.target.value,
            view:videos.view,
            likes:videos.likes,
            subscribed:videos.subscribed,
        })

    }

    function handleView(e){
        setVideos({
             id:videos.id,
            title:videos.title,
            url:videos.url,
            view:e.target.value,
            likes:videos.likes,
            subscribed:videos.subscribed,
        })

    }
    function handleLikes(e){
        setVideos({
             id:videos.id,
            title:videos.title,
            url:videos.url,
            view:videos.view,
            likes:e.target.value,
            subscribed:videos.subscribed,
        })

    }
    function handleChange(e){
        setVideos({
             id:videos.id,
            title:videos.title,
            url:videos.url,
            view:videos.view,
            likes:videos.likes,
            subscribed:e.target.value,
        })

    }


    function handleSubmit(e){
        e.preventDefault();
        axios.put('http://127.0.0.1:5569/updatevideo', videos)
        .then(response => {
            alert(response.data); // Show success message from backend
        })
        
       }

    return(
        <div>
        <h2>Add New Video</h2>
        <form onSubmit={handleSubmit}>
            <dl>
                <dd>ID</dd>
             <dt><input type="number" name="id" value={videos.id} onChange={handleId} /></dt>
           
            
                <dd>Title</dd>
             <dt><input type="text" name="title" value={videos.title} onChange={handleTittle}   /></dt>
             <dd>URL</dd>
             <dt><input type="text" name="url" value={videos.url} onChange={handleURL}  /></dt>
             <dd>View</dd>
             <dt><input type="number" name="view" value={videos.view}  onChange={handleView} /></dt>
             <dd>Likes</dd>
             <dt><input type="number" name="likes"  value={videos.likes} onChange={handleLikes} /></dt>
             <dt>Subscribed</dt>
                    <dd><input type="checkbox" name="subscribed" checked={videos.subscribed} onChange={handleChange} /></dd>
             
            </dl>
            <button className="btn btn-primary ">Edit Video</button>
        </form>
    </div>
    )
}