import React from "react";
import{NavLink,useNavigate} from "react-router-dom";

const HomeComponent =()=>
{
    const navigate=useNavigate();
    const goToLogin=()=>
    {
navigate("/login");
    }
    return(
        <div>
            <h1>This is Home Page</h1>
            <h1>Linking Pages with HTML</h1>
            <NavLink to="/login">Go to Login</NavLink>
            <br></br>
            <NavLink to="/mailbox">Mailbox</NavLink>
            <h1> Linking Pages with Function</h1>
            <button onClick={()=>goToLogin()}>Go to Login</button>
        </div>

    );
}
export default HomeComponent;