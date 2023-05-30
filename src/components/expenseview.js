import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Comments from "./comments";
import Navbar from "./navbar";
const Expenseview = () => {
    const [expence, setExpense] = useState([])
    const [comments,setComments]=useState([])
    const navigate=useNavigate()
    const { id } = useParams()
    const [dUrl,setUrl]=useState("")
    const viewDoc=(eid)=>{
        fetch(`/viewdoc/${eid}`,{
            method:"get",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res)=>res.json())
        .then((res)=>{
            setUrl(res)
            console.log(res)
            localStorage.setItem("url",res.imageUrl)
            navigate(`/viewdoc`)
        
        })
    }
    useEffect(() => {
        fetch(`/viewexpense/viewuser/${id}`, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },

        })
            .then((res) => res.json())
            .then((res) => {
                setExpense(res)
                setComments(res.comments)
                // console.log(res)
                // console.log(res.comments)
            })
    }, [])
    console.log(expence.id)
    return (
        <div>
            <ul>
                <li> <a href="/">Home</a></li>
               <div style={{float:'right',marginTop:"8px"}}>
                   </div>
            </ul>
        <div style={{ width: '100%', height: '100%', display: 'flex',flexDirection:"column", marginTop: "2%" }}>
           <label style={{display:"flex",flexDirection:"column",float:"left",textAlign:"left"}} class="exp_form_title" >Expense Details:</label>
            <div class="styled-table" style={{backgroundColor:"darkcyan"}}>
                <table>
                    <tr>

                        <th>Invoice Id:</th>
                        <th>Date:</th>
                        <th>Amount:</th>
                        <th>Description:</th>
                        <th>Status:</th>
                        <th>View Document</th>
                    </tr>
                    <tbody>

                        <tr>

                            <td>{expence.invoice_id}</td>
                            <td>{expence.date}</td>
                            <td>{expence.amount}</td>
                            <td>{expence.desc}</td>
                            <td>{expence.status}</td>
                            <td><a  onClick={()=>viewDoc(expence.id)}>View</a></td>




                        </tr>


                    </tbody>
                </table>
            </div>
            <div>
            <label style={{display:"flex",flexDirection:"column",float:"left",textAlign:"left"}} class="exp_form_title" >Comments:</label>
            <Comments commnts={comments} exp_id={id}></Comments>
            </div>
        </div>
        </div>
        
    )
}

export default Expenseview