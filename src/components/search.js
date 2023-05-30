import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar=(props)=>{
    
    const usr_id=localStorage.getItem("user_id")
    const navigate=useNavigate()
    const cexp=(usr_id)=>{
        
        navigate(`/createxp/${usr_id}`)
    }
    
    const yexp=(usr_id)=>{
        navigate(`/viewuserexpenses/${usr_id}`)
    }
   
    
    return(
        <div>
            <ul>
                <li> <a href="">Home</a></li>
               <div style={{float:'right',marginTop:"8px"}}>
                    <input   style={{marginLeft:"20px",height:"20px"}}type="text" name="search" />
                   <button  style={{marginLeft:"20px",height:"30px",marginRight:"20px",borderRadius:"10px",color:"white",backgroundColor:"blue"}}>Search</button>
                   </div>
            </ul>
        </div>
    )
}

export default Navbar