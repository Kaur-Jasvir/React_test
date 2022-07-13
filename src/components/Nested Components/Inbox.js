import React,{useState} from "react";
import axios from "axios";
const InboxComponent=()=>
{
    const[userList,setUserList]=useState([]);
    const LoadUsers=()=>
    {
const url="https://reqres.in/api/users?page=2";
axios.get(url)
.then((success)=>{
    //console.log(success.data);
    const respose=success.data;
    //console.log(respose.data);
    setUserList(respose.data);
})
.catch((failure)=>
{
    console.log(failure);
});
    }
    const profiles = userList.map((value, index)=>{
        return(
<tr key={index}>
                        <td>{value.id}</td>
                        <td><img src={value.avatar}/></td>
                        <td>{value.email}</td>
                        <td>{value.first_name}</td>
                        <td>{value.last_name}</td>
                    </tr>
        )
    }
    )
    return(
        <div>
            <h1>This is Inbox</h1>
            <button onClick={()=>LoadUsers()}>List of Users</button>
                <table id="customers">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Avatar</th>
                        <th>Email</th>
                        <th>First_Name</th>
                        <th>Last_Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {profiles}
                    </tbody>
                    </table>

        </div>
            );
        }
        export default InboxComponent;