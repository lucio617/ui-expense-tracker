import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminDashboard from "./search";
const Admin = () => {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    const [search,setSearch]=useState([])
    
    const func=()=>{
            navigate('/createuser')
    }
    const view=(uid)=>{
        navigate(`/adminexpenseview/${uid}`)
    }
    const del=(uid)=>{
        fetch(`/delete/${uid}`,{
            method:"get",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                window.location.reload(false)
            });
    }

    const edit=(uid)=>{
        navigate(`/edit/${uid}`)
    }

    useEffect(() => {
        fetch('/admin', {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },

        })
            .then((res) => res.json())
            .then((res) => {
                // console.log(res)
                setUsers(res)
                setSearch(res)

            });
    }, [])

   
    const handlesearch=(key)=>{
        console.log(key)
        if (key==="") {
            setSearch(users)
        }
        else {
            const userList = users.filter((user)=>{
                return Object.values(user).join(" ").toLowerCase().includes(key.toLowerCase())
            });
            console.log(userList)
            setSearch(userList)
            setUsers(userList)
        }
    }
    return (
        <div>
             <ul>
                <li> <a href="/">Home</a></li>
                <li><a href="/">Log Out</a></li>
               <div style={{float:'right',marginTop:"8px"}}>
                    <input  onChange={(e)=>handlesearch(e.target.value)} style={{marginLeft:"20px",height:"20px"}}type="text" name="search" />
                   <button  style={{marginLeft:"20px",height:"30px",marginRight:"20px",borderRadius:"10px",color:"white",backgroundColor:"blue"}}>Search</button>
                   </div>
            </ul>
        <div style={{ width: '105%', height: '100%', display: 'flex', justifyContent: "center", flexDirection:"column",alignItems:"center", marginTop: "8%" ,marginLeft:"-80px"}}>
             <label style={{display:"flex",flexDirection:"column" , backgroundColor:""}} class="exp_form_title" >User Details: </label>
            <div class="styled-table">
                <table >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Status</th>
                            <th>User Type</th>
                            <th colSpan={3}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => {
                            return (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.department}</td>
                                    <td>{user.status}</td>
                                    <td>{user.u_kind}</td>
                                    <td><a href="" onClick={()=>view(user.id)}>View</a></td>
                                    <td><a href="" onClick={()=>edit(user.id)} >Edit</a></td>
                                    <td><a href="" style={{color:"red"}} onClick={()=>del(user.id)}>Delete</a></td>
                                   
                                </tr>
                            )
                        })}


                    </tbody>
                </table>
            </div>
            <div style={{backgroundColor:"darkcyan",fontStyle:"italic",fontSize:"1.8rem",boxShadow:"revert",borderRadius:"15px",padding:"4px"}}>
               <a href="" style={{textDecoration:"none" ,fontStyle:"oblique"}}  onClick={func}>Add User</a> 
            </div>
        </div>
        </div>
    )
}

export default Admin