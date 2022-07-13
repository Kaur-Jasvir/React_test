import React from "react";
import {Outlet,NavLink} from "react-router-dom";
const MailView =()=>
{ 
    return(
    <div className="mail-wrapper">
    <div className="mail-header"></div>
    <div className="content-section">
        <div className="sidebar">
        <NavLink to="/mailbox/LoginForm">Login</NavLink>
            <br></br>
        <NavLink to="/mailbox/Inbox">Inbox</NavLink>
        <br></br>
        <NavLink to="/mailbox/Starred">Starred</NavLink>
        <br></br>
        <NavLink to="/mailbox/Trash">Trash</NavLink>
        </div>
        <div className="middle-section">
            <Outlet>
            </Outlet>
        </div>
    </div>
    </div>
    );
}
export default MailView;