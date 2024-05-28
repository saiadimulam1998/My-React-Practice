import { Link } from "react-router-dom";

export function TutorialError(){
    return(
        <div>
            <h1>Invalid user&password</h1>
            <Link to='/login'> back Login</Link>
        </div>
        
        
    )
}