import React, { useState } from "react";
const ConditionalRenderView=()=>
{
    const[conditionIf,setConditionalIf]=useState(true);
    const [email,setEmail]=useState("jkaur@yahoo.in");
    let emailid="jkaur@yahoo.in";
    const ChangeEmail=()=>
    {
        emailid="st@sbsglobal.com";
        setEmail("st@sbsglobal.com");
        //console.log(emailid);
    }
    const setConditionalIfMsg=()=>
    {
        setConditionalIf(false);
    }
    return(
        <div id='conditionR'>
            <h1>This is Conditional Rendering View</h1>
            <h1>Welcome,{emailid}....{email}</h1>{/*Element Variable*/ }
            <button onClick={()=>ChangeEmail()}>Change Email</button>
            <button onClick={()=>setConditionalIfMsg()}>Condition IF</button>
            {conditionIf && 
            <div>
                <h1>This is Conditional Rendering through inline if condition</h1>
            </div>
            }
            {18<100?
            <div><h1>The Condition is Success!</h1></div>
            :<div> <h1>The Condition is Failure!</h1></div>}
        </div>
    )
}
export default ConditionalRenderView;