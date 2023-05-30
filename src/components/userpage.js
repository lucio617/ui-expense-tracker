import React from "react";
import avatar from './images/avatar.jpeg'
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import Navbar from "./navbar";
const UserPage = () => {
    const { id } = useParams()

    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [status, setStatus] = useState("")

    const func1 = () => {
        navigate(`/createexp/${id}`)
    }

    const func2 = () => {
        navigate(`/viewuserexpenses/${id}`)
    }

    useEffect(() => {
        fetch(`/userpage/${id}`, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },

        })
            .then((res) => res.json())
            .then((res) => {
                setName(res.name)
                setStatus(res.status)
            })
    })



    return (
        <div>
          <Navbar></Navbar>
            <div className="card" style={{ marginTop: "5%" }}>
                <img src={avatar} alt="John" style={{ width: '100%' }} />

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ marginRight: '20px' }}>
                        <strong>Name:    </strong>{name}</div>
                    <div><strong>Status:       </strong>{status}</div>
                </div>
                {status=="Employed" && <a onClick={func1}>Create Expense</a>}
                <br />
                <a onClick={func2}>View Expense</a>
                <br />
                <a href="/">Log Out</a>
            </div>
        </div>
    )
}

export default UserPage