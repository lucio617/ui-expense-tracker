import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar=(props)=>{
    
    const usr_id=localStorage.getItem("user_id")
    const navigate=useNavigate()
    const cexp=(usr_id)=>{
        
        navigate(`/createexp/${usr_id}`)
    }
    
    const yexp=(usr_id)=>{
        navigate(`/viewuserexpenses/${usr_id}`)
    }
    
    return(
        <div>
            <ul>
                <li> <a href="">Home</a></li>
                <li> <a href="" onClick={()=>cexp(usr_id)}>Create Expense</a></li>
                <li> <a  href="" onClick={()=>yexp(usr_id)}>Your Expenses</a></li>
                <li> <a href="/">Log Out</a></li>
               
            </ul>
        </div>
    )
}

export default Navbar