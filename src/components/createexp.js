import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";

const Createexp=()=>{
    const [invoice_id,setInvoice]=useState(0)
    const [date,setDate]=useState("")
    const [desc,setDesc]=useState("")
    const [amount,setAmount]=useState(0)
    const [doc,setDocument]=useState("")
    const [dataUrl,setUrl]=useState("")

    const {id}=useParams() 
    
    

    const func=(url)=>{
        fetch('/createexp',{
            method:"post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                invoice_id:invoice_id,
                date:date,
                desc:desc,
                amount:amount,
                user_id:`${id}`,
                status:"In Queue",
                doc:url

            })
        })
        .then((res)=> res.json())
        .then((res)=>{
            alert("Expense Added Successfully")
            
        })
    }

    const func2=()=>{
        
        const data = new FormData()
        data.append("file",doc)
        data.append("upload_preset","expense-tracker")
        data.append("cloud_name","dzfvfuimi")
        fetch("https://api.cloudinary.com/v1_1/dzfvfuimi/image/upload",{
            method: "post",
            body: data
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res.url)
            setUrl(res.url)
            func(res.url)
            // handleSubmit(data.url)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    

    return (
        <div>
             <ul>
                <li> <a href="/">Home</a></li>
               <div style={{float:'right',marginTop:"8px"}}>
                  
                   </div>
            </ul>
        <div className="exp_center">
        <div className="createExp" style={{height:"700px"}}>
            <div class="exp_form_title"> Create Expense</div>
            <div>
                <label>Invoice Id</label>
                <input type="number" onChange={(e)=>{setInvoice(e.target.value)}} name="invoice" placeholder="0" />
                <label >Date</label>
                <input type="text" onChange={(e)=>{setDate(e.target.value)}} name="date" placeholder="Date"/>
                <label>Description</label>
                <input type="text" name="desc" onChange={(e)=>{setDesc(e.target.value)}} placeholder="Flight"/>
                <label >Amount</label>
                <input type="number" name="amount" onChange={(e)=>{setAmount(e.target.value)}} placeholder="0" />
                <label >Supporting Document</label>
                <input class ="file_upload" type="file" accept="image/png ,image/jpeg" onChange={(e)=>{setDocument(e.target.files[0])}} />
                <div onClick={func2} className="login_button">Create</div>
            </div>
            
        </div>
        </div>
        </div>
    )
}

export default Createexp