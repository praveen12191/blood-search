import { useState } from "react";
import "./css/details.css"
import NavBar from "./navBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DonorDetails = ({details,setpopdata}) => {
    const navigate = useNavigate();
    const fun = (val)=>{
        const url = "http://localhost:3000/check"
        setpopdata(val)
        navigate("/pin")
    }
    return (
        <div>
            <NavBar></NavBar>
        {details.map((i)=>(
            <div className="top">
                <div className="details">
                     <h5>Name:{i.name}</h5>
                     <p>Age:{i.age}</p>
                     <p>Group:{i.group}</p>
                     <p>Place:{i.place}</p>
                     <h3>Phone:{i.phone}</h3>
                     <button onClick={() =>
                    {
                        fun(i)
                    }}>Delete</button>
                </div>
            </div>
    ))}
    </div>     
     );
}
 
export default DonorDetails;