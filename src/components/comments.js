import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Comments = (props) => {
    const comments = props.commnts
    const [desc,setDesc]=useState("")
    
    // console.log(comments)
    const func = () => {
            const user_id=localStorage.getItem("user_id")
            fetch(`/addcomment`,{
                method:"post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    desc:desc,
                    expense_id:props.exp_id,
                    user_id:user_id

                })
            })
            .then((res)=>{
                window.location.reload(false)
            })
    }
    return (
        <div>
            <section id="app">
                <div class="container">
                    <div class="row">
                        <div class="col-6">
                            <div class="comment">
                                <p v-for="items in item" v-text="items"></p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            {comments.map(c => {
                                return (
                                    <tr>
                                        <td><strong>{c.user_name}:</strong></td>
                                        <td>{c.desc}</td>
                                    </tr>
                                )
                            })}
                          <input type="text"  style={{height:"28px",width:"400px",float:"left"}}  value={desc} class="input" onChange={(e)=>{setDesc(e.target.value)}}></input>
                            <a class='primaryContained' onClick={func} type="submit">Add Comment</a>
                        </div>
                    </div>
                </div>
            </section >
        </div >

    )
}


export default Comments