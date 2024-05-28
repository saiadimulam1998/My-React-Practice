import axios, { Axios } from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function TutorialMange(){
    const[video,setVideo]=useState([]);
    
    useEffect(()=>{
        axios({
            method:"get",
            url:"http://127.0.0.1:5569/videos"
    
        })
        .then((response)=>{
            setVideo(response.data)
        })
        },[])
    return(
        <div className="container-fluid">
         <h2>Mange Video</h2>
         <Link to="/Addvideo" className=" btn btn-primary">Add New vedio</Link>
         <table className="table table-hover">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Preview</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
            {
                video.map(sai=>
                    <tr key={sai.id} >
                        <td>{sai.title}</td>
                        
                        <td>
                            <iframe width="100" height="100" src={sai.url}></iframe>
                        </td>
                        <td>
                            <Link to={`/details/${sai.id}`} className="btn btn-primary"> 
                            <span className="bi bi-eye"></span>Details
                            </Link>
                            <Link to={`/edit/${sai.id}`}  className="btn btn-warning ms-2"> 
                            <span className="bi bi-pen"></span>Edit
                            </Link>
                            <Link to={`/delete/${sai.id}`} className="btn btn-danger ms-2"> 
                            <span className="bi bi-trash"></span>Delete
                            </Link>
                        </td>
                    </tr>
                )
            }
         </table>
        </div>
    )
} 