import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "./navbar";

const AdminExpenseView = () => {
    const {id} = useParams()
    const [expenses,setExpenses]=useState([])
    const [userName,setName]=useState("")
    const navigate=useNavigate()
    useEffect(()=>{
        fetch(`/viewexpense/${id}`, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res)=>res.json())
            .then((res) => {
                setExpenses(res.expensesj)
                setName(res.usr_name)
            })
    },[])
    const expenseView=(eid)=>{
        navigate(`/expenseview/${eid}`)
    }
    console.log(expenses)

    const approve=(eid)=>{
            fetch(`/approve/${eid}`,{
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

    const decline=(eid)=>{
        fetch(`/reject/${eid}`,{
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

    

    
    
    return (
        <div>
            <ul>
                <li> <a href="/">Home</a></li>
               <div style={{float:'right',marginTop:"8px"}}>
                   </div>
            </ul>
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: "12%" }}>
            <label style={{display:"flex",flexDirection:"column"}} class="exp_form_title">Expenses for {userName} </label>
            <div class="styled-table" style={{width:"55%"}}>
                <table >
                    <thead>
                        <tr>
                            <th>Invoice Id</th>
                            <th>Date</th>
                            <th>Desc</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th colSpan={3}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map(e => {
                            return (
                                <tr>
                                    <td>{e.invoice_id}</td>
                                    <td>{e.date}</td>
                                    <td>{e.desc}</td>
                                    <td>{e.amount}</td>
                                    <td>{e.status}</td>
                                    <td><a href="" onClick={() => expenseView(e.id)}>View</a></td>
                                    <td><a href=""onClick={()=>approve(e.id)}>Approve</a></td>
                                    <td><a href=""onClick={()=>decline(e.id)}>Reject</a></td>
                                </tr>
                            )
                        })}


                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}

export default AdminExpenseView