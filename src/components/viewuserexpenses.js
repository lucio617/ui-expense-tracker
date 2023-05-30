import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./navbar";
const Viewuserexpenses = () => {
    const { id } = useParams()
    const [expenses, setExpenses] = useState([])
    const navigate = useNavigate()
    const func = (id) => {

        navigate(`/expenseview/${id}`)
    }

    useEffect(() => {
        fetch(`/viewexpenseuser/${id}`, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                setExpenses(res)

            })
    }, [])
    return (
        <div>
            <Navbar user_id={id}></Navbar>
            <label className="exp_form_title" style={{ marginTop: "10%", marginBottom: "0%", fontSize: "2.2rem" }}>Your Expenses</label>
            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: "center", marginTop: "1%" }}>

                <div className="styled-table">
                    <table >
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Desc</th>
                                <th>Date</th>
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
                                        <td>{e.desc}</td>
                                        <td>{e.date}</td>
                                        <td>{e.amount}</td>
                                        <td>{e.status}</td>
                                        <td> <a  href="" onClick={() => func(e.id)}> View</a></td>
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

export default Viewuserexpenses