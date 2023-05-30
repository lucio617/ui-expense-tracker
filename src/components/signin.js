import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const navigate=useNavigate()
    localStorage.clear()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[Id,setId]=useState(0)
    useEffect(()=>{
        localStorage.clear()
    },[])
    const func=()=>{
        console.log('hi')
    fetch('/signin', {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email:email,
            password:password
        }),
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res.user_id)
        setId(res.user_id)
        localStorage.setItem("user_id",res.user_id)
        if(res.isAdmin) navigate("/users/admin")
        else {
            if(res.user_id!=undefined) navigate(`/userpage/${res.user_id}`)
            else navigate('/')
    
        }
    });
}
    return(
        <div className="home_page">
        <div  >
           
            <form class="login" className="form_background" action="">
                <h3>Login Here</h3>
                <label for="email">Email</label>
                <input type="text" name="email"  onChange={(e)=>setEmail(e.target.value)} className="form_input" placeholder="Email" />
                <label for="password">Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" class="form_input" placeholder="Password" />
                <div onClick={func} className="login_button">Login</div>
            </form>
        </div>
        </div>
    )
}

export default Login