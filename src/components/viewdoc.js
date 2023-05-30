import React from "react";
import { useParams } from "react-router-dom";

const Viewdoc=()=>{
    const url=localStorage.getItem("url")
    return (
        <div>
            <img src={url} alt="" />
        </div>
    )
}
export default Viewdoc