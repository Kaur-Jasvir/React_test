import React,{useState} from "react";
import { NavLink } from "react-router-dom";
const LoginAction =()=>{
    const[loginForm,setloginForm]=useState({});
    const LoginSubmit=()=>
    {
        //alert("Form is submitted");
        console.log(loginForm);
    }
    const onHandleInput=(event)=>
    {
//console.log(event.target.value,event.target.id);
setloginForm({...loginForm,[event.target.id]:event.target.value});
    }
    const[passwordVisibility,setpasswordVisibility]=useState(true);
const controlPasswordVisibility=(visibility)=>
{
    setpasswordVisibility(visibility);
}
    return(
    <div id='login_header'>
        <h1>This is Login Page Using Functional Component in React JS</h1>
        <div>
     <label id="label">Enter your Email</label>
     <input type="text" className="inputbox" onChange={onHandleInput} id="email"/>
     </div>
     <div>
         <label id="label">Enter your password</label>
         <input type={passwordVisibility? "password":"text"} className="inputbox" onChange={onHandleInput} id="password"/>
         {passwordVisibility?<img src={require("../images/close-eye.png")} className="eyeicon" onClick={()=>controlPasswordVisibility(false)}/>:
         <img src={require("../images/open-eye.png")}className="eyeicon" onClick={()=>controlPasswordVisibility(true)}/>}
         </div>
         <button onClick={()=>LoginSubmit()}>Login</button>
         <NavLink to="/">Back to Home</NavLink>
    </div>
    )
}
export default LoginAction;