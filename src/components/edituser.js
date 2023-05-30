import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
const EditUser=()=>{
    const {id}=useParams()
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [dept,setDept]=useState("")
    const [status,setStatus]=useState("")
    const [password,setPassword]=useState("")

    const navigate=useNavigate()

    const [dname,setdName]=useState("")
    const [demail,setdEmail]=useState("")
    const [ddept,setdDept]=useState("")
    const [dstatus,setdStatus]=useState("")
    const [dpassword,setdPassword]=useState("")



    useEffect(()=>{
        fetch(`/edit/${id}`,{
            method:"get",
            headers: {
                "Content-Type": "application/json",
            },
           
        })
        .then((res) => res.json())
        .then((res)=>{
            
           setdName(res.name)
           setdDept(res.department)
           setdEmail(res.email)
           setdStatus(res.status)
           setdPassword(res.password)
            
        })
    })
    const func=()=>{
        fetch('/pedit',{
            method:"post",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                name:name,
                email:email,
                department:dept,
                status:status,
                password:password,
                id:id
            })
        })
            .then((res)=> res.json())
            .then((res)=>{

                alert("User Edited Successfully")
                navigate("/users/admin")
            })
}
    return (
        <div>
            <div className="exp_center">
                <div className="createExp">
            <div class="exp_form_title"> Edit {dname}</div>
            <div>
                <label>Name</label>
                <input type="text"  onChange={(e)=>{setName(e.target.value)}} name="name" placeholder="0" />
                <label >Email</label>
                <input type="text" v onChange={(e)=>{setEmail(e.target.value)}} name="email" placeholder="Date"/>
                <label>Department</label>
                <input type="text"   name="dept" onChange={(e)=>{setDept(e.target.value)}} placeholder="Flight"/>
                <label >Status</label>
                <input type="text" name="status" onChange={(e)=>{setStatus(e.target.value)}} placeholder="0" />
                <label >Password</label>
                <input type="text"  name="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="0" />

                <div onClick={func} className="login_button">Create</div>
            </div>
            
        </div>
        </div> 
        </div>
    )
}

export default EditUser