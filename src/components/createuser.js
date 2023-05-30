import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Createuser=()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [dept,setDept]=useState("")
    const [status,setStatus]=useState("")
    const [password,setPassword]=useState("")

    const navigate=useNavigate()

    const func=()=>{
            fetch('add',{
                method:"post",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                    name:name,
                    email:email,
                    department:dept,
                    status:status,
                    password:password
                })
            })
            .then((res)=>{
                alert("User Added Successfully")
                navigate("/users/admin")
            })
    }
    return (
        <div>
            <div className="exp_center">
                <div className="createExp">
            <div class="exp_form_title"> Create User</div>
            <div>
                <label>Name</label>
                <input type="text" onChange={(e)=>{setName(e.target.value)}} name="name" placeholder="0" />
                <label >Email</label>
                <input type="text" onChange={(e)=>{setEmail(e.target.value)}} name="email" placeholder="Date"/>
                <label>Department</label>
                <input type="text" name="dept" onChange={(e)=>{setDept(e.target.value)}} placeholder="Flight"/>
                <label >Status</label>
                <input type="text" name="status" onChange={(e)=>{setStatus(e.target.value)}} placeholder="0" />
                <label >Password</label>
                <input type="text" name="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="0" />

                <div onClick={func} className="login_button">Create</div>
            </div>
            
        </div>
        </div>
        </div>
    )
}
export default Createuser